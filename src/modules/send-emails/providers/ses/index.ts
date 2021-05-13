import * as AWS from 'aws-sdk';
import { htmlToText } from 'html-to-text';
import { MAIL_ID, MAIL_SECRET } from '~/environments';
import { MailProvider, Message } from '../../interfaces/mail.provider';

export class SESProvider extends MailProvider {
    private client: AWS.SES;

    constructor() {
        super();

        this.client = new AWS.SES({
            region: 'us-east-1',
            credentials: {
                accessKeyId: MAIL_ID,
                secretAccessKey: MAIL_SECRET,
            },
        });
    }

    async sendEmail(message: Message): Promise<void> {
        await this.client
            .sendEmail({
                Source: `${message.from.name} <${message.from.email}>`,
                Destination: {
                    ToAddresses: [message.to.email],
                },
                ReplyToAddresses: [message.from.email],
                Message: {
                    Subject: {
                        Data: message.subject,
                    },
                    Body: {
                        Html: {
                            Data: message.body,
                        },
                        Text: {
                            Data: htmlToText(message.body, {
                                preserveNewlines: true,
                                wordwrap: 120,
                            }),
                        },
                    },
                },
                Tags: [
                    {
                        Name: 'identificator',
                        Value: message.to.email.replace('@', '').replace(/\./g, ''),
                    },
                ],
                ConfigurationSetName: 'Stokei',
            })
            .promise();
    }
}