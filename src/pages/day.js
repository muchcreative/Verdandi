// Next.js
import Head from 'next/head';
import Image from 'next/image';

// CSS
import styles from 'src/styles/day/Day.module.css';
import { allura } from 'src/styles/fonts.js';

// Components
import dynamic from 'next/dynamic';
const LiveClock = dynamic(() => import('src/components/day/live_clock.js'), {ssr: false});

// External Libs
import { clsx } from 'clsx';
              
export default function Day() {
    return (
      <>
        <Head>
          <title>Verdandi | Absent</title>
          <meta name='description' content='Personal website' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicons/day_tree.ico' />
        </Head>
        <main className={styles.main}>
            <div className={styles.whiteContainer}>
                <div className={styles.firstWhite}></div>
                <div className={styles.secondWhite}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <Image
                      priority
                      src='/day/cutlery.jpg'
                      alt='cutlery'
                      width={1920}
                      height={1280}
                      className={styles.cutlery}
                    />
                </div>
                <div className={styles.mainDivider}></div>
                <div className={clsx({[allura.className]: true, [styles.rightContent]: true})}>
                    <h1 className={styles.topLine}>Sorry, I&#39;m unexpectedly absent.</h1>
                    <LiveClock />
                    <p className={styles.bottomLine}>Can you come back later, <br className={styles.mobileBr}/><em className={styles.highlight}>after 9am?</em></p>  
                </div>
            </div>
        </main>
      </>
    )
  };