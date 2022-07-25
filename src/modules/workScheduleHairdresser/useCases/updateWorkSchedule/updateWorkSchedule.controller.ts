import { Request, Response } from 'express';
import { UpdateWorkSchedule } from './updateWorkSchedule.useCase';

export class UpdateWorkScheduleController {
    async handle(request: Request, response: Response) {
        const { id_contract, start, end, name_week, work_Breaks, id } = request.body;
        const { id_hairdresser } = request;

        const updateWorkSchedule = new UpdateWorkSchedule();
        const result = await updateWorkSchedule.execute({ id, id_contract, start, end, name_week, work_Breaks, id_hairdresser})

        return response.json(result);
    }
}
