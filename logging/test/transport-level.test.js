import winston from "winston";

test("logging with file transport level", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log"
      }),
      new winston.transports.File({
        level: "error",
        filename: "application-error.log"
      }),
      new winston.transports.File({
        level: "warn",
        filename: "application-warn.log"
      })
    ]
  });

  logger.info("Hello world info");
  logger.warn("Hello world warning");
  logger.error("Hello world error");
});