import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { SendEmailCommand } from '../commands/implements/send-email.command';
import { SendEmailDTO } from '../dtos/send-email.dto';

@Injectable()
export class SendEmailService {
    constructor(
        private readonly commandBus: CommandBus,
    ) { }

    async send(data: SendEmailDTO): Promise<boolean> {
        return await this.commandBus.execute(new SendEmailCommand(data));
    }
}