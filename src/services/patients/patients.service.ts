import { ID } from '@/core/types';
import { Patient } from '@/db/models';

const fetchAll = async (): Promise<Patient[]> => Patient.query();
const fetchOne = async (id: ID): Promise<Patient> => Patient.query().findById(id);

export default { fetchAll, fetchOne };
