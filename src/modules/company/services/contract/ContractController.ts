import { Request, Response } from "express";
import { container } from "tsyringe";
import { ContractService } from "./ContractService";

class ContractsController {
    
    async inviteEmployees(request: Request, response: Response): Promise<Response> {
        const { id } = request['company'];
        const  { cpf }  = request.body

        const companyService = container.resolve(ContractService);

        await companyService.inviteEmployees(id,cpf)

        return response.status(201).send();
    } 

    async getInvite(request: Request, response: Response): Promise<Response> {
        const { id } = request['employees'];

        const companyService = container.resolve(ContractService);

        const contracts = await companyService.getInvite(id)

        return response.status(201).json(contracts);
    } 

}

export {ContractsController};