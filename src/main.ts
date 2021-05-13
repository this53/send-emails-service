import { INestMicroservice, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { MICROSERVICE_URL } from './environments';

(async () => {
	const app: INestMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(
		AppModule,
		{
			transport: Transport.RMQ,
			options: {
				urls: [MICROSERVICE_URL],
				queue: 'send-emails-service-queue',
				queueOptions: {
					durable: true
				},
			}
		}
	);

	const logger = new Logger('send-emails-service');

	await app.listen(() => {
		logger.log(`Start microservice!`);
	});
})();