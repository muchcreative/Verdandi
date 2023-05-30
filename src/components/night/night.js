// Next.js
import Head from 'next/head';
import Link from 'next/link';
import { EB_Garamond, Lora } from 'next/font/google'

// CSS
import NightGlobals from 'src/styles/night/night_globals.js';
import nightStyles from 'src/styles/night/Night.module.css';
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
import ContactForm from 'src/components/night/contact_form.js';

// SVGs
import ScrollLine from 'public/night/scroll_line.svg';
import HorizontalBreak from 'public/night/horizontal_break.svg';
import Knob from 'public/night/knob.svg';
import GitHubLogo from 'public/night/github_logo.svg';

const scrollLine = () => <ScrollLine />;
const horiztonalBreak = () => <HorizontalBreak />;
const knob = () => <Knob />; // Go for a different unique object instead
const githubLogo = () => <GitHubLogo />;

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
        <ScrollDraw />
        <BackgroundChange />
        <section id='beginning' className={scrollStyles.scrollSection}>
            <div className={`${ebGaramond.className} ${scrollStyles.scrollText}`}>
                <h1>Night</h1>
                <p>6pm - 6am</p>
            </div>
            <div className={scrollStyles.scrollLineContainer}>
                <ScrollLine id='scroll-line' className={scrollStyles.scrollLine} />
            </div>
            <div id='bg-changer' className={nightStyles.bgChanger}></div>
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
        <HorizontalBreak className={nightStyles.horizontalBreak} />
        <section id='contact'>
            <h6>
                Together,<br></br>let&#39;s build something different
            </h6>
            <ContactForm />
        </section>
        <footer>
            <div className={nightStyles.logos}>
              <Link href='https://www.linkedin.com/in/robby-lem-14ab97158/'>
                  <p className={nightStyles.linkedinText}>in</p>
              </Link>
              <Link href='https://github.com/muchcreative'>
                  <GitHubLogo className={nightStyles.githubLogo}/>
              </Link>
            </div>
        </footer>
      </>
    )
}