
import { CompanyController } from "@modules/company/services/CompanyController";
import { Router } from "express";

const companyRoutes = Router();


const companyController = new CompanyController();


companyRoutes.post('/', companyController.create)
companyRoutes.patch('/', companyController.update)


export { companyRoutes }