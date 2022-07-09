import { Request, Response } from 'express';
import { FindHairdresserUseCase } from './FindHairdresser.useCase';

export class FindHairdresserController {
    async handle(request: Request, response: Response) {
        const email = request.query.email as string;

        const findHairdresserUseCase = new FindHairdresserUseCase();
        const result = await findHairdresserUseCase.execute({ email })

        return response.json(result);
    }
}
