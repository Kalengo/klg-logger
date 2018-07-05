# klg-logger
log 工具，基于 tracer，简单，可以显示 log 的位置

## 配置
见 tracer 文档 https://www.npmjs.com/package/tracer

## 用法

### 简单版本
默认版本是把 log 输出到 console

```js
import { Logger } from 'klg-logger'

const logger = new Logger({
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

export default logger
```


### 自定义 transport
如果你需要把 log 输出到文件或者发送其他地方，可以自定义 transport function

```js
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
