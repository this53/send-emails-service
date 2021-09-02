import { InjectQueue } from '@nestjs/bull';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Queue } from 'bull';
import { CleanersService } from '~/modules/cleaners/cleaners.service';
import { EmailDTO } from '../../dtos/send-email.dto';
import { SEND_CUSTOM_EMAIL_QUEUE } from '../../jobs/send-custom-email/constants';
import { SendEmailCommand } from '../implements/send-email.command';

@CommandHandler(SendEmailCommand)
export class SendEmailHandler implements ICommandHandler<SendEmailCommand> {
  constructor(
    @InjectQueue(SEND_CUSTOM_EMAIL_QUEUE)
    private readonly sendCustomEmailQueue: Queue,
    private readonly cleanersService: CleanersService
  ) {}

  async execute(command: SendEmailCommand) {
    if (!command) {
      throw new Error('Data not found!');
    }

    const data = this.clearData(command);
    if (!data.to || !data.to.email) {
      throw new Error("'To' not found!");
    }
    if (!data.from || !data.from.email) {
      throw new Error("'From' not found!");
    }

    await this.sendCustomEmailQueue.add(data);

    return true;
  }

  private clearData(command: SendEmailCommand): SendEmailCommand {
    const data = { ...command };
    data.subject = this.cleanersService.cleanValue(data.subject);
    data.body = this.cleanersService.cleanValue(data.body);
    data.from = this.clearEmail(data.from);
    data.to = this.clearEmail(data.to);
    return data;
  }

  private clearEmail(email: EmailDTO): EmailDTO {
    const data = { ...email };
    data.email = this.cleanersService.cleanValue(data.email);
    data.name = this.cleanersService.cleanValue(data.name);
    data.email = data.email.toLowerCase();
    return data;
  }
}
