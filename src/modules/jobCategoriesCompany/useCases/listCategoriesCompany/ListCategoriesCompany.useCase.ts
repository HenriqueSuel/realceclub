import { prisma } from "../../../../database/prismaClient";

interface IProps {
    id_company: string;
}

export class ListCategoriesCompany {
    async execute({ id_company }: IProps) {

        const category = await prisma.job_Categories_Company.findMany({
            where: {
                id_company
            },
            include: {
                job_categories: true
            }
        });


        return category;
    }
}