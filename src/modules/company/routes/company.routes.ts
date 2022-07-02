import { Router } from "express";
import { AuthenticateClientController } from "../useCases/authenticateCompany/AuthenticateCompanyController";
import { CreateCompanyController } from "../useCases/createCompany/createCompanyController";

const companyRoutes = Router();


const createCompanyController = new CreateCompanyController();
const authenticateClientController = new AuthenticateClientController();


companyRoutes.post('/', createCompanyController.handle);
companyRoutes.post('/login', authenticateClientController.handle);


export { companyRoutes };
