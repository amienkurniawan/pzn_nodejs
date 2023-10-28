import TransportStream from "winston-transport";
import winston from "winston";

test("create new logger with new transport", () => {

  class myTransport extends TransportStream {
    constructor(option) {
      super(option)
    }

    log(info, next) {
      console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`)
      next();
    }
  }

  const logger = winston.createLogger({
    level: 'silly',
    transports: [
      new myTransport({})
    ]
  });

  logger.log({ level: "error", message: "Hello Error" })
  logger.log({ level: "warn", message: "Hello Warning" })
  logger.log({ level: "info", message: "Hello Logging" })
  logger.log({ level: "http", message: "Hello HTTP" })
  logger.log({ level: "verbose", message: "Hello Verbose" })
  logger.log({ level: "debug", message: "Hello Debug" })
  logger.log({ level: "silly", message: "Hello Silly" })
}); 