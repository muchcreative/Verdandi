// Next.js
import { useState, useEffect } from 'react';

// CSS
import mainStyles from 'src/styles/night/Main.module.css';

// SVGs
import VerticalBreak from 'public/night/vertical_break.svg';
import Moon from 'public/night/moon.svg'
import Mountains from 'public/night/mountains.svg'

// External Libs
import { clsx } from 'clsx';

const verticalBreak = () => <VerticalBreak />;
const moon = () => <Moon />;
const mountains = () => <Mountains />;

// scroll part needs to be centered
// Remove white space
// Allow for back and forth transitions
// add a transition to the products to delay it

// you need 100vh
// can you prevent overflow so as to not see it
// then entire site scroll bar allows
// make them sibilings because they all happen at once
// so the entire html should change colors
// or make it a large space

// i can change single styles
// the dark part has to cover the entire screen 
// but you can also apply a mass style

// you should probably put both the moon and mountain together
// with the stars
// is everything loading at the same time?

export default function Main() {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
      const bgChangeOnScroll = () => {
          if (elementLoc.top - headStart <= window.scrollY) {
              bgChanger.style.backgroundPosition = 'top';
              setHidden(false);
          } else {
              bgChanger.style.backgroundPosition = 'bottom';
              setHidden(true);
          }
      }

      const headStart = 200;
      const bgChanger = document.querySelector('#hook-container');
      const elementLoc = bgChanger.getBoundingClientRect();
      document.addEventListener("scroll", bgChangeOnScroll);
    }, [])

    return (
      <>
        <div>
          <div className={mainStyles.verticalContainer}>
              <VerticalBreak className={clsx({
                [mainStyles.verticalBreak] : true,
                [mainStyles.animateBreak] : !hidden})} />
          </div>
          <header id='hook-container' className={mainStyles.hookContainer}>
              <h1 className={clsx({
                [mainStyles.hook] : true,
                [mainStyles.hookHidden] : hidden})}>
                  Because boring ideas<br></br>make boring&nbsp;<em>products</em>
              </h1>
          </header>
        </div>
        <h2 className={mainStyles.expHeader}>Experience</h2>
        <div className={mainStyles.art}>
            <Moon className={mainStyles.moon}/>
            <Mountains className={mainStyles.mountains} />
        </div>
      </>
    )   
}