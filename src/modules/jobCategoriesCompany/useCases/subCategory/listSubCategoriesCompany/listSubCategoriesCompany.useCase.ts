import { prisma } from "../../../../../database/prismaClient";

interface IProps {
    id_company: string;
}

export class ListSubCategoriesCompany {
    async execute({ id_company }: IProps) {


        const listSubCategory = await prisma.job_Sub_Categories.findMany({
            where: {
                job_categories_company: {
                    company: {
                        id: id_company
                    }
                }
            },
            include: {
                job_categories_company: {
                    select: {
                        job_categories: true
                    }
                }
            }
        });

        return listSubCategory;
    }
}