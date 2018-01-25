import { ProxyHandler } from "aws-lambda";
import { logger } from "./logger";

export const createHandler = (handler: ProxyHandler) => {
  const wrapper: ProxyHandler = async (event, context, callback) => {
    try {
      return await handler(event, context, callback);
    } catch (e) {
      logger.error("Fatal error:", e);
      callback!(null, {
        body: "Internal Server Error",
        statusCode: 500,
      });
    }
  };

  return wrapper;
};
