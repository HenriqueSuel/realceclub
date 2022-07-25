import { Request, Response } from 'express';
import { FindWorkScheduleHairdresser } from './findWorkSheduleHairdresser.useCase';

export class FindWorkSheduleHairdresserController {
  async handle(request: Request, response: Response) {
    const { id_hairdresser } = request;

    const findWorkScheduleHairdresser = new FindWorkScheduleHairdresser();
    const result = await findWorkScheduleHairdresser.execute(id_hairdresser)

    return response.json(result);
  }
}
