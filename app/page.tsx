import { avgPrefRent, prefCodes, prefName } from "@/libs/pref";
import styles from "./page.module.scss";
import Link from "next/link";
import { fetchCities } from "@/libs/pref";
import { randomInt } from "crypto";
import { Ragion } from "@/libs/ragion";
import { rentForSingle } from "@/libs/rent";
import Image from "next/image";
import GoogleMapLink from "@/components/googleMapLink";

export default async function Home() {
  const cities = await fetchCities();
  const randomCity = cities[randomInt(0, cities.length - 1)];
  return (
    <main className={styles.main}>
      <div className={styles.prefContainer}>
        <div>
          <div className="random-city">
            ランダム都市：{prefName(randomCity.prefCode)}
            {randomCity.cityName}
          </div>
          <div>
            {`一人暮らしの家賃相場：${
              randomCity.rentPerSqm != 0
                ? rentForSingle(randomCity.rentPerSqm)
                : " - "
            }円`}
          </div>
          <div>
            <GoogleMapLink
              params={{
                prefName: prefName(randomCity.prefCode),
                cityName: randomCity.cityName,
              }}
            />
          </div>
        </div>
        {prefCodes.map((prefCode) => (
          <div
            className={styles.prefCard}
            key={prefCode}
            data-testid="pref-card"
          >
            <Link href={`pref/${prefCode}`} className={styles.link}>
              <div className={styles.prefCardHeader}>
                <Image src="/japan.png" alt="sample" width={300} height={200} />
              </div>
              <div className={styles.prefCardBody}>
                <span
                  className={`${styles.prefCardTag} ${
                    styles[Ragion(prefCode).roma]
                  }`}
                >
                  {Ragion(prefCode).name}
                </span>
                <span className={styles.prefLabel}>{prefName(prefCode)}</span>
                <span className={styles.prefRent}>
                  {`平均家賃相場：${rentForSingle(
                    avgPrefRent(
                      cities.filter((city) => city.prefCode === prefCode)
                    )
                  )}円`}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
