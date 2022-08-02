import express from 'express';

const router = express.Router();

router.put('/node/:id');

export { router as putRouter };
