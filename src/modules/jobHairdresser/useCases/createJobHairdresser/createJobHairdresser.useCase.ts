import { prisma } from "../../../../database/prismaClient";

interface IProps {
    id_contract: string;
    duration: string;
    id_job: string;
}

export class CreateJobHairdresser {
    async execute({ id_contract, duration, id_job }: IProps) {

        const job = await prisma.job_hairdresser.create({
            data: {
                duration,
                id_contract,
                id_job_sub_categories: id_job
            }
        })

        return job;
    }
}