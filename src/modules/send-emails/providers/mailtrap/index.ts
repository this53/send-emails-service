import * as nodemailer from 'nodemailer';
import { MAIL_CONTACT_EMAIL, MAIL_CONTACT_NAME, MAIL_ID, MAIL_SECRET } from '~/environments';
import { MailProvider, Message } from '../../interfaces/mail.provider';

export class MailtrapProvider extends MailProvider {
    private transporter: nodemailer.Transporter;

    constructor() {
        super();

        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: MAIL_ID,
                pass: MAIL_SECRET
            }
        });
    }

    async sendEmail(message: Message): Promise<void> {
        await this.transporter.sendMail({
            from: {
                name: MAIL_CONTACT_NAME,
                address: MAIL_CONTACT_EMAIL,
            },
            to: {
                name: message.to.name,
                address: message.to.email
            },
            subject: message.subject,
            html: message.body,
        });
    }
}