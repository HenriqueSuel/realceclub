import { Request, Response } from "express";
import { container } from "tsyringe";
import { CompanyService } from "./CompanyService";


class CompanyController {

    async create(request: Request, response: Response): Promise<Response> {
        const { cnpj, created_at, email,name_company,owner_name,password,phone } = request.body as unknown as ICompanyDto
    
        const companyService = container.resolve(CompanyService);

        await companyService.create({ cnpj, created_at, email,name_company,owner_name,password,phone })

        return response.status(201).json({status: 'create'});
    } 

}

export {CompanyController};