import { Request, Response } from "express";
import { UpdateOpenHoursUseCase } from "./UpdateOpenHoursUseCase";


export class UpdateOpenHoursController {
    async handle(request: Request, response: Response) {
        const { id_company } = request;
        const updateOpenHoursUseCase = new UpdateOpenHoursUseCase();

        const result = await updateOpenHoursUseCase.execute(request.body, id_company)

        return response.json(result);
    }
}