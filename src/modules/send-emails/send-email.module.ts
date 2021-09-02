import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { SendEmailController } from './controllers/send-email.controller';
import { EventHandlers } from './events/handlers';
import { JobsModule } from './jobs/jobs.module';
import { SendEmailService } from './services/send-email.service';

@Module({
  controllers: [SendEmailController],
  imports: [JobsModule, CqrsModule],
  providers: [SendEmailService, ...CommandHandlers, ...EventHandlers],
  exports: [SendEmailService]
})
export class SendEmailModule {}
