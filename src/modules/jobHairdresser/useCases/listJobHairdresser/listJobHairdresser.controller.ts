import { Request, Response } from "express";
import { ListJobHairdresser } from "./listJobHairdresser.useCase";



export class ListJobHairdresserController {
    async handle(request: Request, response: Response) {
        const { id_hairdresser } = request
        const listJobHairdresser = new ListJobHairdresser();

        const result = await listJobHairdresser.execute({ id_hairdresser })

        return response.json(result);
    }
}