import { get, IPolygonQuery } from "../transport/mod.ts";

export interface ISmaResults {
  timestamp?: number;
  value?: number;
}

export interface ISmaQuery extends IPolygonQuery {
  window?: number;
  timestamp?: number | string;
  ["timestamp.gte"]?: number;
  ["timestamp.lte"]?: number;
  timespan?: "day";
  limit?: number;
}

export interface ISma {
  results?: {
    values: ISmaResults[];
  };
}

export const sma = async (
  apikey: string,
  apiBase: string,
  stockTicker: string,
  query?: ISmaQuery
): Promise<ISma> =>
  get(`/v1/indicators/sma/${stockTicker}`, apikey, apiBase, query);
