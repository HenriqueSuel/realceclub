import { Request, Response } from "express";
import { FindOpenHoursUseCase } from "./FindOpenHoursUseCase";


export class FindOpenHoursController {
    async handle(request: Request, response: Response) {
        const { id_company } = request;
        const findOpenHoursUseCase = new FindOpenHoursUseCase();

        const result = await findOpenHoursUseCase.execute(id_company)

        return response.json(result);
    }
}