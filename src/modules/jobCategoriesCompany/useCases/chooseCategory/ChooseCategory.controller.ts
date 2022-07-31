import { Request, Response } from "express";
import { ChooseCategoryUseCase } from "./ChooseCategory.useCase";

export class ChooseCategoryController {
    async handle(request: Request, response: Response) {
        const { id_category } = request.body;
        const { id_company } = request;

        const chooseCategoryUseCase = new ChooseCategoryUseCase();

        const result = await chooseCategoryUseCase.execute({ id_category, id_company })

        return response.json(result);
    }
}