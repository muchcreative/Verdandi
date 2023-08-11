// Next.js
import Head from 'next/head';

// CSS
import styles from 'src/styles/day/Day.module.css';

export default function Blank() {
    return (
      <>
        <Head>
          <title>Verdandi</title>
          <meta name='description' content='Personal website' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicons/day_tree.ico' />
        </Head>
        <main className={styles.main}>
        </main>
      </>
    )
  };