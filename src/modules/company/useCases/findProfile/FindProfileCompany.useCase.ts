


import { prisma } from '../../../../database/prismaClient';

export class FindProfileCompany {
    async execute(id_company: string) {
        const company = await prisma.company.findUnique({
            where: {
                id: id_company,
            },
        });

        if (!company) {
            throw new Error('Empresa não encontrada');
        }

        return company;
    }
}
