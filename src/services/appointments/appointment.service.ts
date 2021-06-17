import { ID } from '@/core/types';
import { Appointment } from '@/db/models';

const fetchAll = async (): Promise<Appointment[]> => Appointment.query();
const fetchByPatient = async (id: ID): Promise<Appointment[]> => Appointment.query().where('patientId', id);

export default { fetchAll, fetchByPatient };
