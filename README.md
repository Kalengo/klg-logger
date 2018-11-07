# klg-logger
log 工具，基于 tracer，简单，可以显示 log 的位置

## 配置
3.0 版本开始，将不对 tracer 做任何封装，直接使用 Tracer

详细用法见 tracer 文档 https://www.npmjs.com/package/tracer

## 基本用法

### 简单版本
默认版本是把 log 输出到 console

```js
import { Logger } from 'klg-logger'

const logger = Logger({
  level: config.get('log.level'),
  dateformat: 'yyyy-mm-dd HH:MM:ss.L',
  inspectOpt: {
    showHidden: false, // if true then the object's non-enumerable properties will be shown too. Defaults to false
    depth: 5 // tells inspect how many times to recurse while formatting the object. This is useful for inspecting large complicated objects. Defaults to 2. To make it recurse indefinitely pass null.
  }
})

logger.info('hello world')
logger.debug('hello %s', 'world')
logger.error('hello %s', 'error')

export {logger}
```

配置项的详细解释：

```
interface LoggerConfig {
    /**
     * Output format (Using `tinytim` templating)
     *
     * Defaults to: `"{{timestamp}} <{{title}}> {{file}}:{{line}} ({{method}}) {{message}}"`
     *
     * Possible values:
     * - timestamp: current time
     * - title: method name, default is 'log', 'trace', 'debug', 'info', 'warn', 'error','fatal'
     * - level: method level, default is 'log':0, 'trace':1, 'debug':2, 'info':3, 'warn':4, 'error':5, 'fatal':6
     * - message: printf message, support %s string, %d number, %j JSON and auto inspect
     * - file: file name
     * - line: line number
     * - pos: position
     * - path: file's path
     * - method: method name of caller
     * - stack: call stack message
     */
    format?: string | [string, LevelOption<string>];
    /**
     * Datetime format (Using `Date Format`)
     */
    dateformat?: string;
    filters?: FilterFunction[] | LevelOption<FilterFunction> | Array<FilterFunction | LevelOption<FilterFunction | FilterFunction[]>>;
    /**
     * Output the log, if level of log larger than or equal to `level`.
     */
    level?: string | number;
    methods?: string[];
    /**
     * Get the specified index of stack as file information. It is useful for development package.
     */
    stackIndex?: number;
    inspectOpt?: {
        /**
         * If true then the object's non-enumerable properties will be shown too. Defaults to false.
         */
        showHidden: boolean,
        /**
         * Tells inspect how many times to recurse while formatting the object.
         * This is useful for inspecting large complicated objects.
         * Defaults to 2. To make it recurse indefinitely pass null.
         */
        depth: number
    };

    /**
     * Pre-process the log object.
     */
    preprocess?(data: LogOutput): void;
    /**
     * Transport function (e.g. console.log)
     */
    transport?: TransportFunction | TransportFunction[];
}
```


### 自定义 transport
如果你需要把 log 输出到文件或者发送其他地方，可以自定义 transport function

```js
import { Logger } from 'klg-logger'
const logger = new Logger({
  level: 'log',
  transport: function (data: Tracer.LogOutput) {
    // 写文件
    fs.write(data)
    // 发送其他地址
    tcp.send(data)

    assert(data)
    assert(data.level === 0)
  }
})
logger.log('hello world')
```

### 每日分割日志

如果你需要把 log 输出到文件或者发送其他地方，可以自定义 transport function

```js
import { LoggerDaily } from 'klg-logger'
const logger = LoggerDaily({
  root: '/data/app/log',
  maxLogFiles: 10,
  allLogsFileName : true,
  level: 'log'
})
logger.log('hello world')
logger.err = logger.error
logger.err('hello world')
```

配置字段：

```
interface DailyFileConfig {
    /**
     * All daily log file's dir, default to: `'.'`.
     */
    root?: string;
    /**
     * Log file path format.
     *
     * Default to: `'{{root}}/{{prefix}}.{{date}}.log'`
     *
     * Possible values:
     * - `root`: all daily log file's dir, default to: `'.'`.
     * - `prefix`: it equal to `allLogsFileName`, if `allLogsFileName` is provided; else it will be the method name.
     * - `date`: today's date.
     */
    logPathFormat?: string;
    /**
     * Datetime format (Using `Date Format`)
     */
    splitFormat?: string;
    /**
     * If `allLogsFileName` is provided then all level logs will be move to one daily log file.
     */
    allLogsFileName?: boolean;
    maxLogFiles?: number;
}
```
