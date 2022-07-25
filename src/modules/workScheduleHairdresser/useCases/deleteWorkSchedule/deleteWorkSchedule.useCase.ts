


import { prisma } from '../../../../database/prismaClient';


export class DeleteWorkSchedule {
    async execute(id: string) {

        await prisma.work_Breaks.deleteMany({
            where: {
                id_work_schedule: id
            }
        });

        const workSchedule = await prisma.work_Schedule.delete({
            where: {
                id: id
            },
        });
        return workSchedule
    }
}
