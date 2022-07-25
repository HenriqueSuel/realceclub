


import { prisma } from '../../../../database/prismaClient';

export class FindWorkScheduleHairdresser {
    async execute(id_hairdresser: string) {
        const workSchedule = await prisma.work_Schedule.findMany({
            where: {
                contract: {
                    id_hairdresser,
                }
            },
            include: {
                work_Breaks: true,
                contract: {
                    select: {
                        company: {
                            select: {
                                name_company: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                week: {
                    id: 'asc'
                }
            }
        });
        return workSchedule
    }
}
