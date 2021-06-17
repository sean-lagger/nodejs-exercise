import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('patients', (table) => {
      table.increments('id').primary();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.string('middleName').notNullable();
      table.string('gender').notNullable();
      table.dateTime('birthDate').notNullable();
      table.string('bio');
      table.dateTime('createdAt').notNullable();
      table.dateTime('updatedAt').notNullable();
    })
    .createTable('appointments', (table) => {
      table.increments('id').primary();
      table.dateTime('timeStart').notNullable();
      table.dateTime('timeEnd').notNullable();
      table.string('notes');

      table.integer('patientId').unsigned().references('id').inTable('patients').onDelete('CASCADE').index();
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('patients').dropTableIfExists('appointments');
}
