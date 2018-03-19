"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tracer = require("tracer");
class Logger {
    constructor(config) {
        if (config) {
            if (!config.stackIndex)
                config.stackIndex = 1;
            this.config = config;
        }
        else {
            this.config = { stackIndex: 1 };
        }
        this.logger = tracer.console(this.config);
    }
    log(msg, ...params) {
        this.logger.log.apply(this, arguments);
    }
    info(msg, ...params) {
        this.logger.info.apply(this, arguments);
    }
    debug(msg, ...params) {
        this.logger.debug.apply(this, arguments);
    }
    warn(msg, ...params) {
        this.logger.warn.apply(this, arguments);
    }
    error(msg, ...params) {
        this.logger.error.apply(this, arguments);
    }
    err(msg, ...params) {
        this.error.apply(this, arguments);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map