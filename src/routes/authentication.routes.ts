import { Router } from 'express';
import { AuthenticationService } from '@app/services/authentication';
import { Dispatcher } from '@app/dispatcher';

const router = Router();

router.post(`/authentication/signin`, async (req, res) => {
  try {
    return res.json(await Dispatcher.makeRequest(req));
  } catch (e) {
    return res.status(400).json(e.response.data);
  }
});

router.post(`/authentication/signup`, async (req, res) => {
  try {
    return res.status(201).json(await Dispatcher.makeRequest(req));
  } catch (e) {
    return res.status(400).json(e.response.data);
  }
});

router.post(`/authentication/facebook/signin`, async (req, res) => {
  try {
    return res.json(await Dispatcher.makeRequest(req));
  } catch (e) {
    return res.status(400).json(e.response.data);
  }
});

router.post(`/authentication/google/signin`, async (req, res) => {
  try {
    return res.json(await Dispatcher.makeRequest(req));
  } catch (e) {
    return res.status(400).json(e.response.data);
  }
});

export default router;
