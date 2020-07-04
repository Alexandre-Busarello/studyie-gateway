import { Router } from 'express';
import { Dispatcher } from '@app/dispatcher';

const router = Router();

router.post('/login/signin', async (req, res) => {
  try {
    return res.json(await Dispatcher.executeStrategy(req, '/login/signin'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

router.post('/login/signup', async (req, res) => {
  try {
    return res.status(201).json(await Dispatcher.executeStrategy(req, '/login/signup'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

router.post('/login/facebook/signin', async (req, res) => {
  try {
    return res.json(await Dispatcher.executeStrategy(req, '/login/facebook/signin'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

router.post('/login/google/signin', async (req, res) => {
  try {
    return res.json(await Dispatcher.executeStrategy(req, '/login/google/signin'));
  } catch (e) {
    return res.status(400).json((e.response && e.response.data) || e);
  }
});

export default router;
