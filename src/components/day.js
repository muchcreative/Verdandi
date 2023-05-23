// Next.js
import Head from 'next/head';
import Image from 'next/image';
import { Allura } from 'next/font/google'

// CSS
import styles from '../styles/Day/Day.module.css';
import svgStyles from '../styles/Day/SVG.module.css';

// Components
import dynamic from 'next/dynamic';
const LiveClock = dynamic(() => import('../components/live_clock.js'), {ssr: false});

// SVGs
import MainDivider from '../../public/svgs/main_divider.svg';
import TextDivider from '../../public/svgs/text_divider.svg';

const mainDivider = () => <MainDivider />; 
const textDidiver = () => <TextDivider />;

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
          <link rel='icon' href='/favicons/ps_tree.png' />
        </Head>
        <main>
          <div className={styles.content}>
            <Image
              priority
              src='/images/large.jpg'
              alt='cutlery'
              width={2400}
              height={1600}
              className={styles.cutlery}
            />
            <div className={`${allura.className} ${styles.rightContent}`}>
              <h1 className={styles.line1}>I&#39;m shy in the daytime.</h1>
              <TextDivider className={`${svgStyles.textDivider} ${svgStyles.topTextDivider}`} />
              <LiveClock />
              <TextDivider className={`${svgStyles.textDivider} ${svgStyles.botTextDivider}`} />
              <p className={styles.line2}>Can we meet again from 6pm to 6am?</p>
            </div>
          </div>
          <div className={svgStyles.mainDividerContainer}>
            <MainDivider className={svgStyles.mainDivider} />
          </div>
          <div className={styles.whiteContainer}>
            <div className={styles.whiteLeft}></div>
            <div className={styles.whiteRight}></div>
          </div>
        </main>
      </>
    )
  };