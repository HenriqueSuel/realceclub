import { prisma } from "../../../../database/prismaClient";

interface IProps {
    id_hairdresser: string;
}

export class ListJobHairdresser {
    async execute({ id_hairdresser }: IProps) {

        const job = await prisma.job_hairdresser.findMany({
            where: {
                contract: {
                    hairdresser: {
                        id: id_hairdresser
                    }
                }
            }
        });

        return job;
    }
}