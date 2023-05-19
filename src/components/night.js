import Head from 'next/head';
import { EB_Garamond, Lora } from 'next/font/google'

import NightGlobals from '../components/night_globals.js';
import nightStyles from '../styles/night/Night.module.css';

import ScrollLine from "../../public/svgs/scroll_line.svg";
import ScrollDraw from "../scripts/scroll_draw.js";
import ContactForm from "../components/contact_form";

const nightGlobals = () => <NightGlobals />;
const scrollLine = () => <ScrollLine />;
const scrollDraw = () => <ScrollDraw />; 
const contactForm = () => <ContactForm />; 

const ebGaramond = EB_Garamond({
                    subsets: ['latin'], 
                    weight: ['400']
                  });
const lora = Lora({
              subsets: ['latin'], 
              weight: ['400']
            });

export default function Night() {
    return (
      <>
        <Head>
          <title>Verdandi | Night</title>
          <meta name="description" content="Personal website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicons/tree.jpg" />  
        </Head>
        <NightGlobals />
        {/* <ScrollDraw /> */}
        {/* <section className={nightStyles.scrollSection}>
          <div className={nightStyles.scrollLineContainer}>
            <ScrollLine id="scroll-line" className={nightStyles.scrollLine}/>
          </div>
        </section> */}
        <main className={ebGaramond.className}>
          <header className={nightStyles.hookContainer}>
            <h1 className={nightStyles.hookLine}>
              Because boring ideas<br></br>make boring&nbsp;<em className={nightStyles.underline}>products</em>
            </h1>
          </header>
          <div>
            {/* Moon SVG */}
            {/* Moutains SVG */}
          </div>
        </main>
        <section className={`${lora.className} ${nightStyles.about}`}>
          <h2>Who Am I?</h2>
        </section>
        <section className={`${lora.className} ${nightStyles.work}`}>
          <h2>Recent Work</h2>
        </section>
        <section classnName={`${lora.className} ${nightStyles.project}`}>
          <h2>Current Project</h2>
        </section>
        <section className={nightStyles.contact}>
          <h3 className={nightStyles.contactHeader}>
            Together,<br></br>let&#39;s build something different
          </h3>
          <ContactForm />
        </section>
        <footer>
          {/*LinkedIn + Github*/}
        </footer>
      </>
    )
}

// Scroll Section Design Ideas:
// - Tell others to scroll here
// - Down arrows pointing down
// - Add clock to add suspicion instead of just an empty screen
// - Add night indicator for the website
// - Add overhang or some part of the SVG
// - Have to compensate for auto-scroll

// Font color might be little too white

// works at different zooms... there must a media query you can add to fix this that includes diff offsets.
// Try Lora Vs Times New Roman Complimenting font.