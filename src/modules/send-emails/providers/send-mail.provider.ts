import { isProduction } from "~/environments";
import { MailProvider } from "../interfaces/mail.provider";
import { MailtrapProvider } from "./mailtrap";
import { SESProvider } from "./ses";

export const SendMailProvider = {
    useClass: !isProduction ? SESProvider : MailtrapProvider,
    provide: MailProvider
};