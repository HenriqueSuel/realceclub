import { Router } from "express";
import { ensureAuthenticateCompany } from "../../../middlewares/ensureAuthenticateCompany";
import { FindContractCompanyController } from "../useCases/findContractCompany/FindContractCompany.controller";
import { InviteContractToHairdressController } from "../useCases/inviteContractToHairdress/inviteContractToHairdress.controller";


const contractRouter = Router();


const inviteContractToHairdressController = new InviteContractToHairdressController();
const findContractCompanyController = new FindContractCompanyController();


contractRouter.post('/hairdresser/invite', ensureAuthenticateCompany, inviteContractToHairdressController.handle);
contractRouter.get('/company/findContract', ensureAuthenticateCompany, findContractCompanyController.handle);

export { contractRouter };
