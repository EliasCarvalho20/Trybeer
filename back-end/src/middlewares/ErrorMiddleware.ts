import { Request, Response, NextFunction } from 'express';
import { Middleware, ExpressErrorMiddlewareInterface, HttpError } from 'routing-controllers';

@Middleware({ type: 'after' })
export default class ErrorHandler implements ExpressErrorMiddlewareInterface {
  error(err: any, _req: Request, res: Response, _next: NextFunction): Response | void {
    console.error(err);

    const { httpCode, message } = err || undefined;

    if (err instanceof HttpError) return res.status(httpCode).json({ message });

    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
