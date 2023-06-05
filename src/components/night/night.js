// Next.js
import Head from 'next/head';
import { EB_Garamond, Lora } from 'next/font/google'

// CSS
import NightGlobals from 'src/styles/night/night_globals.js';

// Page Components
import Scroll from 'src/components/night/scroll.js';
import NavMenu from 'src/components/night/nav_menu.js';
import Main from 'src/components/night/main.js';
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

// timings on those animations can be fixed up
// Should be starting responsive design this week

// Feels like something is missing, would be good to ask
// for an opinion
// maybe not enough divison? Some of the spaces  feel to open
// font sizing can be more consistent
// on a black background might be punished for it.
// ok lets do the re-design of the main now

// right now feels like too much text
// can you adjust spacing
// use bullet points
// fill space

export default function Night() {
    return (
      <>
        <Head>
            <title>Verdandi | Night</title>
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