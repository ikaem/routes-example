import express from 'express';

const router = express.Router();

router.delete("/node/:id")

export { router as deleteRouter };
