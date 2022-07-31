import { prisma } from "../../../../database/prismaClient";

interface IProps {
    id_category: string;
    id_company: string;
}

export class DeleteCategoryCompanyUseCase {
    async execute({ id_category }: IProps) {

        const category = await prisma.job_Categories_Company.delete({
            where: {
                id: id_category,
            }
        });

        return category;


    }
}