import { createClient } from "microcms-js-sdk";
import { z } from "zod";

const defaultLimit = 2000;

export enum Endpoint {
  cities = "cities",
}

const envSchema = z.object({
  MICRO_CMS_DOMAIN: z.string(),
  MICRO_CMS_API_KEY: z.string(),
});

const validatedEnv = envSchema.parse(process.env);

export function get(
  endpoint: Endpoint,
  queries?: { [key: string]: string | number },
  limit?: number
) {
  const client = createClient({
    serviceDomain: validatedEnv.MICRO_CMS_DOMAIN,
    apiKey: validatedEnv.MICRO_CMS_API_KEY,
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
