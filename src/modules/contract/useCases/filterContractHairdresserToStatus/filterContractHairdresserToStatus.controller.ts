import { Request, Response } from "express";
import { FilterContractHairdresserToStatus } from "./filterContractHairdresserToStatus.useCase";



export class  FilterContractHairdresserToStatusController {
    async handle(request: Request, response: Response) {
        const { id_hairdresser } = request
        const status = request.query.status as string;

        const findContractCompany = new FilterContractHairdresserToStatus();

        const result = await findContractCompany.execute({ id_hairdresser, status })

        return response.json(result);
    }
}