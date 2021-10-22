import { IEmployeesDTO } from "@modules/employees/dtos/employessDTO";
import { Employees } from "../entities/Employees";

interface IEmployeesRepository {
    create(company: IEmployeesDTO): Promise<Employees>;
    existingEmployeesVerifier(email: string, cpf?: string): Promise<Employees>;
    login({password, email}): Promise<Employees>;
}

export {IEmployeesRepository}