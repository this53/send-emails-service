import * as dotenv from 'dotenv';
dotenv.config();

// ------- ENVIRONMENT -------
export const NODE_ENV_TYPES = {
  DEV: 'development',
  PROD: 'production',
  TEST: 'test'
};
export const NODE_ENV: string = process.env.NODE_ENV || NODE_ENV_TYPES.DEV;
export const isDevelopment: boolean = NODE_ENV === NODE_ENV_TYPES.DEV;
export const isProduction: boolean = NODE_ENV === NODE_ENV_TYPES.PROD;

// ------- APPLICATION -------
export const MICROSERVICE_URL: string = process.env.MICROSERVICE_URL;

// ------- QUEUE -------
export const QUEUE_PORT: number = parseInt(process.env.QUEUE_PORT, 10);
export const QUEUE_HOST: string = process.env.QUEUE_HOST;
export const QUEUE_USERNAME: string = process.env.QUEUE_USERNAME;
export const QUEUE_PASSWORD: string = process.env.QUEUE_PASSWORD;
export const QUEUE_TIMEOUT: number = parseInt(process.env.QUEUE_TIMEOUT, 10);

// ------- DATABASE -------
export const DB_NAME: string = process.env.DB_NAME;
export const DB_HOST: string = process.env.DB_HOST;
export const DB_PORT: number = parseInt(process.env.DB_PORT, 10);
export const DB_USER: string = process.env.DB_USER;
export const DB_PASSWORD: string = process.env.DB_PASSWORD;
export const DB_OPTIONS: string = process.env.DB_OPTIONS;
export const DB_TIMEOUT: number = parseInt(process.env.DB_TIMEOUT, 10);
export const DB_PREFIX: string = process.env.DB_PREFIX;
export const DB_URL: string =
  process.env.DB_URL ||
  `${DB_PREFIX}://${DB_USER}:${DB_PASSWORD}@${
    DB_PORT ? DB_HOST + ':' + DB_PORT : DB_HOST
  }/${DB_NAME}${DB_OPTIONS ? '?' + DB_OPTIONS : ''}`;

// ------- CREDENTIALS -------
export const MAIL_ID: string = process.env.MAIL_ID;
export const MAIL_SECRET: string = process.env.MAIL_SECRET;
export const MAIL_CONTACT_EMAIL: string = process.env.MAIL_CONTACT_EMAIL;
export const MAIL_CONTACT_NAME: string = process.env.MAIL_CONTACT_NAME;
