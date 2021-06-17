import { RequestHandler } from 'express';
import appointmentService from '@/services/appointments/appointment.service';

export const fetchAllAppointments: RequestHandler = async (req, res) => {
  const appointments = await appointmentService.fetchAll();
  res.send(appointments);
};
