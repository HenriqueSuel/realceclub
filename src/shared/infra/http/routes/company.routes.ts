
import { CompanyController } from "@modules/company/services/CompanyController";
import { Router } from "express";
import { ensureAuthenticatedCompany } from "../middlewares/ensureAuthenticatedCompany";

const companyRoutes = Router();


const companyController = new CompanyController();


companyRoutes.post('/', companyController.create)
companyRoutes.patch('/', ensureAuthenticatedCompany, companyController.update)
companyRoutes.post('/login', companyController.login)


export { companyRoutes }