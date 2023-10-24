import winston from "winston";

test("logging format", () => {
  const logger = winston.createLogger({
    level: "info",
    // format: winston.format.json(),
    // format: winston.format.simple(),
    format: winston.format.logstash(),
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.info("hello test");
})

test("logging format with printf", () => {
  const logger = winston.createLogger({
    level: "info",
    // format: winston.format.json(),
    // format: winston.format.simple(),
    format: winston.format.printf(log => {
      return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`;
    }),
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.info("hello test info");
  logger.warn("hello test warning");
  logger.error("hello test error");
})