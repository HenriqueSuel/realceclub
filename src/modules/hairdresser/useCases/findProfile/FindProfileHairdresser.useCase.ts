


import { prisma } from '../../../../database/prismaClient';

export class FindProfileHairdresser {
    async execute(id_hairdresser: string) {
        const hairdresser = await prisma.hairdresser.findUnique({
            where: {
                id: id_hairdresser,
            },
        });

        if (!hairdresser) {
            throw new Error('Pessoa fisica não encontrada');
        }

        return hairdresser;
    }
}
