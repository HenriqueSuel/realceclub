import { Router } from "express";
import { ensureAuthenticateHairdresser } from "../../../middlewares/ensureAuthenticateHairdresser";
import { CreateWorkScheduleController } from "../useCases/createWorkSchedule/createWorkSchedule.controller";
import { DeleteWorkScheduleController } from "../useCases/deleteWorkSchedule/deleteWorkSchedule.controller";
import { FindWorkSheduleHairdresserController } from "../useCases/findWorkShedule/findWorkSheduleHairdresser.controller";
import { UpdateWorkScheduleController } from "../useCases/updateWorkSchedule/updateWorkSchedule.controller";

const workSchedule = Router();


const createWorkScheduleController = new CreateWorkScheduleController();
const findWorkSheduleHairdresserController = new FindWorkSheduleHairdresserController();
const updateWorkScheduleController = new UpdateWorkScheduleController();
const deleteWorkScheduleController = new DeleteWorkScheduleController();

workSchedule.post('/create', ensureAuthenticateHairdresser, createWorkScheduleController.handle);
workSchedule.get('/', ensureAuthenticateHairdresser, findWorkSheduleHairdresserController.handle);
workSchedule.post('/update', ensureAuthenticateHairdresser, updateWorkScheduleController.handle);
workSchedule.delete('/', ensureAuthenticateHairdresser, deleteWorkScheduleController.handle);

export { workSchedule };
