import { RequestHandler } from 'express';
import patientService from '@/services/patients/patients.service';

export const fetchAllPatients: RequestHandler = async (req, res) => {
  const patients = await patientService.fetchAll();
  res.send(patients);
};
