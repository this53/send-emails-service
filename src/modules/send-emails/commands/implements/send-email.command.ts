import { ICommand } from "@nestjs/cqrs";
import { SendEmailDTO, EmailDTO } from "../../dtos/send-email.dto";

export class SendEmailCommand implements ICommand {
    readonly from: EmailDTO;
    readonly to: EmailDTO;
    readonly subject: string;
    readonly body: string;
    readonly templateId: string;
    readonly templateData: object;

    constructor(data: SendEmailDTO) {
        this.from = data.from;
        this.to = data.to;
        this.subject = data.subject;
        this.body = data.body;
        this.templateId = data.templateId;
        this.templateData = data.templateData;
    }
}