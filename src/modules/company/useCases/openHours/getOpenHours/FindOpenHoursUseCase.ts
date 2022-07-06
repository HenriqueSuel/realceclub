import { prisma } from "../../../../../database/prismaClient";
import { dataOpenHours } from "../../../../../helps/dataOpenHours";


export class FindOpenHoursUseCase {
    async execute(id_company: string) {

        console.log('COMPANY AQUI HENRIQUE', prisma.company)
        console.log('funcionamento AQUI HENRIQUE', prisma.funcionamento);
        console.log('opening_hours_company AQUI HENRIQUE', prisma.opening_hours_company);



        const openingHoursExists = await prisma.opening_hours_company.findFirst({
            where: {
                id_company
            }
        });

        if (!openingHoursExists) {
            const openingHours = await prisma.opening_hours_company.create({
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