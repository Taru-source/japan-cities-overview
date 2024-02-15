import { prefCodes, prefName } from "@/libs/pref";
import styles from "./page.module.scss";
import Link from "next/link";

export default async function Home() {
  return (
    <main className={styles.main}>
      <ul className={styles.prefContainer}>
        {prefCodes.map((prefCode) => (
          <div key={prefCode}>
            <Link href={`pref/${prefCode}`} className={styles.prefLink}>
              {prefName(prefCode)}
            </Link>
          </div>
        ))}
      </ul>
    </main>
  );
}
