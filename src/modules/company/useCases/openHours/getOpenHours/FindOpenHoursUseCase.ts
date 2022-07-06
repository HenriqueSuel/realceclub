import { prisma } from "../../../../../database/prismaClient";
import { dataOpenHours } from "../../../../../helps/dataOpenHours";


export class FindOpenHoursUseCase {
    async execute(id_company: string) {

        console.log('COMPANY AQUI HENRIQUE', prisma.company)
        console.log('opening_hours_company AQUI HENRIQUE', prisma.funcionamento);



        const openingHoursExists = await prisma.funcionamento.findFirst({
            where: {
                id_company
            }
        });

        if (!openingHoursExists) {
            const openingHours = await prisma.funcionamento.create({
                data: {
                    ...dataOpenHours,
                    id_company
                }
            })

            return openingHours;
        }

        return openingHoursExists;
    }
}