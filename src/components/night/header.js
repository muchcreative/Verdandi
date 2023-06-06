// Next.js
import { useState, useEffect } from 'react';

// CSS
import headerStyles from 'src/styles/night/Header.module.css';

// SVGs
import VerticalBreak from 'public/night/vertical_break.svg';

// External Libs
import { clsx } from 'clsx';

const verticalBreak = () => <VerticalBreak />;

// Allow for back and forth transitions
// Add a transition to the products to delay it from showing up so fast?
// Dark part must cover full screen
// Moon, mountain, and stars together. Each star to have own grouping

export default function Main() {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
      const bgChangeOnScroll = () => {
          if (bgChangeLoc.top - preStart <= window.scrollY) {
              setTimeout(() => {
                bgChange.style.backgroundPosition = 'top';
                setHidden(false);
              }, 200);
          } else {
              bgChange.style.backgroundPosition = 'bottom';
              setHidden(true);
          }
      }

      const preStart = 50;
      const bgChange = document.querySelector('#bg-change');
      const bgChangeLoc = bgChange.getBoundingClientRect();
      document.addEventListener("scroll", bgChangeOnScroll);
    }, [])

    return (
      <>
        <div id='bg-change' className={headerStyles.bgChange}>
            <h1 className={clsx({
              [headerStyles.hook] : true,
              [headerStyles.hookHidden] : hidden})}>
                Because boring ideas<br></br>make boring&nbsp;<em>products</em>
            </h1>
            <div className={headerStyles.verticalContainer}>
                <VerticalBreak className={clsx({
                  [headerStyles.verticalBreak] : true,
                  [headerStyles.animateBreak] : !hidden})} />
            </div>
        </div>
      </>
    )   
}