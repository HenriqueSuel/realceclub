import { Request, Response } from 'express';
import { CreateWorkSchedule } from './createWorkSchedule.useCase';


export class CreateWorkScheduleController {
  async handle(request: Request, response: Response) {
    const { id_contract, start, end, name_week, work_Breaks } = request.body;
    const { id_hairdresser } = request;

    const createWorkSchedule = new CreateWorkSchedule();
    const result = await createWorkSchedule.execute({ id_contract, start, end, name_week, work_Breaks, id_hairdresser })

    return response.json(result);
  }
}
