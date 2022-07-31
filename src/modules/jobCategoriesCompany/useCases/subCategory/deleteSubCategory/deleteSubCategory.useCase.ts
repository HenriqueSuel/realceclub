import { prisma } from "../../../../../database/prismaClient";

interface IProps {
    id: string;
}

export class DeleteSubCategory {
    async execute({ id }: IProps) {

        const category = await prisma.job_Sub_Categories.delete({
            where: {
                id,
            }
        });

        return category;


    }
}