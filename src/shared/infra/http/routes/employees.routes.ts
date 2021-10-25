
import { ContractsController } from "@modules/company/services/contract/ContractController";
import { EmployeesController } from "@modules/employees/services/EmployeesController";
import { Router } from "express";
import { ensureAuthenticatedCompany } from "../middlewares/ensureAuthenticatedCompany";
import { ensureAuthenticatedEmployees } from "../middlewares/ensureAuthenticatedEmployees";

const employeesRoutes = Router();


const employeesController = new EmployeesController();
const contractsController = new ContractsController();

employeesRoutes.post('/', employeesController.create)
employeesRoutes.post('/login', employeesController.login)
employeesRoutes.get('/search',ensureAuthenticatedCompany, employeesController.search)
employeesRoutes.get('/invite',ensureAuthenticatedEmployees, contractsController.getInvite)


export { employeesRoutes }