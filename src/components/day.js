import Head from 'next/head';
import Image from 'next/image';

import Clock from '../components/clock.js';
import MainDivider from "../../public/svgs/main_divider.svg";
import TextDivider from "../../public/svgs/text_divider.svg";

import styles from '../styles/Day/Day.module.css';
import svg from '../styles/Day/SVG.module.css';

const clock = () => <Clock />;
const mainDivider = () => <MainDivider />; 
const textDidiver = () => <TextDivider />;

import { Allura } from 'next/font/google'
const allura = Allura({
                subsets: ['latin'], 
                weight: ['400']
              });

export default function Day() {
    return (
      <>
        <Head>
          <title>Verdandi</title>
          <meta name="description" content="Personal website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicons/tree.jpg" />
        </Head>
        <main>
          <div className={styles.mainContainer}>
            <Image
              priority
              src="/images/extra_large.jpg"
              alt="cutlery"
              width={2400}
              height={1600}
              className={styles.cutlery}
            />
            <div className={`${allura.className} ${styles.text}`}>
              <h1 className={styles.line1}>I&#39;m <em>shy</em> in the daytime.</h1>
              <p className={styles.line2}>Can we meet again past 6pm?</p>
              <TextDivider className={svg.textDivider} />
              <TextDivider className={svg.textDivider} />
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