import { prefCodes, prefName } from "@/libs/pref";
import styles from "./page.module.scss";
import Link from "next/link";
import { fetchCities } from "@/libs/city";
import { randomInt } from "crypto";
import { Ragion } from "@/libs/ragion";
import { rentForSingle } from "@/libs/rent";

export default async function Home() {
  const cities = await fetchCities();
  const randomCity = cities[randomInt(0, cities.length - 1)];
  return (
    <main className={styles.main}>
      <div className={styles.right}></div>
      <div className={styles.left}></div>
      <ul className={styles.prefContainer}>
        <div>
          <div>
            ランダム都市{prefName(randomCity.prefCode)}
            {randomCity.cityName}
          </div>
          <div>
            一人暮らしの家賃相場：
            {rentForSingle(randomCity.rentPerSqm)}円
          </div>
          <div>ここにグーグルマップの埋め込みしたい</div>
        </div>
        {prefCodes.map((prefCode) => (
          <div className={styles.prefCard} key={prefCode}>
            <Link href={`pref/${prefCode}`} className={styles.link}>
              <div className={styles.prefCardHeader}>
                <img
                  src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                  alt="rover"
                />
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
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </main>
  );
}
