import { BullModule } from "@nestjs/bull";
import { SEND_CUSTOM_EMAIL_QUEUE } from "./constants";

export const SendCustomEmailQueue = BullModule.registerQueue({
    name: SEND_CUSTOM_EMAIL_QUEUE,
    limiter: {
        duration: 1000,
        max: 1000,
    },
    defaultJobOptions: {
        attempts: 3,
        delay: 5000,
        timeout: 30000,
    }
});