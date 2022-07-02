import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
    email: string;
    cnpj: string;
    password: string;
    phone: string;
}

export class CreateCompanyUseCase {
    async execute({ email, cnpj, password, phone }: ICreateClient) {
        const companyExist = await prisma.company.findUnique({
            where: {
                email
            }
        });

        if (companyExist) {
            throw new Error("Company já existe");
        }

        const hashPassword = await hash(password, 10);

        const company = await prisma.company.create({
            data: {
                email,
                cnpj,
                phone,
                password: hashPassword,
                
            }
        })

        return company;
    }
}