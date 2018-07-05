import {console, Tracer} from 'tracer'

export type KlgTransportFunction = (data: Tracer.LogOutput) => void

/**
 * Tracer 的 tsd 文件把 transport 参数类型搞错了，这里更正一下，已经 PR https://github.com/baryon/tracer/pull/87
 * typescript 不支持 overwrite interface property，所以这里只能重新定义一遍了
 */
export interface LoggerConfig {
  format?: string
  dateformat?: string
  filters?: Tracer.FilterFunction[]
  level?: string
  methods?: string[]
  /* get the specified index of stack as file information. It is userful for development package. */
  stackIndex?: number
  inspectOpt?: {
    /* if true then the object's non-enumerable properties will be shown too. Defaults to false */
    showHidden: boolean,
    depth: number
  }

  preprocess? (data: Tracer.LogOutput): void

  transport?: KlgTransportFunction | KlgTransportFunction[]
}


/**
 * console 是一个没有 constructor 属性的 function，不能直接 class Logger extends console
 * 所以需要通过 Function 来做一个桥接，在 Function 的 constructor 中 return console 实例
 */
export class Logger extends Function implements Tracer.Logger {
  constructor (config?: LoggerConfig) {
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