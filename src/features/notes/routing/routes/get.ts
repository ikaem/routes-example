import express from 'express';

const router = express.Router();

router.get('/notes');
router.get('/note/:id');


export { router as getRouter };
