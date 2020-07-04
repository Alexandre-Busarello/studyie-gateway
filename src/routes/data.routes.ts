import { Router } from 'express';
import { Dispatcher } from '@app/dispatcher';

const router = Router();

router.post('/data/content/types', async (req, res) => {
  try {
    return res.json(await Dispatcher.executeStrategy(req, '/data/content/types'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

router.get('/data/content/types', async (req, res) => {
  try {
    return res.status(201).json(await Dispatcher.executeStrategy(req, '/data/content/types'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

export default router;
