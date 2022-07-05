import { prisma } from "../../../../../database/prismaClient";
import { dataOpenHours } from "../../../../../helps/dataOpenHours";


export class FindOpenHoursUseCase {
    async execute(id_company: string) {

        /*     const openingHoursExists = await prisma.opening_hours_company.findFirst({
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
            } */

        const openingHours = await prisma.opening_hours_company.create({
            data: {
                ...dataOpenHours,
                id_company
            }
        })

        return openingHours;

    }
}