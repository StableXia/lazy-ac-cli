const log4js = require('log4js')

module.exports.createLogger = function(logPath) {
  log4js.configure({
    appenders: {
      file: {
        type: 'file',
        filename: logPath,
        maxLogSize: 100 * 1024 * 1024,
        layout: {
          type: 'pattern',
          pattern: '%r %p - %m'
        }
      },
      stdout: {
        type: 'console'
      }
    },
    categories: {
      default: {
        appenders: ['file', 'stdout'],
        level: 'debug'
      }
    }
  })
  return log4js.getLogger()
}
