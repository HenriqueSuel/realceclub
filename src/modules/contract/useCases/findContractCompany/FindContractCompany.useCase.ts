import { prisma } from "../../../../database/prismaClient";

interface IProps {
    id_company: string;
}

export class FindContractCompany {
    async execute({ id_company }: IProps) {


        const listContract = await prisma.contract.findMany({
            where: {
                id_company,
            },
            select: {
                status: true,
                hairdresser: {
                    select: {
                        email: true,
                        update_at: true,
                        name: true
                    }
                }
            }
        })

        return listContract;
    }
}