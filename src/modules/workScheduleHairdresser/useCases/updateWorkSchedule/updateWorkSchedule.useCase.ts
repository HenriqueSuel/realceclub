


import { prisma } from '../../../../database/prismaClient';

interface IProps {
    id: string;
    start: string;
    end: string;
    name_week: string;
    id_contract: string;
    work_Breaks: [{
        id: string;
        start: string;
        end: string;
        id_work_schedule: string
    }],
    id_hairdresser: string;
}

export class UpdateWorkSchedule {
    async execute({ id, id_contract, start, end, name_week, work_Breaks, id_hairdresser }: IProps) {


        const findContractInWeek = await prisma.work_Schedule.findMany({
            where: {
                name_week,
                contract: {
                    id_hairdresser
                }
            }
        });

        const contracts = findContractInWeek.filter(contract => contract.id !== id);

        if (contracts.some(contract => contract.id_contract === id_contract)) {
            throw new Error("Você já tem um horario cadatrado com essa empresa nessa semana");
        }


        // Horario start deve ser menor q o end
        const startNumber = start.replace(':', '');
        const endNumber = end.replace(':', '');

        if (+startNumber >= +endNumber) {
            throw new Error("Horario inicial de trabalho maior que o final");
        }
        // Verifica se o intervalo está certo
        work_Breaks?.forEach(({ start, end }) => {
            const startBreakNumber = start.replace(':', '');
            const endBreakNumber = end.replace(':', '');

            if (+startBreakNumber >= +endBreakNumber) {
                throw new Error("Horario inicial do intervalo maior que o final");
            }

            if (startNumber >= startBreakNumber || endBreakNumber >= endNumber) {
                throw new Error("Intervalo de trabalho invalido");
            }

        });


        // Verificar se o horario está batendo com outras empresa
        contracts.forEach(workSchedule => {
            const startBreakNumber = workSchedule.start.replace(':', '');
            const endBreakNumber = workSchedule.end.replace(':', '');

            if ((workSchedule.id_contract !== id_contract) && (startNumber >= startBreakNumber || endNumber >= endBreakNumber || endBreakNumber === startNumber)) {
                throw new Error("Intervalo de trabalho invalido 2");
            }
        });


        const resp = await prisma.work_Schedule.create({
            data: {
                id_contract,
                name_week,
                start,
                end,
                work_Breaks: {
                    createMany: {
                        data: work_Breaks || [],
                    }
                }
            },
            include: {
                work_Breaks: true
            }
        });

        await prisma.work_Breaks.deleteMany({
            where: {
                id_work_schedule: id
            }
        });

        await prisma.work_Schedule.delete({
            where: {
                id
            }
        })


        return resp;
    }
}
