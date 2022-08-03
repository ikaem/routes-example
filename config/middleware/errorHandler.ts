import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/customError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  // TODO here we should use some logging solution
  console.error('Somethig went wrong:', err);

  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ errors: err.serializeErrors() });
    return;
  }

  res.status(400).send({
    errors: [
      {
        message: 'Something went wrong',
      },
    ],
  });
};
