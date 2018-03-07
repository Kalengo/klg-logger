import * as tracer from 'tracer'

export interface LogConfig {
  level?: string
  dateformat?: string
  inspectOpt?: {
    showHidden?: boolean
    depth?: number
  },
  transport?: Function
}

export class Logger {
  private logger: any
  private config: LogConfig

  constructor (config?: LogConfig) {
    if (config) {
      this.config = config
    }
    this.logger = tracer.console(this.config)
  }

  log (msg: any, ...params): void {
    this.logger.log.apply(this, arguments)
  }

  info (msg: any, ...params): void {
    this.logger.info.apply(this, arguments)
  }

  debug (msg: any, ...params): void {
    this.logger.debug.apply(this, arguments)
  }

  warn (msg: any, ...params): void {
    this.logger.warn.apply(this, arguments)
  }

  error (msg: any, ...params): void {
    this.logger.error.apply(this, arguments)
  }

  err (msg: any, ...params): void {
    this.logger.error.apply(this, arguments)
  }
}
