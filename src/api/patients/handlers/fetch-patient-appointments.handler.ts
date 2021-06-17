import appointmentService from '@/services/appointments/appointment.service';
import { RequestHandler } from 'express';

export const fetchPatientAppointments: RequestHandler = async ({ params: { id } }, res) => {
  const patientId = +id;
  const patient = await appointmentService.fetchByPatient(patientId);
  res.send(patient);
};
