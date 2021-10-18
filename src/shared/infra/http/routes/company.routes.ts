import { Router } from "express";

const companyRoutes = Router();

companyRoutes.get('/', (request, response) => {
    response.json({ name: 'Henrique '})
})


export { companyRoutes }