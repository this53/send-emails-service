import { Logger } from "@nestjs/common";
import { Job } from "bull";

interface Params {
    readonly logger: Logger;
}

export abstract class BaseProcessor<TJobData = any> {
    readonly logger: Logger;

    constructor(data: Params) {
        this.logger = data.logger;
    }

    abstract onActive(job: Job<TJobData>): Promise<void>;
    abstract onFailed(job: Job<TJobData>): Promise<void>;
    abstract onError(job: Job<TJobData>): Promise<void>;
}