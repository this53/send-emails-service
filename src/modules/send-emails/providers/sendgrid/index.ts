import * as sendgrid from '@sendgrid/mail';
import { htmlToText } from 'html-to-text';
import {
  MAIL_CONTACT_EMAIL,
  MAIL_CONTACT_NAME,
  MAIL_ID,
  MAIL_SECRET
} from '~/environments';
import { MailProvider, Message } from '../../interfaces/mail.provider';

export class SendgridProvider extends MailProvider {
  private client: sendgrid.MailService;

  constructor() {
    super();

    sendgrid.setApiKey(MAIL_SECRET);

    this.client = sendgrid;
  }

  async sendEmail(message: Message): Promise<void> {
    await this.client.send({
      from: {
        name: MAIL_CONTACT_NAME,
        email: MAIL_CONTACT_EMAIL
      },
      to: {
        name: message.to.name,
        email: message.to.email
      },
      subject: message.subject,
      html: message.body,
      templateId: message.templateId,
      dynamicTemplateData: message.templateData,
      replyTo: message.from.email,
      text: htmlToText(message.body, {
        preserveNewlines: true,
        wordwrap: 120
      })
    });
  }
}
