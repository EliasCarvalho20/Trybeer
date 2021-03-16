import { Request, Response, NextFunction } from 'express';
import { Middleware, ExpressErrorMiddlewareInterface, HttpError } from 'routing-controllers';
import { JsonWebTokenError } from 'jsonwebtoken';

@Middleware({ type: 'after' })
export default class ErrorHandler implements ExpressErrorMiddlewareInterface {
  error(err: any, _req: Request, res: Response, _next: NextFunction): Response | void {
    console.error(err);
    const { httpCode, message } = err || undefined;
    const { errors } = err || undefined;

    if (err[0] || errors) {
      const { constraints } = err[0] || errors[0];
      return res.status(422).json({ ...constraints });
    }
    if (err instanceof JsonWebTokenError) return res.status(401).json({ message });
    if (err instanceof HttpError) return res.status(httpCode).json({ message });

    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
