
import { CompanyController } from "@modules/company/services/company/CompanyController";
import { ContractsController } from "@modules/company/services/contract/ContractController";
import { Router } from "express";
import { ensureAuthenticatedCompany } from "../middlewares/ensureAuthenticatedCompany";

const companyRoutes = Router();


const companyController = new CompanyController();
const contractsController = new ContractsController();


companyRoutes.post('/', companyController.create)
companyRoutes.patch('/', ensureAuthenticatedCompany, companyController.update)
companyRoutes.post('/login', companyController.login)
companyRoutes.post('/invite', ensureAuthenticatedCompany, contractsController.inviteEmployees)
companyRoutes.get('/me',ensureAuthenticatedCompany, companyController.getProfile)


export { companyRoutes }