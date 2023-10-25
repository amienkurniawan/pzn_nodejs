import winston from "winston";

test("logging file transports", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log"
      }),
      new winston.transports.File({
        filename: "amien.log"
      }),
    ]
  });

  logger.info("hello test info");
  logger.warn("hello test warning");
  logger.error("hello test error");
})