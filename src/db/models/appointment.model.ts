import { ID } from '@/core/types';
import { Model } from 'objection';
import { Patient } from './patient.model';

export class Appointment extends Model {
  static tableName = 'appointments';

  timeStart!: Date;
  timeEnd!: Date;
  notes?: string;
  patientId!: ID;

  static relationMappings = {
    patient: {
      relation: Model.HasOneRelation,
      modelClass: Patient,
      join: {
        from: 'patientId',
        to: 'patients.id',
      },
    },
  };
}
