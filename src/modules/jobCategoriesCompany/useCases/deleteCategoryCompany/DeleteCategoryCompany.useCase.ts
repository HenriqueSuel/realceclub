import { prisma } from "../../../../database/prismaClient";

interface IProps {
    id_category: string;
    id_company: string;
}

export class DeleteCategoryCompanyUseCase {
    async execute({ id_category }: IProps) {

        const subCategory = await prisma.job_Sub_Categories.findFirst({
            where: {
                id_job_category_company: id_category
            }
        });

        if(subCategory) {
            throw new Error("Você deve excluir primeiro os serviços criados!");
        }

        const category = await prisma.job_Categories_Company.delete({
            where: {
                id: id_category,
            }
        });

        return category;


    }
}