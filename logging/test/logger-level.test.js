import winston from "winston";

test("create new logger level", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [
      new winston.transports.Console({})
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