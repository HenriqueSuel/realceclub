import { Router } from "express";
import { ensureAuthenticateHairdresser } from "../../../middlewares/ensureAuthenticateHairdresser";
import { CreateJobHairdresserController } from "../useCases/createJobHairdresser/createJobHairdresser.controller";
import { ListJobHairdresserController } from "../useCases/listJobHairdresser/listJobHairdresser.controller";

const JobHairdresserRouter = Router();


const createJobHairdresserController = new CreateJobHairdresserController();
const listJobHairdresserController = new ListJobHairdresserController();


JobHairdresserRouter.post('/', ensureAuthenticateHairdresser, createJobHairdresserController.handle);
JobHairdresserRouter.get('/', ensureAuthenticateHairdresser, listJobHairdresserController.handle);

export { JobHairdresserRouter };
