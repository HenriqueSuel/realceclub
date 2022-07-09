import { prisma } from "../../../../database/prismaClient";

interface IProps {
    id_company: string;
    id_hairdress: string;
}

export class InviteContractToHairdress {
    async execute({ id_company, id_hairdress }: IProps) {


        const findContract = await prisma.contract.findFirst({
            where: {
                id_company,
                id_hairdress,
                status: 'send'
            }
        })

        if (findContract) {
            throw new Error("Convite já foi enviado!");
        }


        const contract = await prisma.contract.create({
            data: {
                status: 'send',
                id_company,
                id_hairdress
            }
        })
        return contract;
    }
}