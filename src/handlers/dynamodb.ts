import { config } from "../utils/config";
import { createHandler } from "../utils/createHandler";
import { db } from "../utils/db";

export default createHandler(async function test(event, context, callback) {
  callback!(null, {
    body: JSON.stringify(await db.doc.scan({ TableName: config.db.tables.users }).promise()),
    statusCode: 200,
  });
});
