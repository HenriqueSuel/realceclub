import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';

interface IAuthenticateCompany {
    email: string;
    password: string;
    
}

export class AuthenticateCompanyUseCase {
    async execute({ email, password }: IAuthenticateCompany) {
        const company = await prisma.company.findFirst({
            where: {
                email,
            },
        });

        if (!company) {
            throw new Error('Email or password invalid!');
        }

        const passwordMatch = await compare(password, company.password);

        if (!passwordMatch) {
            throw new Error('Email or password invalid!');
        }

        const token = sign({ email }, '739f8ebd49733117a132c34fe866bc09', {
            subject: company.id,
            expiresIn: '1d',
        });

        return { token };
    }
}
