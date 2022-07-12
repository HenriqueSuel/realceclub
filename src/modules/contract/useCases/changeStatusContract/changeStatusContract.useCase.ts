
import { prisma } from "../../../../database/prismaClient";
import { validationStatusInivte } from "../../ultis/validationsStatusInvite";

interface IProps {
    id_hairdresser: string;
    status: string;
    id: string;
}
export class ChangeStatusContract {
    async execute({ id_hairdresser, status, id }: IProps) {


        if (!validationStatusInivte(status)) {
            throw new Error("Status invalido!");
        }

        const findContract = await prisma.contract.findFirst({
            where: {
                id_hairdresser,
                id,
            }
        });

        if (!findContract) {
            throw new Error("Nenhum contrato encontrado");
        }


        await prisma.contract.update({
            data: {
                status,
            },
            where: {
                id: findContract.id
            }
        });

        return null;
    }
}