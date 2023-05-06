import Head from 'next/head'
import Image from 'next/image'

import MainDivider from "../../public/main_divider.svg"
import TextDivider from "../../public/text_divider.svg"

import styles from '../styles/Day/Day.module.css'
import svg from '../styles/Day/SVG.module.css'
import pageSelector from '../scripts/pageSelector.js'

// const nice = pageSelector();
const mainDivider = () => <MainDivider />; 
const textDidiver = () => <TextDivider />;

import { Allura } from 'next/font/google'
const allura = Allura({
                subsets: ['latin'], 
                weight: ['400']
              })

export default function Desktop() {
  return (
    <>
      <Head>
        <title>Verdandi</title>
        <meta name="description" content="Personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.mainContainer}>
          <Image
            priority
            src="/extra_large.jpg"
            alt="cutlery"
            width={2400}
            height={1600}
            className={styles.cutlery}
          />
          <div className={`${allura.className} ${styles.text}`}>
            <div classname={svg.textDividers}>
              <TextDivider className={svg.textLine} />
              <TextDivider className={svg.textLine} />
            </div>
            <h1 className={styles.line1}>I&#39;m <em>shy</em> in the daytime.</h1>
            <p className={styles.line2}>M</p> 
            <p className={styles.line3}>Can we meet again at 6pm?</p>
          </div>
        </div>
        <div className={svg.dividerContainer}>
          <MainDivider className={svg.mainLine} />
        </div>
        <div className={styles.whiteContainer}>
          <div className={styles.whiteLeft}></div>
          <div className={styles.whiteRight}></div>
        </div>
      </main>
    </>
  )
}

// ok where would you add this script?

// find a way to fix position, consider the 1.5 ratio between height and width?
// ensure that the image is scaling
// For mobile site designs we run the redesigned version
// So a media query based on whats needed
// Two things to test, if you move then line drops
// Or if you move when the line is dropping
// A general line of text comes out of the line
// The rest is handwritten.
// I want to showcase three different of animations on the text for fun
// I want the smile animation on the smaller screen size
// a way to make it look like its not loading
// it has to feel smoother
// it doesnt have to be center but the image has to adjust in 
// so that it is always contrained behind that line

// like a beat of music the animation speed has to feel consistent
// interesting, downbeats have to come and match the pace 
// for the design to feel cohesive