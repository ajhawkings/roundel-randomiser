import Link from 'next/link';

import styles from "./page.module.css";

export default function Page() {
  return <>
    <main className={styles.main}>
      <h1>
        Roundel Randomiser
      </h1>
      <h3>
        A simple application made to help with the <i>Connecting London</i> board game
      </h3>
      <p>
        Replaces the &apos;Good Service&apos; tiles, meaning you no longer
        have to put them back in the bag and draw two new ones every turn. I
        enjoy this game but found this process tedious, so this app speeds up
        the gameplay and makes it work better for me!
      </p>
      <p style={{ textAlign: "center" }}>
        Made by ajhawkings! Available on <a href="https://github.com/ajhawkings/tubegame">GitHub</a><br />
        Also check out my <a href="https://www.hawkings.me">website</a> :)
      </p>
      <p>
        Roundels © <a href="https://www.tfl.gov.uk">TfL</a><br />
      </p>
      <br />
      <Link href="/" className={styles.back}>Back to the game</Link>
    </main>
  </>
}
