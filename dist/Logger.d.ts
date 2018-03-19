export interface LogConfig {
    level?: string;
    dateformat?: string;
    stackIndex?: number;
    inspectOpt?: {
        showHidden?: boolean;
        depth?: number;
    };
    transport?: Function;
}
export declare class Logger {
    private logger;
    private config;
    constructor(config?: LogConfig);
    log(msg: any, ...params: any[]): void;
    info(msg: any, ...params: any[]): void;
    debug(msg: any, ...params: any[]): void;
    warn(msg: any, ...params: any[]): void;
    error(msg: any, ...params: any[]): void;
    err(msg: any, ...params: any[]): void;
}
