import { Router } from "express";
import { ensureAuthenticateCompany } from "../../../middlewares/ensureAuthenticateCompany";
import { AuthenticateClientController } from "../useCases/authenticateCompany/AuthenticateCompanyController";
import { CreateCompanyController } from "../useCases/createCompany/createCompanyController";
import { FindOpenHoursController } from "../useCases/openHours/findOpenHours/FindOpenHoursController";
import { UpdateOpenHoursController } from "../useCases/openHours/updateOpenHours/UpdateOpenHoursController";


const companyRoutes = Router();


const createCompanyController = new CreateCompanyController();
const authenticateClientController = new AuthenticateClientController();
const updateOpenHoursController = new UpdateOpenHoursController();
const findOpenHoursController = new FindOpenHoursController();


companyRoutes.post('/', createCompanyController.handle);
companyRoutes.post('/login', authenticateClientController.handle);
companyRoutes.post('/openHours', ensureAuthenticateCompany, updateOpenHoursController.handle);
companyRoutes.get('/openHours', ensureAuthenticateCompany, findOpenHoursController.handle);


export { companyRoutes };
