// Next.js
import Head from 'next/head';
import Link from 'next/link';
import { EB_Garamond, Lora } from 'next/font/google'

// CSS
import NightGlobals from '../styles/night/night_globals.js';
import nightStyles from '../styles/night/Night.module.css';
import scrollStyles from '../styles/night/Scroll.module.css';

// Components
import ScrollDraw from '../scripts/scroll_draw.js';
import BackgroundChange from '../scripts/background_change.js';
import NavMenu from '../components/nav_menu.js';
import ContactForm from '../components/contact_form.js';

// SVGs
import ScrollLine from '../../public/svgs/scroll_line.svg';
import LineBreak from '../../public/svgs/line_break.svg';
import Knob from '../../public/svgs/knob.svg';
import GitHubLogo from '../../public/svgs/github_logo.svg';

const scrollLine = () => <ScrollLine />;
const lineBreak = () => <LineBreak />;
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

// consider changing tagline
// have you ever conisdered an overall theme
// what is the sites narrative?
// Not a fan of the site delivery, feels to linear

// debate psudeo element vs full background change

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
            {/* <LiveClock className={scrollStyles.clock} /> */}
          </div>
          <div className={scrollStyles.scrollLineContainer}>
            <ScrollLine id='scroll-line' className={scrollStyles.scrollLine} />
          </div>
          <div id='bg-changer' className={nightStyles.bgChanger}></div>
        </section>
        <main className={ebGaramond.className}>
          <NavMenu />
          <header className={nightStyles.hookContainer}>
            <h1 className={nightStyles.hookLine}>
              Because boring ideas<br></br>make boring&nbsp;<em>products</em>
            </h1>
          </header>
          <div>
            {/* Moon SVG */}
            {/* Moutains SVG */}
          </div>
        </main>
        <section id='skills' className={`${ebGaramond.className} ${nightStyles.about}`}>
          <h2>Who Am I?</h2>
        </section>
        <section id='experience' className={`${ebGaramond.className} ${nightStyles.work}`}>
          <h2>Recent Work</h2>
        </section>
        <section id='projects' className={`${ebGaramond.className} ${nightStyles.project}`}>
          <h2>Current Project</h2>
          <div className={nightStyles.flowContainer}>
            <h3 className={nightStyles.flowTitle}>Flow - Electronic Data Capture System</h3>
            <p className={`${lora.className} ${nightStyles.flowDescription}`}>
              Backend in Rust , Diesel, and PostgreSQL. Flow is expected to be the <em>fastest</em> and most <em>secure</em> EDC on the market. 
              Aimed for small to medium sized human clinical trials along with an aggressive pricing strategy and a user 
              experience focused design philosophy. Flow will completely change the way EDCs are used.
            </p>
          </div>
        </section>
        <LineBreak className={nightStyles.lineBreak} />
        <section id='contact' className={nightStyles.contact}>
          <h4 className={nightStyles.contactHeader}>
            Together,<br></br>let&#39;s build something different
          </h4>
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