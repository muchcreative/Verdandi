// Next.js
import { useState, useEffect } from 'react';

// CSS
import headerStyles from 'src/styles/night/Header.module.css';

// SVGs
import TransLine from 'public/night/trans_line.svg';

// External Libs
import { clsx } from 'clsx';

const transLine = () => <TransLine />;

export default function Header() {
    /*  
    Component controls the background transitions and animations
    when you scroll to the end of the scroll line. Note the '#header' 
    div controls the starting and final background color
    The animations are as follows when you scroll to the 
    header section:

    1. setVisbility(true)
      - A fixed overlying div with class '.animations' becomes visible
      - Animations are then triggered for their respective classes
    2. Transition line will draw itself in
    3. A sequence of background changes closely follow the transition 
       line as a moving background image
    4. The '.animations' div then sets "visiblity: hidden"
       to reveal the actual header that has been faded in 
       with the new background color.
    */

    const [visible, setVisibility] = useState(false);

    useEffect(() => {
      // Sets transition line starting position to match end position of scroll line
      const root = document.querySelector(':root');
      const svgElement = document.querySelector('#desk-line');
      root.style.setProperty('--trans-line-pos', svgElement.getBoundingClientRect().right + 'px');
    }, [])

    useEffect(() => {
      const preStart = 50;
      const afterEnd = 50;

      const content = document.querySelector('#header-content');
      const contentLoc = content.getBoundingClientRect();
      
      const bgTransition = () => {
        // Scroll in range of the animation and scroll needs to freeze for the animation
        if (window.scrollY >= contentLoc.top - preStart) {
            setVisibility(true);

            // Freeze user's scroll location for 1-2 seconds so they don't continue scrolling down
            window.onscroll = function() {
              window.scrollTo(0, contentLoc.top);
            };

            setTimeout(() => {
              window.onscroll = function() {};
            }, 1600);

            document.removeEventListener('scroll', bgTransition);
            
        } else if (window.scrollY >= contentLoc.bottom + afterEnd) {
            // Scroll out of range of animation and scroll should not freeze for the animation  
            setVisibility(true);
            document.removeEventListener('scroll', bgTransition);
        }
      }
    document.addEventListener('scroll', bgTransition);  
    }, [])

    return (
      <>
        {/* Animations, TransLine Draw-In + BG Changes */}
        <div className={clsx({
          [headerStyles.animations]: true,
          [headerStyles.animateContainer]: visible})}>
            <TransLine className={clsx({
              [headerStyles.transLine] : true,
              [headerStyles.animateLine] : visible})} />
        </div>

        {/* Header Apperance */}
        <div id='header-content' className={clsx({
          [headerStyles.hookContainer] : true,
          [headerStyles.showHookContainer] : visible})}>
          <h1 className={clsx({
            [headerStyles.hook] : true,
            [headerStyles.showHook] : visible})}>
              Because <br className={headerStyles.mobileBr}></br>
              nobody <br className={headerStyles.mobileBr}></br>
              <br className={headerStyles.tabletBr}></br>
              wants to <br className={headerStyles.mobileBr}></br>
              <br className={headerStyles.deskBr}></br>
              create <br className={headerStyles.tabletBr}></br>
              the <br className={headerStyles.mobileBr}></br>
              same two <br className={headerStyles.mobileBr}></br>
              <br className={headerStyles.tabletBr}></br>
              <br className={headerStyles.deskBr}></br>
              <em className={headerStyles.hookHighlight}>products.</em>
          </h1>
        </div>
      </>    
    )   
}