import { Router } from 'express';
import { Dispatcher } from '@app/dispatcher';

const router = Router();

router.post('/tutor/lesson', async (req, res) => {
  try {
    return res.status(201).json(await Dispatcher.executeStrategy(req, '/tutor/lesson'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

router.put('/tutor/lesson/:id', async (req, res) => {
  try {
    return res.json(await Dispatcher.executeStrategy(req, '/tutor/lesson/:id'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

router.get('/tutor/lesson', async (req, res) => {
  try {
    return res.json(await Dispatcher.executeStrategy(req, '/tutor/lesson'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

router.get('/tutor/lesson/:id', async (req, res) => {
  try {
    return res.json(await Dispatcher.executeStrategy(req, '/tutor/lesson/:id'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

router.get('/tutor/:id/info', async (req, res) => {
  try {
    return res.json(await Dispatcher.executeStrategy(req, '/tutor/:id/info'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

export default router;
