import { Gender } from '../../../core/enums';
import { Knex } from 'knex';
import { addDays, addHours, set } from 'date-fns';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('patients').del();

  // Inserts seed entries
  await knex('patients').insert([
    {
      id: 1,
      firstName: 'Dummy',
      middleName: 'DumDum',
      lastName: 'Patient',
      gender: Gender.MALE,
      birthDate: new Date(1997, 12, 6),
      bio: 'Is a dummy',
      isDeceased: false,
      contactNumber: '09123456789',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      firstName: 'Sean',
      middleName: 'Escano',
      lastName: 'Lagudas',
      gender: Gender.MALE,
      birthDate: new Date(1997, 12, 6),
      bio: 'Not a dummy',
      isDeceased: false,
      contactNumber: '09990000999',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      firstName: 'Sean',
      middleName: 'Escano',
      lastName: 'Lagudas',
      gender: Gender.MALE,
      birthDate: new Date(1997, 12, 6),
      isDeceased: true,
      contactNumber: '09987654321',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  await knex('appointments').del();

  // Appointments are 5 days from time of seeding
  const newDate = new Date();
  const dates = [set(addDays(newDate, 5), { hours: 13 }), set(addDays(newDate, 6), { hours: 13 }), set(addDays(newDate, 7), { hours: 13 })];

  await knex('appointments').insert([
    { id: 1, timeStart: dates[0], timeEnd: addHours(dates[0], 2), notes: 'Is likely a dummy', patientId: 1 },
    { id: 2, timeStart: dates[1], timeEnd: addHours(dates[1], 2), notes: 'Might not be a dummy', patientId: 2 },
    { id: 3, timeStart: dates[2], timeEnd: addHours(dates[2], 2), patientId: 3 },
  ]);
}
