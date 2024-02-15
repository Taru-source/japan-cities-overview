import { Endpoint, get } from "@/libs/client";

export type city = {
  id: string;
  cityName: string;
  prefCode: number;
  rentPerSqm: number;
};

export async function fetchCities(prefCode?: number): Promise<city[]> {
  if (prefCode) {
    return get(Endpoint.cities, { prefCode: prefCode }).then(
      (res) => res.contents
    );
  }
  return get(Endpoint.cities).then((res) => res.contents);
}
