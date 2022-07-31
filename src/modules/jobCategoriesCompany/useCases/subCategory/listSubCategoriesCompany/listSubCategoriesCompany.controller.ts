import { Request, Response } from "express";
import { ListSubCategoriesCompany } from "./listSubCategoriesCompany.useCase";

export class ListSubCategoriesCompanyController {
    async handle(request: Request, response: Response) {
        const { id_company } = request;

        const listSubCategoriesCompany = new ListSubCategoriesCompany();

        const result = await listSubCategoriesCompany.execute({ id_company })

        return response.json(result);
    }
}