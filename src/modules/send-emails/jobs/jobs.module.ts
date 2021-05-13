import { Module } from '@nestjs/common';
import { SendMailProvider } from '../providers/send-mail.provider';
import { SendCustomEmailProcessor } from './send-custom-email/send-custom-email.processor';
import { SendCustomEmailQueue } from './send-custom-email/send-custom-email.queue';

const queues = [
    SendCustomEmailQueue,
];

@Module({
	imports: [
        ...queues,
    ],
	providers: [
		SendMailProvider,
        SendCustomEmailProcessor,
    ],
	exports: [
        ...queues,
    ],
})
export class JobsModule { }