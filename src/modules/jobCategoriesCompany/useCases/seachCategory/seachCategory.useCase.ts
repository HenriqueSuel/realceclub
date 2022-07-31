import { prisma } from "../../../../database/prismaClient";

export class SeachCategoryUseCase {
    async execute() {

        const category = await prisma.job_Categories.findMany();

        return category;
    }
}