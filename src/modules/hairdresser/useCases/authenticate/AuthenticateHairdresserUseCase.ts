import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';

interface IAuthenticate {
    email: string;
    password: string;
    
}

export class AuthenticateHairdresserUseCase {
    async execute({ email, password }: IAuthenticate) {
        const hairdresser = await prisma.hairdresser.findFirst({
            where: {
                email,
            },
        });

        if (!hairdresser) {
            throw new Error('Email ou senha invalido!');
        }

        const passwordMatch = await compare(password, hairdresser.password);

        if (!passwordMatch) {
            throw new Error('Email ou senha invalido!');
        }

        const token = sign({ email }, '739f8ebd49733117a132c34fe866bc09', {
            subject: hairdresser.id,
            expiresIn: '1d',
        });

        return { token };
    }
}
