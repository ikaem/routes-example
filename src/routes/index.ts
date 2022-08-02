import express from 'express';
import { notesRouter } from '../features/notes/routing/routes/index.js';

const router = express.Router();

router.use(notesRouter)


export {router}