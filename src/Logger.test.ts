import * as assert from 'power-assert'
import {Logger, LoggerDaily} from './Logger'

describe('logger ts test', async function () {

  it(' test ts log', async () => {
    const logger = Logger({
      level: 'log',
      stackIndex: 1,
      filters: [function (data) {
        console.log('filters', data);
        return data
      }],
      transport: function (data) {
        console.log('data', data);
        assert(data)
        assert(data.level === 0)
      }
    })
    logger.log('hello world')
  })

  it(' test info', async () => {
    const logger = Logger()
    logger.info('hello world')
  })

  it(' test debug', async () => {
    const logger = Logger()
    logger.debug('hello world')
  })

  it(' test warn', async () => {
    const logger = Logger({
      transport: function (data) {
        assert(data.level === 4)
        assert(data.title === 'warn')
        assert(data.message === 'hello world')
        assert(data.path.includes('Logger.test.ts'))
      }
    })
    logger.warn('hello world')
  })

  it(' test error', async () => {
    const logger = Logger()
    logger.error('hello world')
  })

  it(' test err', async () => {
    const logger = Logger()
    logger.err = logger.error
    logger.err('hello world')
  })

  it(' daily ', async () => {
    const logger = LoggerDaily({
      root: '/data/app/log',
      maxLogFiles: 10,
      allLogsFileName : true,
      level: 'log'
    })
    logger.log('hello world')
    logger.err = logger.error
    logger.err('hello world')
  })
})
