import { Request, Response } from "express";
import { FindContractCompany } from "./FindContractCompany.useCase";


export class FindContractCompanyController {
    async handle(request: Request, response: Response) {
        const { id_company } = request
        const findContractCompany = new FindContractCompany();

        const result = await findContractCompany.execute({ id_company })

        return response.json(result);
    }
}