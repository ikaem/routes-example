import { CustomError } from "../../../../config/errors/customError";

export class NoteNotFound extends CustomError {
  statusCode = 404;
  reason = 'This note does not exist';

  constructor() {
    super('This note does not exist');

    Object.setPrototypeOf(this, NoteNotFound.prototype);
  }

  serializeErrors() {
    {
      return [{ message: this.reason }];
    }
  }

}