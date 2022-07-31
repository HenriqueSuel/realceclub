import { Request, Response } from "express";
import { SeachCategoryUseCase } from "./seachCategory.useCase";

export class SeachCategoryController {
    async handle(request: Request, response: Response) {
        const seachCategoryUseCase = new SeachCategoryUseCase();

        const result = await seachCategoryUseCase.execute()

        return response.json(result);
    }
}