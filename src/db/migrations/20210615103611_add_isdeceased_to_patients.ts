import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('patients', (table) => {
    // Recommend using integer/binary type for booleans if using sqlite
    // https://stackoverflow.com/questions/59958918/why-am-i-unable-to-set-false-0-as-a-default-value-for-my-table-using-knex
    table.binary('isDeceased').notNullable().defaultTo(0);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('patients', (table) => {
    table.dropColumn('isDeceased');
  });
}
