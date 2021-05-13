export interface IMessagePatternArgs {
    readonly cmd: string;
}

export interface IMessagePatternResponse extends IMessagePatternArgs {
    readonly app: string;
}