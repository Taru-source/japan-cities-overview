import z from "zod";
import { getCity, Endpoint } from "./client";

const citySchema = z.object({
  id: z.string(),
  cityName: z.string(),
  prefCode: z.number(),
  rentPerSqm: z.number(),
});

export type City = z.infer<typeof citySchema>;

export const fetchCity = async (cityCode: number): Promise<City> => {
  return getCity(Endpoint.cities, cityCode).then((res) => res);
};
