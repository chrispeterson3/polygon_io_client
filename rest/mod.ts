import { stocksClient, IStocksClient } from "./stocks/mod.ts";
import { indicatorsClient, IIndicatorsClient } from "./indicators/mod.ts";

export interface IRestClient {
  stocks: IStocksClient;
  indicators: IIndicatorsClient;
}

export const restClient = (apiKey: string, apiBase?: string): IRestClient => ({
  stocks: stocksClient(apiKey, apiBase),
  indicators: indicatorsClient(apiKey, apiBase),
});
