import winston from "winston";

test("create new logger level shortcut", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.error("Hello Error")
  logger.warn("Hello Warning")
  logger.info("Hello Logging")
  logger.http("Hello HTTP")
  logger.verbose("Hello Verbose")
  logger.debug("Hello Debug")
  logger.silly("Hello Silly")
});