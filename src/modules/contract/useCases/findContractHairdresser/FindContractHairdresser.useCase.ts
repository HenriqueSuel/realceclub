import { prisma } from "../../../../database/prismaClient";

interface IProps {
    id_hairdresser: string;
}

export class FindContractHairdresser {
    async execute({ id_hairdresser }: IProps) {

        const listContract = await prisma.contract.findMany({
            where: {
                id_hairdresser
            },
            select: {
                status: true,
                id: true,
                company: {
                    select: {
                        name_company: true,
                        email: true,

                    }
                }
            }
        })

        return listContract;
    }
}