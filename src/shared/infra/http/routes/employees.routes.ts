
import { EmployeesController } from "@modules/employees/services/EmployeesController";
import { Router } from "express";
import { ensureAuthenticatedEmployees } from "../middlewares/ensureAuthenticatedEmployees";

const employeesRoutes = Router();


const employeesController = new EmployeesController();


employeesRoutes.post('/', employeesController.create)
employeesRoutes.post('/login', employeesController.login)


export { employeesRoutes }