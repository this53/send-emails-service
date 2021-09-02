import { isProduction } from '~/environments';
import { MailProvider } from '../interfaces/mail.provider';
import { MailtrapProvider } from './mailtrap';
import { SendgridProvider } from './sendgrid';

export const SendMailProvider = {
  useClass: isProduction ? SendgridProvider : MailtrapProvider,
  provide: MailProvider
};
