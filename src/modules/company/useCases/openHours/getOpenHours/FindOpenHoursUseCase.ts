import { prisma } from "../../../../../database/prismaClient";
import { dataOpenHours } from "../../../../../helps/dataOpenHours";
import { IOpeningHoursCompany } from "../../../../../interfaces/openHours.interface";


export class FindOpenHoursUseCase {
    async execute(data: IOpeningHoursCompany, id_company: string) {

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