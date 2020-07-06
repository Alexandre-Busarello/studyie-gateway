import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  return res.json({ message: `It's alive. Date: ${new Date()}` });
});

export default router;
