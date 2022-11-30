import * as queryString from "https://deno.land/x/querystring@v1.0.2/mod.js";

export interface IPolygonQuery {
  [key: string]: string | number | boolean | undefined;
}

export interface IPolygonQueryWithCredentials extends IPolygonQuery {
  apiKey: string | boolean;
}

export const auth =
  (apiKey: string, func: Function, apiBase: string) =>
  (...args: any) =>
    func(apiKey, apiBase, ...args);

export const get = async (
  path: string,
  apiKey: string,
  apiBase: string,
  query?: IPolygonQuery
): Promise<any> => {
  if (!apiKey) {
    throw new Error("API KEY not configured...");
  }

  const authenticatedQuery: IPolygonQueryWithCredentials = {
    ...query,
    apiKey,
  };

  const qs = queryString.stringify(authenticatedQuery, { encode: true });

  const url = `${apiBase}${path}?${qs}`;

  const response = await fetch(url);

  if (response.status >= 400) {
    const message = await response.text();
    throw new Error(message);
  }

  return response.json();
};
