import { Request, Response } from "express";
import { DeleteCategoryCompanyUseCase } from "./DeleteCategoryCompany.useCase";

export class DeleteCategoryCompanyController {
    async handle(request: Request, response: Response) {
        const id_category = request.query.id_category as string;
        console.log(id_category);
        const { id_company } = request;

        const deleteCategoryCompanyUseCase = new DeleteCategoryCompanyUseCase();

        const result = await deleteCategoryCompanyUseCase.execute({ id_category, id_company })

        return response.json(result);
    }
}