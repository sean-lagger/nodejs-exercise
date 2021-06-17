import { env } from '@/config/environment';
import express from 'express';
import controllers from '@/api/controllers';

import { Model } from 'objection';
import knexInstance from '@/db/knex';

Model.knex(knexInstance);

const app = express();

const {
  app: { port },
} = env;

app.use('/api', controllers);

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});
