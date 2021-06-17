import { Router } from 'express';
import appointments from './appointments/appointments.controller';
import patients from './patients/patients.controller';

/* Notes:
  Security policies and Authentication
  Middlewares
*/

const router = Router();

router.use('/appointments', appointments);
router.use('/patients', patients);

export default router;
