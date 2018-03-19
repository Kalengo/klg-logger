"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const should = require("should");
const Logger_1 = require("../src/Logger");
describe('logger ts test', async function () {
    it(' test ts log', async () => {
        const logger = new Logger_1.Logger({
            level: 'log',
            stackIndex: 1,
            transport: function (data) {
                console.log('data', data);
                should.exist(data);
                should.equal(data.level, 0);
            }
        });
        logger.log('hello world');
    });
    it(' test info', async () => {
        const logger = new Logger_1.Logger();
        logger.info('hello world');
    });
    it(' test debug', async () => {
        const logger = new Logger_1.Logger();
        logger.debug('hello world');
    });
    it(' test warn', async () => {
        const logger = new Logger_1.Logger({
            transport: function (data) {
                console.log('data', data);
                should.equal(data.level, 4);
            }
        });
        logger.warn('hello world');
    });
    it(' test err', async () => {
        const logger = new Logger_1.Logger();
        logger.error('hello world');
    });
});
//# sourceMappingURL=Logger.spec.js.map