"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tracer = require("tracer");
class Logger {
    constructor(config) {
        if (config) {
            this.config = config;
        }
        this.logger = tracer.console(this.config);
    }
    log() {
        this.logger.log.apply(this, arguments);
    }
    info() {
        this.logger.info.apply(this, arguments);
    }
    debug() {
        this.logger.debug.apply(this, arguments);
    }
    warn() {
        this.logger.warn.apply(this, arguments);
    }
    error() {
        this.logger.error.apply(this, arguments);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map