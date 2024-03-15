import React from "react";
import { prefName } from "@/libs/pref";
import { fetchCities } from "@/libs/city";
import { rentForSingle } from "@/libs/rent";
import styles from "./page.module.scss";

export default async function Page({
  params,
}: {
  params: { prefCode: number };
}) {
  const cities = await fetchCities(params.prefCode);

  return (
    <section>
      <div>{prefName(params.prefCode)}以下の都市一覧</div>
      <div>※一人暮らし = 1kと仮定</div>
      <ul className={styles.citiesContainer}>
        {cities.map((city) => (
          <li key={city.id}>
            {city.cityName}{" "}
            {`一人暮らしの家賃相場：${
              city.rentPerSqm != 0 ? rentForSingle(city.rentPerSqm) : " - "
            }円`}
          </li>
        ))}
      </ul>
    </section>
  );
}
