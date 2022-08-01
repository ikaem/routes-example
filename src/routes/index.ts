import express from 'express';
import { notesRouter } from './notes.js';

const router = express.Router();

router.use(notesRouter)


export {router}
