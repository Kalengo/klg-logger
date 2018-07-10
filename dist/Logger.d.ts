import { Tracer } from 'tracer';
/**
 * console 是一个没有 constructor 属性的 function，不能直接 class Logger extends console
 * 所以需要通过 Function 来做一个桥接，在 Function 的 constructor 中 return console 实例
 */
export declare class Logger extends Function implements Tracer.Logger {
    constructor(config?: Tracer.LoggerConfig);
    debug(...args: any[]): Tracer.LogOutput;
    err(...args: any[]): Tracer.LogOutput;
    error(...args: any[]): Tracer.LogOutput;
    fatal(...args: any[]): Tracer.LogOutput;
    info(...args: any[]): Tracer.LogOutput;
    log(...args: any[]): Tracer.LogOutput;
    trace(...args: any[]): Tracer.LogOutput;
    warn(...args: any[]): Tracer.LogOutput;
}
