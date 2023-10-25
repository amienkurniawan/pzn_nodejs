import winston from "winston";

test("logging format with printf", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.info("hello test info");
  logger.warn("hello test warning");
  logger.error("hello test error");
})