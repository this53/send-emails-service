import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { bullConfig } from '~/config/bull';
import { CleanersModule } from './cleaners/cleaners.module';
import { SendEmailModule } from './send-emails/send-email.module';

@Module({
  imports: [BullModule.forRoot(bullConfig), CleanersModule, SendEmailModule],
  controllers: [],
  providers: []
})
export class ModulesModule {}
