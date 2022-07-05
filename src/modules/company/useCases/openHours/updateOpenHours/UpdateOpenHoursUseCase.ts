import { prisma } from "../../../../../database/prismaClient";
import { IOpeningHoursCompany } from "../../../../../interfaces/openHours.interface";



export class UpdateOpenHoursUseCase {
    async execute(data: IOpeningHoursCompany, id_company: string) {

        const openingHours = await prisma.opening_hours_company.update({
            data: {
                ...data,
                id_company
            },
            where: {
                id: data.id
            }
        })

        return openingHours;

    }
}