import { Request, Response } from 'express';
import { FindProfileCompany } from './FindProfileCompany.useCase';

export class FindProfileCompanyController {
  async handle(request: Request, response: Response) {
    const { id_company } = request.body;

    const findProfileCompany = new FindProfileCompany();
    const result = await findProfileCompany.execute(id_company)

    return response.json(result);
  }
}
