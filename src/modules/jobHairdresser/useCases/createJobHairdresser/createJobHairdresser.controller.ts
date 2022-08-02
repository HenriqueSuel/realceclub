import { Request, Response } from "express";
import { CreateJobHairdresser } from "./createJobHairdresser.useCase";



export class CreateJobHairdresserController {
    async handle(request: Request, response: Response) {
        const { duration, id_contract, id_job } = request.body
        const createJobHairdresser = new CreateJobHairdresser();

        const result = await createJobHairdresser.execute({ duration, id_contract, id_job })

        return response.json(result);
    }
}