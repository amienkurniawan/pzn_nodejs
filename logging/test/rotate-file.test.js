import DailyRotateFile from 'winston-daily-rotate-file';
import winston from 'winston';

test("logging with daily rotate file", () => {
  const logger = winston.createLogger({
    level: "error",
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        filename: "app-%DATE%.log"
      })
    ]
  });

  logger.info("Hello World info");
  logger.warn("Hello World warn");
  logger.error("Hello World error");
})