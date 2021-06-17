import { Router } from 'express';
import { fetchAllPatients } from './handlers/fetch-all.handler';
import { fetchOnePatient } from './handlers/fetch-one.handler';
import { fetchPatientAppointments } from './handlers/fetch-patient-appointments.handler';

const router = Router();

router.get('/', fetchAllPatients);
router.get('/:id', fetchOnePatient);
router.get('/:id/appointments', fetchPatientAppointments);

export default router;
