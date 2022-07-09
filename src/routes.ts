import { Router } from "express";
import { companyRoutes } from './modules/company/routes/company.routes';
import { contractRouter } from "./modules/contract/routes/contract.routes";
import { hairdresserRouter } from "./modules/hairdresser/routes/hairdresser.routes";

const routers = Router();

routers.use("/company", companyRoutes);
routers.use("/hairdresser", hairdresserRouter);
routers.use("/contract", contractRouter);

export { routers };
