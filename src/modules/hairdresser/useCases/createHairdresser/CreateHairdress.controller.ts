import { Request, Response } from "express";
import { CreateHairdresserUseCase } from "./CreateHairdress.useCase";

export class CreateHairdresserController {
    async handle(request: Request, response: Response) {
        const createHairdresserUseCase = new CreateHairdresserUseCase();

        const result = await createHairdresserUseCase.execute(request.body)

        return response.json(result);
    }
}