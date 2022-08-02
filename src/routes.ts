import { Router } from "express";
import { companyRoutes } from './modules/company/routes/company.routes';
import { contractRouter } from "./modules/contract/routes/contract.routes";
import { hairdresserRouter } from "./modules/hairdresser/routes/hairdresser.routes";
import { JobCategoriesRouter } from "./modules/jobCategoriesCompany/routes/jobCategories";
import { JobHairdresserRouter } from "./modules/jobHairdresser/routes/jobHairdresser.routes";
import { workSchedule } from "./modules/workScheduleHairdresser/routes/workScheduleHairdresser.routes";

const routers = Router();

routers.use("/company", companyRoutes);
routers.use("/hairdresser", hairdresserRouter);
routers.use("/contract", contractRouter);
routers.use("/workShedule", workSchedule);
routers.use("/jobCategories", JobCategoriesRouter);
routers.use("/jobHairdresser", JobHairdresserRouter);

export { routers };
