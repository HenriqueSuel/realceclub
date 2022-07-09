import { Request, Response } from 'express';
import { FindProfileHairdresser } from './FindProfileHairdresser.useCase';

export class FindProfileHairdresserController {
  async handle(request: Request, response: Response) {
    const { id_hairdresser } = request.body;

    const findProfileHairdresser = new FindProfileHairdresser();
    const result = await findProfileHairdresser.execute(id_hairdresser)

    return response.json(result);
  }
}
