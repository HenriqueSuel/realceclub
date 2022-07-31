import { Request, Response } from "express";
import { ListCategoriesCompany } from "./ListCategoriesCompany.useCase";

export class ListCategoriesCompanyController {
    async handle(request: Request, response: Response) {
        const { id_company } = request;

        const listCategoriesCompany = new ListCategoriesCompany();

        const result = await listCategoriesCompany.execute({ id_company })

        return response.json(result);
    }
}