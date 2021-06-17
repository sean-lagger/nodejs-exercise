import { Router } from 'express';
import { fetchAllAppointments } from './handlers/fetch-all.handler';

const router = Router();

router.get('/', fetchAllAppointments);

export default router;
