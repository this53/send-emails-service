import {
  QUEUE_HOST,
  QUEUE_PASSWORD,
  QUEUE_PORT,
  QUEUE_TIMEOUT,
  QUEUE_USERNAME
} from '~/environments';

export const redisConfig = {
  host: QUEUE_HOST,
  port: QUEUE_PORT,
  username: QUEUE_USERNAME,
  password: QUEUE_PASSWORD,
  connectTimeout: QUEUE_TIMEOUT
};
