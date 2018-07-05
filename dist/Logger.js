"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tracer_1 = require("tracer");
/**
 * console 是一个没有 constructor 属性的 function，不能直接 class Logger extends console
 * 所以需要通过 Function 来做一个桥接，在 Function 的 constructor 中 return console 实例
 */
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