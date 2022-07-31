import { prisma } from "../../../../../database/prismaClient";

interface IProps {
    id_category: string;
    name: string;
    description: string;
}

export class CreateSubCategoryUseCase {
    async execute({ id_category, description, name }: IProps) {

        const findCategoryWithNameEqual = await prisma.job_Sub_Categories.findFirst({
            where: {
                name
            }
        });

        if (findCategoryWithNameEqual) {
            throw new Error("Nome já existe");
        }

        const subCategory = await prisma.job_Sub_Categories.create({
            data: {
                name,
                description,
                id_job_category_company: id_category,
            }
        });

        return subCategory;
    }
}