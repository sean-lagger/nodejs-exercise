import { Gender } from '@/core/enums';
import { ID } from '@/core/types';
import { Model } from 'objection';
import { Appointment } from './appointment.model';

export class Patient extends Model {
  static tableName = 'patients';

  id!: ID;
  firstName!: string;
  middleName!: string;
  lastName!: string;
  gender!: Gender;
  birthDate!: Date;
  bio?: string;
  isDeceased!: boolean;
  contactNumber!: string;
  createdAt!: Date;
  updatedAt!: Date;

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static relationMappings = {
    appointments: {
      relation: Model.HasManyRelation,
      modelClass: Appointment,
      join: {
        from: 'id',
        to: 'appointments.patientId',
      },
    },
  };
}
