import { Router } from "express";
import { ensureAuthenticateHairdresser } from "../../../middlewares/ensureAuthenticateHairdresser";
import { AuthenticateHairdresserController } from "../useCases/authenticate/AuthenticateHairdresserController";
import { CreateHairdresserController } from "../useCases/createHairdresser/CreateHairdress.controller";
import { FindProfileHairdresserController } from "../useCases/findProfile/FindProfileHairdressercontroller";

const hairdresserRouter = Router();


const createHairdresserController = new CreateHairdresserController();
const authenticateHairdresserController = new AuthenticateHairdresserController();
const findProfileHairdresserController = new FindProfileHairdresserController();

hairdresserRouter.post('/', createHairdresserController.handle);
hairdresserRouter.post('/login', authenticateHairdresserController.handle);
hairdresserRouter.get('/profile', ensureAuthenticateHairdresser, findProfileHairdresserController.handle);

export { hairdresserRouter };
