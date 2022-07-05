import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateCompany(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeader = request.headers.authorization;

    console.log('entrou')

    if (!authHeader) {
        return response.status(401).json({ message: 'Sessão expirada' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const { sub } = verify(token, '739f8ebd49733117a132c34fe866bc09') as IPayload;

        request.id_company = sub;

        return next();
    } catch (error) {
        return response.status(401).json({ message: 'Token invalido' });
    }
}