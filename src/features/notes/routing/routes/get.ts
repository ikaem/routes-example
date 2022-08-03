import express from 'express';
import { getNote } from '../controllers';
import { validateGetNoteRequest } from '../validation/validateGetNoteRequest';

const router = express.Router();

router.get('/notes');
router.get('/note/:id', ...validateGetNoteRequest(), getNote);

export { router as getRouter };
