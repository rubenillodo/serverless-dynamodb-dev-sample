import { createHandler } from "./createHandler";
import { logger } from "./logger";

jest.mock("./logger", () => ({ logger: { error: jest.fn() } }));

test("calls original handler passing down all parameters", () => {
  const mockHandler = jest.fn();
  (createHandler(mockHandler) as any)("a", "b", "c");
  expect(mockHandler).toHaveBeenCalledWith("a", "b", "c");
});

test("calls `callback()` with `statusCode=500` if it catches an error", () => {
  const mockCallback = jest.fn();
  const mockHandler = jest.fn(() => {
    throw new Error();
  });

  (createHandler(mockHandler) as any)(null, null, mockCallback);
  expect(mockCallback).toHaveBeenCalledWith(null, { body: "Internal Server Error", statusCode: 500 });
});

test("logs exception if it catches an error", () => {
  const mockHandler = jest.fn(() => {
    throw new Error("some error");
  });

  (createHandler(mockHandler) as any)(null, null, jest.fn());
  expect(logger.error).toHaveBeenCalledWith("Fatal error:", new Error("some error"));
});
