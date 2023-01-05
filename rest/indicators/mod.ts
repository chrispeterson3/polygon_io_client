import { auth } from "../transport/mod.ts";

import { ISmaQuery, ISma, sma, ISmaResults } from "./sma.ts";
export type { ISma, ISmaResults } from "./sma.ts";

export interface IIndicatorsClient {
  sma: (stockTicker: string, query?: ISmaQuery) => Promise<ISma>;
}

export const indicatorsClient = (
  apiKey: string,
  apiBase = "https://api.polygon.io"
): IIndicatorsClient => ({
  sma: auth(apiKey, sma, apiBase),
});
