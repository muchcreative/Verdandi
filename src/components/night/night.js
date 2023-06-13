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


// SVG Changes
// Clump moon and mountain svg with stars svg and <g> element
// Put gap in motif to exaggerate rotation

// Header Section
// Fixed div + fixed scroll position at end so they also end up
// at location
// Try additional spacing between the experiences

// Experience Section
// - Fade out on click and compress
// - And appropriate setting for initial opening

// More Section
// - Larger description div to expand
// - SVG line animation if possible, can use workaround temprorily if needed

// Contact Section
// - Adjust form height
// - Send message to email

// Overall 
// - Font sizing can be more consistent
// - Make buttons look more clickable
// - Consider better font mixups
// - Clean up event listeners after you are done with them

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

// Adding stagnation between the explanations 
// Along with pictures will definetly help


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