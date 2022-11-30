import { stocksClient, IStocksClient } from "./stocks/mod.ts";

export interface IRestClient {
  stocks: IStocksClient;
}

export const restClient = (apiKey: string, apiBase?: string): IRestClient => ({
  stocks: stocksClient(apiKey, apiBase),
});
