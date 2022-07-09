import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
    email: string;
    cnpj: string;
    password: string;
    phone: string;
    name_company: string;
}

export class CreateCompanyUseCase {
    async execute({ email, cnpj, password, phone, name_company }: ICreateClient) {
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
                name_company,
                cnpj,
                phone,
                password: hashPassword,

            }
        })

        return company;
    }
}