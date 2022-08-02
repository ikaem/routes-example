import { Router } from 'express';
import { deleteRouter } from './delete.js';
import { getRouter } from './get.js';
import { postRouter } from './post.js';
import { putRouter } from './put.js';

const router = Router();

router.use(deleteRouter)
router.use(getRouter)
router.use(postRouter)
router.use(putRouter)

export {router as notesRouter}
