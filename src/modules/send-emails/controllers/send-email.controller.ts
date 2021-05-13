import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SendEmailDTO } from '../dtos/send-email.dto';
import { SendEmailService } from '../services/send-email.service';

const messagePatternName = (action: string): string => `send-emails:${action}`;

@Controller('send-emails')
export class SendEmailController {
    constructor(
        private readonly sendEmailService: SendEmailService,
    ) { }

    @EventPattern(messagePatternName("send"))
    async send(
        @Payload() data: SendEmailDTO
    ) {
        return await this.sendEmailService.send(data);
    }
}
