import { Router } from "express";
import { companyRoutes } from './modules/company/routes/company.routes';

const routers = Router();

routers.use("/company", companyRoutes);

export { routers };
