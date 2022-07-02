import { Request, Response } from "express";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";


export class CreateCompanyController {
    async handle(request: Request, response: Response) {
        const createClientUseCase = new CreateCompanyUseCase();

        const result = await createClientUseCase.execute(request.body)

        return response.json(result);
    }
}