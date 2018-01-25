import { DynamoDB } from "aws-sdk";
import { config } from "../utils/config";

const { accessKeyId, endpoint, region, secretAccessKey } = config.db;
export const db = {
  doc: new DynamoDB.DocumentClient({ accessKeyId, endpoint, region, secretAccessKey }),
  raw: new DynamoDB({ accessKeyId, endpoint, region, secretAccessKey }),
};
