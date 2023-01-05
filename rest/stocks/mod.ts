import { auth } from "../transport/mod.ts";

import { IAggsQuery, IAggs, aggregates, IAggsResults } from "./aggregates.ts";
export type { IAggs, IAggsResults } from "./aggregates.ts";

export interface IStocksClient {
  aggregates: (
    ticker: string,
    multiplier: number,
    timespan: string,
    from: string | number,
    to: string | number,
    query?: IAggsQuery
  ) => Promise<IAggs>;
}

export const stocksClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io"
): IStocksClient => ({
  aggregates: auth(apiKey, aggregates, apiBase),
});
