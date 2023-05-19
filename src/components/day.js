import Head from 'next/head';
import Image from 'next/image';
import { Allura } from 'next/font/google'

import LiveClock from './live_clock.js';
import MainDivider from "../../public/svgs/main_divider.svg";
import TextDivider from "../../public/svgs/text_divider.svg";

import styles from '../styles/Day/Day.module.css';
import svg from '../styles/Day/SVG.module.css';

const liveClock = () => <LiveClock />;
const mainDivider = () => <MainDivider />; 
const textDidiver = () => <TextDivider />;

const allura = Allura({
                subsets: ['latin'], 
                weight: ['400']
              });

// can we remove the client error?
// clamp for responsive design here?

export default function Day() {
    return (
      <>
        <Head>
          <title>Verdandi</title>
          <meta name="description" content="Personal website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicons/ps_tree.png" />
        </Head>
        <main>
          <div className={styles.content}>
            <Image
              priority
              src="/images/large.jpg"
              alt="cutlery"
              width={2400}
              height={1600}
              className={styles.cutlery}
            />
            <div className={`${allura.className} ${styles.rightContent}`}>
              <h1 className={styles.line1}>I&#39;m shy in the daytime.</h1>
              <TextDivider className={`${svg.textDivider} ${svg.topTextDivider}`} />
              <LiveClock />
              <TextDivider className={`${svg.textDivider} ${svg.botTextDivider}`} />
              <p className={styles.line2}>Can we meet again from 6pm to 6am?</p>
            </div>
          </div>
          <div className={svg.mainDividerContainer}>
            <MainDivider className={svg.mainDivider} />
          </div>
          <div className={styles.whiteContainer}>
            <div className={styles.whiteLeft}></div>
            <div className={styles.whiteRight}></div>
          </div>
        </main>
      </>
    )
  };