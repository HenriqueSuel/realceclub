import { Request, Response } from "express";
import { ChangeStatusContract } from "./changeStatusContract.useCase";


export class ChangeStatusController {
    async handle(request: Request, response: Response) {
        const { status, id} = request.body;

        const { id_hairdresser } = request
        const changeStatusContract = new ChangeStatusContract();

        await changeStatusContract.execute({ status, id_hairdresser, id })
        return response.status(200).json();
    }
}