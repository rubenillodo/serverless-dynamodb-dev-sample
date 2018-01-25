import { handlerWrapper } from "../utils/handlerWrapper";
import handler from "./health";

test("test healthy handler", async () => {
  const { statusCode } = await handlerWrapper(handler);
  expect(statusCode).toBe(200);
});
