import { Request, Response } from "express";
import { FindContractHairdresser } from "./FindContractHairdresser.useCase";



export class FindContractHairdresserController {
    async handle(request: Request, response: Response) {
        const { id_hairdresser } = request
        const findContractCompany = new FindContractHairdresser();

        const result = await findContractCompany.execute({ id_hairdresser })

        return response.json(result);
    }
}