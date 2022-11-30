import { restClient, IRestClient } from "./rest/mod.ts";
export type { IAggs, IAggsResults } from "./rest/stocks/mod.ts";

export interface IPolygonClient {
  rest: IRestClient;
}

export const polygonClient = (
  apiKey: string,
  restApiBase?: string
): IPolygonClient => ({
  rest: restClient(apiKey, restApiBase),
});
