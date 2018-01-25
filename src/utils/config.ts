export const config = {
  db: {
    accessKeyId: "MOCK_ACCESS_KEY_ID",
    endpoint: "http://dynamodb:8000",
    region: "localhost",
    secretAccessKey: "MOCK_SECRET_ACCESS_KEY",
    tables: {
      users: process.env.USERS_TABLE || "",
    },
  },
};
