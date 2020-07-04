import { Router } from 'express';
import { Dispatcher } from '@app/dispatcher';

const router = Router();

router.get('/student/lesson', async (req, res) => {
  try {
    return res.json(await Dispatcher.executeStrategy(req, '/student/lesson'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

router.get('/student/lesson/:id', async (req, res) => {
  try {
    return res.status(201).json(await Dispatcher.executeStrategy(req, '/student/lesson/:id'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

router.post('/student/preferences', async (req, res) => {
  try {
    return res.json(await Dispatcher.executeStrategy(req, '/student/preferences'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

router.get('/student/preferences', async (req, res) => {
  try {
    return res.json(await Dispatcher.executeStrategy(req, '/student/preferences'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

export default router;
