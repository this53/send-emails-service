import { BullModuleOptions } from '@nestjs/bull';
import { redisConfig } from '../redis';

export const bullConfig: BullModuleOptions = {
    redis: {
        username: redisConfig.username,
        host: redisConfig.host,
        password: redisConfig.password,
        port: redisConfig.port,
        connectTimeout: redisConfig.connectTimeout,
    },
};