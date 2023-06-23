// Next.js
import Head from 'next/head';
import { EB_Garamond, Lora } from 'next/font/google'

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

const ebGaramond = EB_Garamond({
                    subsets: ['latin'], 
                    weight: ['400', '500', '600', '700', '800'],
                    style: ['normal', 'italic'],
                  });

// How to remove the refresh animation
// prevent issues when someone edges up and down through the header

// Justify left
// One font only
// skip a font weight
// Double point sizes

// Themes and elements should feel shared between sections
// No cohesion between sections

// More section feels damp
// Soft transition between more and experience

// More Section
// Draw both vertical and horizontal line

// Experience
// Typograpghy changes
// Spacing and Font sizing
// Try better spacing requriements between the experiences
// the addOn descriptions don't feel that great

// Add smile animation on send
// Consider observer animations on the underlines for the titles
// And the products hook

export default function Night() {
    return (
      <>
        <Head>
            <title>Verdandi</title>
            <meta name='description' content='Personal website' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' href='/favicons/night_tree.png' />  
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
        <section id='skills' className={ebGaramond.className}>
            <Skills />
        </section>
        <main id='experience' className={ebGaramond.className}>
            <Experience />
        </main>
        <section id='more' className={ebGaramond.className}>
            <More />
        </section>
        <section id='contact'>
            <Contact />
        </section>
      </>
    )
}