import fs from "fs";
import path from "path";

import Roundels from "./roundels";

import styles from "./page.module.css";

export default async function Page() {
  const roundelsDir = path.join(process.cwd(), "public/roundels");
  const files = fs.readdirSync(roundelsDir);

  const images = await Promise.all(
    files.map(async (file) => {
      const image = await import(`../../public/roundels/${file}`);
      return image.default;
    })
  );

  return (
    <main className={styles.main}>
      <Roundels files={images} />
    </main>
  );
}