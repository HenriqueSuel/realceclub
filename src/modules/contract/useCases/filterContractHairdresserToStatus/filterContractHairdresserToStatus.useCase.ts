import { prisma } from "../../../../database/prismaClient";

interface IProps {
    id_hairdresser: string;
    status: string;
}

export class FilterContractHairdresserToStatus {
    async execute({ id_hairdresser, status }: IProps) {

        const listContract = await prisma.contract.findMany({
            where: {
                id_hairdresser,
                status
            },
            select: {
                id: true,
                company: {
                    select: {
                        name_company: true,
                        email: true,
                        opening_hours_company: true
                    }
                }
            }
        })

        return listContract;
    }
}