import { Request, Response } from "express";
import { DeleteSubCategory } from "./deleteSubCategory.useCase";

export class DeleteSubCategoryController {
    async handle(request: Request, response: Response) {
        const id = request.query.id as string;
        const deleteSubCategory = new DeleteSubCategory();

        const result = await deleteSubCategory.execute({ id })

        return response.json(result);
    }
}