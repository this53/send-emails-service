import {
  OnQueueActive,
  OnQueueError,
  OnQueueFailed,
  Process,
  Processor
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { MailProvider, Message } from '../../interfaces/mail.provider';
import { BaseProcessor } from '../base.processor';
import { templateHTML } from '../emails/template/template-html';
import { SEND_CUSTOM_EMAIL_QUEUE } from './constants';

@Processor(SEND_CUSTOM_EMAIL_QUEUE)
export class SendCustomEmailProcessor extends BaseProcessor<Message> {
  constructor(private readonly sendEmailProvider: MailProvider) {
    super({
      logger: new Logger(SendCustomEmailProcessor.name)
    });
  }

  @Process()
  async send(job: Job<Message>) {
    const message = { ...job.data };
    message.body = templateHTML({
      header: {
        logo: message.from.logo
      },
      body: {
        message: message.body
      },
      footer: {
        name: message.from.name,
        email: message.from.email,
        phone: message.from.phone
      }
    });
    return await this.sendEmailProvider.sendEmail(message);
  }

  @OnQueueActive()
  async onActive(job: Job<Message>): Promise<void> {
    this.logger.log(
      `Job(#${job.id}-${job.name}) -> Active with data: ${JSON.stringify(
        job.data
      )}...`
    );
  }

  @OnQueueFailed()
  async onFailed(job: Job<Message>): Promise<void> {
    this.logger.warn(`Job(#${job.id}-${job.name}) -> Failed!`);
  }

  @OnQueueError()
  async onError(job: Job<Message>): Promise<void> {
    this.logger.warn(`Job(#${job.id}-${job.name}) -> Error!`);
  }
}
