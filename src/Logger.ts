///<reference path="../node_modules/tracer/index.d.ts"/>
export * from 'tracer'
import {console, Tracer} from 'tracer'


export class Logger extends Function implements Tracer.Logger {
  constructor (config?) {
    super()
    Object.setPrototypeOf(console, Logger.prototype)
    const instance = console(config) as Logger
    instance.err = instance.error
    return instance
  }

  // 下列方法都会被覆盖，只做声明用， 无需实现
  debug (...args: any[]): Tracer.LogOutput {
    return undefined;
  }

  err (...args: any[]): Tracer.LogOutput {
    return this.error(...args)
  }

  error (...args: any[]): Tracer.LogOutput {
    return undefined;
  }

  fatal (...args: any[]): Tracer.LogOutput {
    return undefined;
  }

  info (...args: any[]): Tracer.LogOutput {
    return undefined;
  }

  log (...args: any[]): Tracer.LogOutput {
    return undefined;
  }

  trace (...args: any[]): Tracer.LogOutput {
    return undefined;
  }

  warn (...args: any[]): Tracer.LogOutput {
    return undefined;
  }
}