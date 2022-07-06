import { Router } from "express";
import { companyRoutes } from './modules/company/routes/company.routes';
import { hairdresserRouter } from "./modules/hairdresser/routes/hairdresser.routes";

const routers = Router();

routers.use("/company", companyRoutes);
routers.use("/hairdresser", hairdresserRouter);

export { routers };
