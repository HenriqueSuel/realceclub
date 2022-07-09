


import { prisma } from '../../../../database/prismaClient';

interface IProps {
    email: string;
}

export class FindHairdresserUseCase {
    async execute({ email }: IProps) {
        const hairdresser = await prisma.hairdresser.findFirst({
            where: {
                email,
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        });

        if (!hairdresser) {
            throw new Error('Email não encontrado');
        }

        return hairdresser;
    }
}
