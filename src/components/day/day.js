// Next.js
import Head from 'next/head';
import Image from 'next/image';
import { Allura } from 'next/font/google'

// CSS
import styles from 'src/styles/day/Day.module.css';

// Components
import dynamic from 'next/dynamic';
const LiveClock = dynamic(() => import('src/components/day/live_clock.js'), {ssr: false});

// External Libs
import { clsx } from 'clsx';

const allura = Allura({
                subsets: ['latin'], 
                weight: ['400']
              });

export default function Day() {
    return (
      <>
        <Head>
          <title>Verdandi</title>
          <meta name='description' content='Personal website' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicons/day_tree.png' />
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
                      width={2400}
                      height={1600}
                      className={styles.cutlery}
                    />
                </div>
                <div className={styles.mainDivider}></div>
                <div className={clsx({[allura.className]: true, [styles.rightContent]: true})}>
                    <h1 className={styles.topLine}>I&#39;m shy before I eat my lunch.</h1>
                    <LiveClock />
                    <p className={styles.bottomLine}>Can you come back past noon, <br className={styles.mobileBr}/><em className={styles.highlight}>after 3pm?</em></p>  
                </div>
            </div>
        </main>
      </>
    )
  };