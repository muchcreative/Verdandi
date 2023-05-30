// Next.js
import Head from 'next/head';
import { EB_Garamond, Lora } from 'next/font/google'

// CSS
import NightGlobals from 'src/styles/night/night_globals.js';
import scrollStyles from 'src/styles/night/Scroll.module.css';

// Scripts
import ScrollDraw from 'src/scripts/night/scroll_draw.js';
import BackgroundChange from 'src/scripts/night/background_change.js';

// Page Components
import NavMenu from 'src/components/night/nav_menu.js';
import Main from 'src/components/night/main.js';
import Experience from 'src/components/night/experience.js';
import Skills from 'src/components/night/skills.js';
import More from 'src/components/night/more.js';
import Contact from 'src/components/night/contact.js';

// SVGs
import ScrollLine from 'public/night/scroll_line.svg';
import Knob from 'public/night/knob.svg';

const scrollLine = () => <ScrollLine />;
const knob = () => <Knob />;

const ebGaramond = EB_Garamond({
                    subsets: ['latin'], 
                    weight: ['400']
                  });
const lora = Lora({
              subsets: ['latin'], 
              weight: ['400']
            });

// Add more spacing. Experience section feels a little cramped
// debate psudeo element vs full background change
// Remove forced heights on sections let it be auto sized is
// probably more accurate
// Go for a different unique object instead
// still deciding on fonts
// the chagning background seems kinda lame, you might
// need to tie in other changes with it

// change moon to full svg..
// change lines to be fuller for the horizontal breaks
// Adjust PI title to fit in one line

// Add stars to mountains and appropriate effects

export default function Night() {
    return (
      <>
        <Head>
          <title>Verdandi | Night</title>
          <meta name='description' content='Personal website' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicons/tree.jpg' />  
        </Head>
        <NightGlobals />
        <section id='beginning' className={scrollStyles.scrollSection}>
            <ScrollDraw />
            <BackgroundChange />
            <div className={scrollStyles.scrollLineContainer}>
                <ScrollLine id='scroll-line' className={scrollStyles.scrollLine} />
            </div>
            <div className={`${ebGaramond.className} ${scrollStyles.scrollText}`}>
                <h1>Night</h1>
                <p>6pm - 6am</p>
            </div>
            <div id='bg-changer' className={scrollStyles.bgChanger}></div>
        </section>
        <NavMenu />
        <main className={ebGaramond.className}>
            <Main />
        </main>
        <section id='experience' className={ebGaramond.className}>
            <Experience />
        </section>
        <section id='skills' className={ebGaramond.className}>
            <Skills />
        </section>
        <section id='more' className={ebGaramond.className}>
            <More />
        </section>
        <section id='contact'>
           <Contact />
        </section>
      </>
    )
}