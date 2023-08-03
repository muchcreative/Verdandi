// Next.js
import Head from 'next/head';

// CSS
import NightGlobals from 'src/styles/night/night_globals.js';

// Page Components
import Scroll from 'src/components/night/scroll.js';
import Nav from 'src/components/night/nav.js';
import Header from 'src/components/night/header.js';
import Experience from 'src/components/night/experience.js';
import Skills from 'src/components/night/skills.js';
import More from 'src/components/night/more.js';
import Contact from 'src/components/night/contact.js';

// Fonts
import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

export default function Night() { 
    return (
      <>
        <Head>
            <title>Verdandi</title>
            <meta name='description' content='Personal website' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' href='/favicons/night_tree.ico' />  
        </Head>
        <NightGlobals />
        <section id='beginning' className={ebGaramond.className} style={{'backgroundColor': 'var(--day-bg-color)'}}>
            <Scroll />
        </section>
        <div className={ebGaramond.className} style={{'backgroundColor': 'var(--day-bg-color)'}}>
            <Nav />
        </div>
        <header className={ebGaramond.className} style={{'backgroundColor': 'var(--day-bg-color)'}}>
            <Header />
        </header>
        <section className={ebGaramond.className} id='skills'>
            <Skills />
        </section>
        <main className={ebGaramond.className} id='experience'>
            <Experience />
        </main>
        <section className={ebGaramond.className} id='more'>
            <More />
        </section>
        <section id='contact'>
            <Contact />
        </section>
      </>
    )
}