export interface LogConfig {
    level?: string;
    dateformat?: string;
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
    log(): void;
    info(): void;
    debug(): void;
    warn(): void;
    error(): void;
}
