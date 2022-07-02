import { Request, Response } from 'express';
import { AuthenticateCompanyUseCase } from './AuthenticateCompanyUseCase';

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateCompanyUseCase = new AuthenticateCompanyUseCase();
    const result = await authenticateCompanyUseCase.execute({
      email,
      password,
    });

    return response.json(result);
  }
}
