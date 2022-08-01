import express from 'express';

const router = express.Router();

router.get('/notes');
router.get('/note/:id');
router.post("/note");
router.put("/node/:id")
router.delete("/node/:id")

export { router as notesRouter };
