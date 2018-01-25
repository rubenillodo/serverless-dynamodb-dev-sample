import { createHandler } from "../utils/createHandler";

export default createHandler(function test(event, context, callback) {
  callback!(null, { body: "", statusCode: 200 });
});
