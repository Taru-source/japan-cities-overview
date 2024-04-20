import { createClient } from "microcms-js-sdk";

const defaultLimit = 2000;

export enum Endpoint {
  cities = "cities",
}

export function get(
  endpoint: Endpoint,
  queries?: { [key: string]: string | number },
  limit?: number
) {
  const client = createClient({
    serviceDomain: process.env.MICRO_CMS_DOMAIN as string,
    apiKey: process.env.MICRO_CMS_API_KEY as string,
  });

  // 「filters: 'key[equals]value'」の形でクエリを作成
  let filters = "";
  if (queries) {
    const queryArray = Object.entries(queries).map(
      ([key, value]) => `${key}[equals]${value}`
    );
    filters = `${queryArray.join("[and]")}`;
  }

  if (limit) {
    queries = { filters: filters, limit: limit };
  } else {
    queries = { filters: filters, limit: defaultLimit };
  }

  return client.get({
    endpoint: endpoint,
    queries: queries,
  });
}
