import express from 'express';
import "express-async-errors";
import { errorHandler } from '../config/middleware/errorHandler.js';
import { router } from './routes/index.js';

const app = express();

app.use(express.json());
app.use('/api/', router);
app.use(errorHandler);

export { app };
