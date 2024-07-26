import React from "react";
import { fetchCity } from "@/libs/city";
import { z } from "zod";

export default async function Page({
  params,
}: {
  params: { cityCode: number };
}) {
  const cityCodeSchema = z.number();

  const cityCode = cityCodeSchema.parse(Number(params.cityCode));
  const city = await fetchCity(cityCode);

  return (
    <div>
      <h1>{city.cityName}</h1>
    </div>
  );
}
