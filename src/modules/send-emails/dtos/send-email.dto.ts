export interface EmailDTO {
    readonly name: string;
    readonly email: string;
}

export interface SendEmailDTO {
    readonly from: EmailDTO;
    readonly to: EmailDTO;
    readonly subject: string;
    readonly body: string;
}