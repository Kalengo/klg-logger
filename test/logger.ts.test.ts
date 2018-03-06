import * as should from 'should';
import { Logger } from '../src/Logger'

describe('logger ts test', async function () {

  it(' test ts log', async () => {
    const logger = new Logger({
      level: 'log',
      transport: function (data) {
        console.log('data', data);
        should.exist(data)
        should.equal(data.level, 0)
      }
    })
    logger.log('hello world')
  })

  it(' test info', async () => {
    const logger = new Logger()
    logger.info('hello world')
  })

  it(' test debug', async () => {
    const logger = new Logger()
    logger.debug('hello world')
  })

  it(' test warn', async () => {
    const logger = new Logger({
      transport: function (data) {
        console.log('data', data);
        should.equal(data.level, 4)
      }
    })
    logger.warn('hello world')
  })

  it(' test err', async () => {
    const logger = new Logger()
    logger.error('hello world')
  })
})

