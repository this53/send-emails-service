export interface User{
    readonly name: string;
    readonly email: string;
    readonly logo?: string;
    readonly phone?: string;
}

export interface Message {
    readonly from: User;
    readonly to: User;
    readonly subject: string;
    readonly body: string;
    readonly templateId: string;
    readonly templateData: object;
}

export abstract class MailProvider {
    abstract sendEmail(message: Message): Promise<void>;
}