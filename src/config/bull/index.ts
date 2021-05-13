import { BullModuleOptions } from '@nestjs/bull';
import { redisConfig } from '../redis';

export const bullConfig: BullModuleOptions = {
    redis: {
        host: redisConfig.host,
        password: redisConfig.password,
        port: redisConfig.port,
        connectTimeout: redisConfig.connectTimeout,
    },
};