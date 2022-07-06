import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreate {
    email: string;
    cpf: string;
    password: string;
    phone: string;
}

export class CreateHairdresserUseCase {
    async execute({ email, cpf, password, phone }: ICreate) {
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
                cpf,
                phone,
                password: hashPassword,

            }
        })

        return hairdresser;
    }
}