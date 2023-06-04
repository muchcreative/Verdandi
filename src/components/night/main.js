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

// think of a clean way to implement this
// right you want no white space

// you need 100vh
// can you prevent overflow so as to not see it
// then entire site scroll bar allows
// make them sibilings because they all happen at once
// so the entire html should change colors
// or make it a large space

// i can change single styles
// but you can also apply a mass style

export default function Main() {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
      const bgChangeOnScroll = () => {
          if (elementLoc.top - headStart <= window.scrollY) {
              bgChanger.style.backgroundPosition = 'top';
              // I think you should add a timeout
              // let the line draw, then set all visbilities

              setHidden(false);
          } else {
              bgChanger.style.backgroundPosition = 'bottom';
          }
      }

      const headStart = 200;
      const bgChanger = document.querySelector('#hook-container');
      const elementLoc = bgChanger.getBoundingClientRect();
      document.addEventListener("scroll", bgChangeOnScroll);
    }, [])

    return (
      <>
        <header id='hook-container' className={mainStyles.hookContainer}>
            <div className={mainStyles.verticalContainer}>
                <VerticalBreak className={clsx({
                  [mainStyles.verticalBreak] : true,
                  [mainStyles.animateBreak] : hidden})} />
            </div>
            <h1 className={clsx({
              [mainStyles.hook] : true,
              [mainStyles.hookHidden] : hidden})}>
                Because boring ideas<br></br>make boring&nbsp;<em>products</em>
            </h1>
        </header>
        <div className={clsx({
              [mainStyles.art] : true,
              [mainStyles.artHidden] : hidden})}>
            <Moon className={mainStyles.moon}/>
            <Mountains className={mainStyles.mountains} />
        </div>
      </>
    )   
}