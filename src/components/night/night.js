// Next.js
import Head from 'next/head';

// CSS
import NightGlobals from 'src/styles/night/night_globals.js';

// Page Components
import Scroll from 'src/components/night/scroll.js';
import NavMenu from 'src/components/night/nav_menu.js';
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

// can we remove the barrier break

// nav menu left line flicker

// Problem you don't see the second transition
// We should be able to stack these properly
// Scroll SVG should line up
// Go through sections and remove rags, windows, and orphans
// Start checking for responsive design sizes

// The swapping between day and night still can be cleaner

// Will need to double check fonts after responsiness is completed
// Reminder to be bold with your typing

// On Refresh go back to page start

// import { useEffect } from 'react';
// useEffect(() => {
    //     document.addEventListener('beforeunload', () => {window.scrollTo(0, 0);});
    // }, [])

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
            <NavMenu />
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