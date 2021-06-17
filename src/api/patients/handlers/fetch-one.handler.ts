import { RequestHandler } from 'express';
import patientService from '@/services/patients/patients.service';

export const fetchOnePatient: RequestHandler = async ({ params: { id } }, res) => {
  const patientId = +id;
  const patient = await patientService.fetchOne(patientId);
  res.send(patient);
};
