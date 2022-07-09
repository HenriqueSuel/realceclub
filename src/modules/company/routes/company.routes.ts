import { Router } from "express";
import { ensureAuthenticateCompany } from "../../../middlewares/ensureAuthenticateCompany";
import { AuthenticateClientController } from "../useCases/authenticateCompany/AuthenticateCompanyController";
import { CreateCompanyController } from "../useCases/createCompany/createCompanyController";
import { FindHairdresserController } from "../useCases/findHairdresser/FindHairdresser.controller";
import { FindProfileCompanyController } from "../useCases/findProfile/FindProfileCompany.controller";
import { FindOpenHoursController } from "../useCases/openHours/findOpenHours/FindOpenHoursController";
import { UpdateOpenHoursController } from "../useCases/openHours/updateOpenHours/UpdateOpenHoursController";


const companyRoutes = Router();


const createCompanyController = new CreateCompanyController();
const authenticateClientController = new AuthenticateClientController();
const updateOpenHoursController = new UpdateOpenHoursController();
const findOpenHoursController = new FindOpenHoursController();
const findProfileCompanyController = new FindProfileCompanyController();
const findHairdresserController = new FindHairdresserController();


companyRoutes.post('/', createCompanyController.handle);
companyRoutes.post('/login', authenticateClientController.handle);
companyRoutes.post('/openHours', ensureAuthenticateCompany, updateOpenHoursController.handle);
companyRoutes.get('/openHours', ensureAuthenticateCompany, findOpenHoursController.handle);
companyRoutes.get('/profile', ensureAuthenticateCompany, findProfileCompanyController.handle);
companyRoutes.get('/find-hairdresser', ensureAuthenticateCompany, findHairdresserController.handle);


export { companyRoutes };
