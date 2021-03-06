import { Request, Response } from "express";
import { InviteContractToHairdress } from "./inviteContractToHairdress.useCase";


export class InviteContractToHairdressController {
    async handle(request: Request, response: Response) {

        const { id: id_hairdresser } = request.body;
        
        const { id_company } = request
        const iviteContractToHairdress = new InviteContractToHairdress();

        const result = await iviteContractToHairdress.execute({ id_company, id_hairdresser })

        return response.json(result);
    }
}