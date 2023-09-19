// Next.js
import Head from 'next/head';

// CSS
import NightGlobals from 'src/styles/night/night_globals.js';
import { ebGaramond } from 'src/styles/fonts.js';

// Page Components
import Scroll from 'src/components/night/scroll.js';
import Nav from 'src/components/night/nav.js';
import Header from 'src/components/night/header.js';
import Experience from 'src/components/night/experience.js';
import Skills from 'src/components/night/skills.js';
import More from 'src/components/night/more.js';
import Contact from 'src/components/night/contact.js';

export default function Night() { 
    return (
      <>
        <Head>
            <title>Verdandi | In-Office</title>
            <meta name='description' content='Personal website' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' href='/favicons/night_tree.ico' />  
        </Head>
        <NightGlobals />
        <Nav />
        <section id='beginning' className={ebGaramond.className}>
            <Scroll />
        </section>
        <main>  
            <header className={ebGaramond.className}>
                <Header />
            </header>
            <section id='skills' className={ebGaramond.className}>
                <Skills />
            </section>
            <section id='experience' className={ebGaramond.className} >
                <Experience />
            </section>
            <section id='more' className={ebGaramond.className}>
                <More />
            </section>
            <section id='contact'>
                <Contact />
            </section>
        </main>
      </>
    )
}