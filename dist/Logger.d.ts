/// <reference path="../node_modules/tracer/index.d.ts" />
import { Tracer } from 'tracer';
export declare class Logger extends Function implements Tracer.Logger {
    constructor(config?: any);
    debug(...args: any[]): Tracer.LogOutput;
    err(...args: any[]): Tracer.LogOutput;
    error(...args: any[]): Tracer.LogOutput;
    fatal(...args: any[]): Tracer.LogOutput;
    info(...args: any[]): Tracer.LogOutput;
    log(...args: any[]): Tracer.LogOutput;
    trace(...args: any[]): Tracer.LogOutput;
    warn(...args: any[]): Tracer.LogOutput;
}
