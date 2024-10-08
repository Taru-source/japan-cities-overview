import React from "react";
import { prefName } from "@/libs/pref";
import { fetchCities } from "@/libs/pref";
import { rentForSingle } from "@/libs/rent";
import styles from "./page.module.scss";
import GoogleMapLink from "@/components/googleMapLink";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = 86400;

export default async function Page({
  params,
}: {
  params: { prefCode: number };
}) {
  const cities = await fetchCities(params.prefCode);

  return (
    <div className={styles.main}>
      <div className={styles.citiesContainer}>
        <div>{prefName(params.prefCode)}以下の都市一覧</div>
        <div>※一人暮らし = 1kと仮定</div>
        {cities.map((city) => (
          <div
            className={styles.cityCard}
            key={city.id}
            data-tetstid="city-card"
          >
            <div className={styles.cityCardBody}>
              <Link href={`/city/${city.id}`}>
                <div>{city.cityName}</div>
              </Link>
              <div data-testid="city-rent">
                {`一人暮らしの家賃相場：${
                  city.rentPerSqm != 0 ? rentForSingle(city.rentPerSqm) : " - "
                }円`}
              </div>
              <div>
                <GoogleMapLink
                  params={{
                    prefName: prefName(city.prefCode),
                    cityName: city.cityName,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
