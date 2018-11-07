"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("tracer"));
const tracer_1 = require("tracer");
exports.Logger = tracer_1.console;
exports.LoggerDaily = tracer_1.dailyfile;
//# sourceMappingURL=Logger.js.map