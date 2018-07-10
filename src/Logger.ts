import {console, Tracer} from 'tracer'

/**
 * console 是一个没有 constructor 属性的 function，不能直接 class Logger extends console
 * 所以需要通过 Function 来做一个桥接，在 Function 的 constructor 中 return console 实例
 */
export class Logger extends Function implements Tracer.Logger {
  constructor (config?: Tracer.LoggerConfig) {
    super()
    Object.setPrototypeOf(console, Logger.prototype)
    const instance = console(config as any) as Logger
    instance.err = instance.error
    return instance
  }

  // 下列方法都会被覆盖，只做声明用， 无需实现
  debug (...args: any[]): Tracer.LogOutput {
    return undefined
  }

  err (...args: any[]): Tracer.LogOutput {
    return this.error(...args)
  }

  error (...args: any[]): Tracer.LogOutput {
    return undefined
  }

  fatal (...args: any[]): Tracer.LogOutput {
    return undefined
  }

  info (...args: any[]): Tracer.LogOutput {
    return undefined
  }

  log (...args: any[]): Tracer.LogOutput {
    return undefined
  }

  trace (...args: any[]): Tracer.LogOutput {
    return undefined
  }

  warn (...args: any[]): Tracer.LogOutput {
    return undefined
  }
}