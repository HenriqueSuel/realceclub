import { Router } from "express";
import { AuthenticateHairdresserController } from "../useCases/authenticate/AuthenticateHairdresserController";
import { CreateHairdresserController } from "../useCases/createHairdresser/CreateHairdress.controller";

const hairdresserRouter = Router();


const createHairdresserController = new CreateHairdresserController();
const authenticateHairdresserController = new AuthenticateHairdresserController();

hairdresserRouter.post('/', createHairdresserController.handle);
hairdresserRouter.post('/login', authenticateHairdresserController.handle);

export { hairdresserRouter };
