import { QUEUE_HOST, QUEUE_PASSWORD, QUEUE_PORT, QUEUE_TIMEOUT } from "~/environments";

export const redisConfig = {
    host: QUEUE_HOST,
    port: QUEUE_PORT,
    password: QUEUE_PASSWORD,
    connectTimeout: QUEUE_TIMEOUT,
};