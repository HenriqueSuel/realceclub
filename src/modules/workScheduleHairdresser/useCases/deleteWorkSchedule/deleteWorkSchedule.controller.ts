import { Request, Response } from 'express';
import { DeleteWorkSchedule } from './deleteWorkSchedule.useCase';

export class DeleteWorkScheduleController {
  async handle(request: Request, response: Response) {
    const id  = request.query.id as string;

    console.log(id)

    const deleteWorkSchedule = new DeleteWorkSchedule();
    const result = await deleteWorkSchedule.execute(id)

    return response.json(result);
  }
}
