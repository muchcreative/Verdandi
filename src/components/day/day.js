// Next.js
import Head from 'next/head';
import Image from 'next/image';
import { Allura } from 'next/font/google'

// CSS
import styles from 'src/styles/day/Day.module.css';
import svgStyles from 'src/styles/day/SVG.module.css';

// Components
import dynamic from 'next/dynamic';
const LiveClock = dynamic(() => import('src/components/day/live_clock.js'), {ssr: false});

// SVGs
import MainDivider from 'public/day/main_divider.svg';

const mainDivider = () => <MainDivider />; 

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
        <main>
          <div className={styles.content}>
            <Image
              priority
              src='/day/cutlery.jpg'
              alt='cutlery'
              width={2400}
              height={1600}
              className={styles.cutlery}
            />
            <div className={`${allura.className} ${styles.rightContent}`}>
              <h1 className={styles.line1}>I&#39;m shy before I eat my lunch.</h1>
              <hr className={`${styles.textDivider} ${styles.topTextDivider}`} />
              <LiveClock />
              <hr className={`${styles.textDivider} ${styles.botTextDivider}`} />
              <p className={styles.line2}>Can you come back past noon, <br className={styles.mobileBr}></br><em className={styles.highlight}>after 3pm?</em></p>
            </div>
          </div>
          <div className={svgStyles.mainDividerContainer}>
            <hr className={svgStyles.mobileDivider}></hr>
            <MainDivider className={svgStyles.deskDivider} />
          </div>
          <div className={styles.whiteContainer}>
            <div className={styles.firstWhite}></div>
            <div className={styles.secondWhite}></div>
          </div>
        </main>
      </>
    )
  };