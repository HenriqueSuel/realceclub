import { Router } from "express";
import { ensureAuthenticateCompany } from "../../../middlewares/ensureAuthenticateCompany";
import { ensureAuthenticateHairdresser } from "../../../middlewares/ensureAuthenticateHairdresser";
import { ChangeStatusController } from "../useCases/changeStatusContract/changeStatusContract.controller";
import { FindContractCompanyController } from "../useCases/findContractCompany/FindContractCompany.controller";
import { FindContractHairdresserController } from "../useCases/findContractHairdresser/FindContractHairdresser.controller";
import { InviteContractToHairdressController } from "../useCases/inviteContractToHairdress/inviteContractToHairdress.controller";


const contractRouter = Router();


const inviteContractToHairdressController = new InviteContractToHairdressController();
const findContractCompanyController = new FindContractCompanyController();
const findContractHairdresserController = new FindContractHairdresserController();
const changeStatusController = new ChangeStatusController();


contractRouter.post('/hairdresser/invite', ensureAuthenticateCompany, inviteContractToHairdressController.handle);
contractRouter.get('/company/findContract', ensureAuthenticateCompany, findContractCompanyController.handle);
contractRouter.get('/hairdresser/findContract', ensureAuthenticateHairdresser, findContractHairdresserController.handle);
contractRouter.post('/hairdresser/status', ensureAuthenticateHairdresser, changeStatusController.handle);

export { contractRouter };
