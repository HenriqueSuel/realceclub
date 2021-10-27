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

    async getInviteCompany(request: Request, response: Response): Promise<Response> {
        const { id } = request['company'];

        const companyService = container.resolve(ContractService);

        const contracts = await companyService.findInviteCompany(id)

        return response.status(201).json(contracts);
    } 

    async getInviteEmployees(request: Request, response: Response): Promise<Response> {
        const { id } = request['employees'];

        const companyService = container.resolve(ContractService);

        const contracts = await companyService.findInviteEmployees(id)

        return response.status(201).json(contracts);
    } 

    async handleInvite(request: Request, response: Response): Promise<Response> {
        const { id: employee_id } = request['employees'];
        const  { invitation_status, id_contract }  = request.body
        const companyService = container.resolve(ContractService);

        await companyService.handleInvite(employee_id,id_contract, invitation_status)

        return response.status(200).send()
    } 

}

export {ContractsController};