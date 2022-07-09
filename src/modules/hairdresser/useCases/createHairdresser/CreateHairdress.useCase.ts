import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreate {
    email: string;
    cpf: string;
    password: string;
    phone: string;
    name: string;
}

export class CreateHairdresserUseCase {
    async execute({ email, cpf, password, phone, name }: ICreate) {
        const hairdresserExist = await prisma.hairdresser.findUnique({
            where: {
                email
            }
        });

        if (hairdresserExist) {
            throw new Error("Email já existe");
        }

        const hashPassword = await hash(password, 10);

        const hairdresser = await prisma.hairdresser.create({
            data: {
                email,
                name,
                cpf,
                phone,
                password: hashPassword,

            }
        })

        return hairdresser;
    }
}