import { Request, Response } from 'express';
import { AuthenticateHairdresserUseCase } from './AuthenticateHairdresserUseCase';

export class AuthenticateHairdresserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateHairdresserUseCase = new AuthenticateHairdresserUseCase();
    const result = await authenticateHairdresserUseCase.execute({
      email,
      password,
    });

    return response.json(result);
  }
}
