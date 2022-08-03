import { param } from 'express-validator';
import { validateRequest } from '../../../../../config/lib/express-validator/validateRequest';

export const validateGetNoteRequest = () => {
  const validator = [param('id').isString().notEmpty().withMessage('Note id is required')];

  return [validator, validateRequest];
};
