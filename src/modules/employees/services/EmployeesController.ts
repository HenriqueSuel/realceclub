import { AppError } from "@shared/errors/AppError";
import { CpfValidator } from "@utils/CpfValidator";
import { ERROR } from "@utils/message/errorMessage";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { IEmployeesDTO } from "../dtos/employessDTO";
import { EmployeesServices } from "./EmployeesServices";


class EmployeesController {

    async create(request: Request, response: Response): Promise<Response> {
        const { email,full_name,cpf,password,phone } = request.body as unknown as IEmployeesDTO

        if(!CpfValidator(cpf)) {
            throw new AppError(ERROR.EMPLOYEES.CPF);
        }

        const employeesService = container.resolve(EmployeesServices);

        const employees = await employeesService.create({ cpf, email,full_name,password,phone })

        return response.status(201).json(employees);
    } 

    async login(request: Request, response: Response): Promise<Response> {
        const  { email, password }  = request.body as unknown as IEmployeesDTO

        const employeesService = container.resolve(EmployeesServices);

        const infoEmployees = await employeesService.login({email, password })

        return response.status(201).json({...infoEmployees});
    } 

}

export {EmployeesController};