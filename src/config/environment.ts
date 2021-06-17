import dotenv from 'dotenv';

dotenv.config();

interface IEnvironmentConfig {
  isProduction: boolean;
  app: {
    environment: string;
    port: number;
  };
}

const NODE_ENV = process.env.NODE_ENV?.toLowerCase() ?? 'development';
const isProduction = NODE_ENV === 'production';

export const env: IEnvironmentConfig = {
  isProduction,
  app: {
    environment: NODE_ENV,
    port: +(process.env.APP_PORT ?? 3000),
  },
};
