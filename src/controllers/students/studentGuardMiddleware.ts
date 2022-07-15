import * as yup from 'yup';
import { isAccessTokenPayload } from '../../domain/accessTokenPayload.js';

import { BaseMiddleware } from '../baseMiddleware.js';

type Request = {
  params: {
    /** numeric string */
    studentId: string;
  };
};

export class StudentGuardMiddleware extends BaseMiddleware<Request, void> {

  protected async validate(): Promise<Request | false> {
    const paramsSchema: yup.SchemaOf<Request['params']> = yup.object({
      studentId: yup.string().matches(/^\d+$/u).defined(),
    });
    try {
      const params = await paramsSchema.validate(this.req.params);
      return { params };
    } catch (error) {
      if (error instanceof Error) {
        this.badRequest(error.message);
      } else {
        this.badRequest('invalid request');
      }
      return false;
    }
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  protected async executeImpl({ params }: Request): Promise<void> {
    const studentId = parseInt(params.studentId, 10);
    if (this.isAllowed(studentId)) {
      return this.next();
    }
    this.forbidden();
  }

  private isAllowed(studentId: number): boolean {
    if (isAccessTokenPayload(this.res.locals.jwt)) {
      if (this.res.locals.jwt.userType === 'student' && this.res.locals.jwt.sub === studentId) {
        return true;
      }
      if (this.res.locals.jwt.userType === 'administrator') {
        return true;
      }
    }
    return false;
  }
}
