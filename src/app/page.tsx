import Image from "next/image";
import styles from "./page.module.css";
import { getData } from "./_shared/functions/getData";

export default async function Home() {
  const products = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div>
        {products?.map((product) => product.brand)}
      </div>
    </main>
  );
}
