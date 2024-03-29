import { Request, Response } from "express";
import { CreateSubCategoryUseCase } from "./createSubCategory.useCase";

export class CreateSubCategoryController {
    async handle(request: Request, response: Response) {
        const { id_category, name, description, price } = request.body;
        
        const createSubCategoryUseCase = new CreateSubCategoryUseCase();

        const result = await createSubCategoryUseCase.execute({ id_category, name, description, price })

        return response.json(result);
    }
}