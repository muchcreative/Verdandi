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
                    weight: ['400']
                  });
const lora = Lora({
              subsets: ['latin'], 
              weight: ['400']
            });

// Use of underlines and blue special coloring feels inconsistent
// Experience
// Looks too much like a url

// Read More Title
// Looks like an outbound link if it is underlined

// More
// Should look clickable
// SVG line can move like a worm

// Skills and Experience
// Typograpghy changes
// Spacing and Font sizing

// SVG Changes
// Scroll Line must end in center of screen, make it so that at 
// 1920 x 1080 it is fine
// if the width of the screen is larger you shuld take the inner width
// and adjust the width of the svg approriately
// so we can add text or a motif

// Header and Contact Today
// Make the enterance more dramatic

// Experiences Section
// Try better spacing requriements between the experiences
// the addOn descriptions don't feel that great

// Can try font
// BrandonGrotesque-Regular

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
        <div className={lora.className} style={{'backgroundColor': 'var(--day-bg-color)'}}>
            <NavMenu />
        </div>
        <header className={ebGaramond.className} style={{'backgroundColor': 'var(--day-bg-color)'}}>
            <Header />
        </header>
        <main id='experience' className={ebGaramond.className}>
            <Experience />
        </main>
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