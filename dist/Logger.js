"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../node_modules/tracer/index.d.ts"/>
__export(require("tracer"));
const tracer_1 = require("tracer");
class Logger extends Function {
    constructor(config) {
        super();
        Object.setPrototypeOf(tracer_1.console, Logger.prototype);
        const instance = tracer_1.console(config);
        instance.err = instance.error;
        return instance;
    }
    // 下列方法都会被覆盖，只做声明用， 无需实现
    debug(...args) {
        return undefined;
    }
    err(...args) {
        return this.error(...args);
    }
    error(...args) {
        return undefined;
    }
    fatal(...args) {
        return undefined;
    }
    info(...args) {
        return undefined;
    }
    log(...args) {
        return undefined;
    }
    trace(...args) {
        return undefined;
    }
    warn(...args) {
        return undefined;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map