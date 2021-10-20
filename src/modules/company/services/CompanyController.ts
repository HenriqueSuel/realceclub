import { AppError } from "@shared/errors/AppError";
import { CnpjValidator } from "@utils/CnpjValidator";
import { CpfValidator } from "@utils/CpfValidator";
import { ERROR } from "@utils/message/errorMessage";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CompanyService } from "./CompanyService";


class CompanyController {

    async create(request: Request, response: Response): Promise<Response> {
        const { cnpj, email,name_company,owner_name,password,phone } = request.body as unknown as ICompanyDto

        if(!CnpjValidator(cnpj)) {
            throw new AppError(ERROR.COMPANY.CNPJ);
        }

        const companyService = container.resolve(CompanyService);

        const company = await companyService.create({ cnpj, email,name_company,owner_name,password,phone })

        return response.status(201).json(company);
    } 

    async update(request: Request, response: Response): Promise<Response> {
        const  {id, name_company, owner_name, phone }  = request.body as unknown as ICompanyDto

        const companyService = container.resolve(CompanyService);

        const company = await companyService.update({ id, name_company, owner_name, phone })

        return response.status(201).json(company);
    } 

}

export {CompanyController};