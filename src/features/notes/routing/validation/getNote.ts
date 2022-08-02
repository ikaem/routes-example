import { param } from 'express-validator';

export const validateGetNote = () => {
  const validator = [param('id').notEmpty().withMessage('Note id is required')];

  return validator;
};
