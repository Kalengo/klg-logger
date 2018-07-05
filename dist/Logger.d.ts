import { Tracer } from 'tracer';
export declare type KlgTransportFunction = (data: Tracer.LogOutput) => void;
/**
 * Tracer 的 tsd 文件把 transport 参数类型搞错了，这里更正一下，已经 PR
 * typescript 不支持 overwrite interface property，所以这里只能重新定义一遍了
 */
export interface LoggerConfig {
    format?: string;
    dateformat?: string;
    filters?: Tracer.FilterFunction[];
    level?: string;
    methods?: string[];
    stackIndex?: number;
    inspectOpt?: {
        showHidden: boolean;
        depth: number;
    };
    preprocess?(data: Tracer.LogOutput): void;
    transport?: KlgTransportFunction | KlgTransportFunction[];
}
/**
 * console 是一个没有 constructor 属性的 function，不能直接 class Logger extends console
 * 所以需要通过 Function 来做一个桥接，在 Function 的 constructor 中 return console 实例
 */
export declare class Logger extends Function implements Tracer.Logger {
    constructor(config?: LoggerConfig);
    debug(...args: any[]): Tracer.LogOutput;
    err(...args: any[]): Tracer.LogOutput;
    error(...args: any[]): Tracer.LogOutput;
    fatal(...args: any[]): Tracer.LogOutput;
    info(...args: any[]): Tracer.LogOutput;
    log(...args: any[]): Tracer.LogOutput;
    trace(...args: any[]): Tracer.LogOutput;
    warn(...args: any[]): Tracer.LogOutput;
}
