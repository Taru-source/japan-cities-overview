import { prefCodes, prefName } from "@/libs/pref";
import styles from "./page.module.scss";
import Link from "next/link";
import { fetchCities } from "@/libs/city";
import { randomInt } from "crypto";
import { Ragion } from "@/libs/ragion";
import { rentForSingle } from "@/libs/rent";
import Image from "next/image";

export default async function Home() {
  const cities = await fetchCities();
  const randomCity = cities[randomInt(0, cities.length - 1)];
  return (
    <main className={styles.main}>
      <div className={styles.right}>
        ここに何かしらの項目別ランキング=市区町村にフィーチャーするもの
      </div>
      <div className={styles.left}>ここにサイト構造を表すリンク集でも</div>
      <ul className={styles.prefContainer}>
        <div>
          <div>
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
            グーグルマップリンク：
            <a
              href={`https://maps.google.com/maps?q=${
                prefName(randomCity.prefCode) + randomCity.cityName
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {prefName(randomCity.prefCode) + randomCity.cityName}
            </a>
          </div>
        </div>
        {prefCodes.map((prefCode) => (
          <div className={styles.prefCard} key={prefCode}>
            <Link href={`pref/${prefCode}`} className={styles.link}>
              <div className={styles.prefCardHeader}>
                <Image
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
