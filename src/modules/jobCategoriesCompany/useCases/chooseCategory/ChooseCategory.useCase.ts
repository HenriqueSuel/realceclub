import { prisma } from "../../../../database/prismaClient";

interface IProps {
    id_category: string;
    id_company: string;
}

export class ChooseCategoryUseCase {
    async execute({ id_category, id_company }: IProps) {

        const category = await prisma.job_Categories.findFirst({
            where: {
                id: id_category
            }
        });

        if (!category) {
            throw new Error("Categoria invalida");
        }

        const jobs = await prisma.job_Categories_Company.findFirst({
            where: {
                id_job: id_category
            }
        })

        if (jobs) {
            throw new Error("Categoria já cadastarada");
        }

        const job = await prisma.job_Categories_Company.create({
            data: {
                id_company,
                id_job: category.id,
                status: true,
            }
        });

        return job;
    }
}