import { APIGatewayEvent, APIGatewayEventRequestContext, Context, ProxyHandler, ProxyResult } from "aws-lambda";

export type Response = ProxyResult;

const mockRequestContext = (config: {} = {}): APIGatewayEventRequestContext => {
  return {
    accountId: "",
    apiId: "",
    httpMethod: "",
    identity: {
      accessKey: null,
      accountId: null,
      apiKey: null,
      caller: null,
      cognitoAuthenticationProvider: null,
      cognitoAuthenticationType: null,
      cognitoIdentityId: null,
      cognitoIdentityPoolId: null,
      sourceIp: "",
      user: null,
      userAgent: null,
      userArn: null,
    },
    requestId: "",
    resourceId: "",
    resourcePath: "",
    stage: "",
  };
};

export const mockApiGatewayEvent = (): APIGatewayEvent => {
  return {
    body: null,
    headers: {},
    httpMethod: "get",
    isBase64Encoded: false,
    path: "",
    pathParameters: null,
    queryStringParameters: null,
    requestContext: mockRequestContext(),
    resource: "",
    stageVariables: null,
  };
};

export const handlerWrapper = (
  handler: ProxyHandler,
  event: APIGatewayEvent = mockApiGatewayEvent(),
  context: Context = {} as Context,
): Promise<Response> => {
  return new Promise((resolve, reject) => {
    handler(event, context, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
};
