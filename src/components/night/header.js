// Next.js
import { useState, useEffect } from 'react';

// CSS
import headerStyles from 'src/styles/night/Header.module.css';

// SVGs
import TransLine from 'public/night/trans_line.svg';

// External Libs
import { clsx } from 'clsx';

const transLine = () => <TransLine />;

export default function Main() {
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
      // Set transition line position
      const root = document.querySelector(':root');
      const svgElement = document.querySelector('#desk-line');
      root.style.setProperty('--trans-line-pos', svgElement.getBoundingClientRect().right + 'px');
    }, [])

    useEffect(() => {
      const whiteSpace = document.querySelector('#float');
      const bgChange1 = document.querySelector('#bg-change-1');
      const bgChange2 = document.querySelector('#bg-change-2');
      const bgChange3 = document.querySelector('#bg-change-3');
  
      const preStart = 50;
      const afterEnd = 50;
      const whiteSpaceLoc = whiteSpace.getBoundingClientRect();

      const bgTransition = () => {
        // Scroll in range of the animation and scroll needs to freeze for the animation
        if (whiteSpaceLoc.top - preStart <= window.scrollY && window.scrollY <= whiteSpaceLoc.bottom + afterEnd) {
            setVisibility(true);
            bgChange1.style.backgroundPosition = 'top';   
            bgChange2.style.backgroundPosition = 'bottom';    
            bgChange3.style.backgroundPosition = 'top';

            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

            if (screen.width >= 1000) {
              window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop + 150);
              };
            } else {
              window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop + 60);
              };
            }

            setTimeout(() => {
              window.onscroll = function() {};
            }, 1600);
            
            document.removeEventListener('scroll', bgTransition);

        // Scroll out of range of animation and scroll should not freeze for the animation
        } else if (window.scrollY >= whiteSpaceLoc.bottom + afterEnd) {
            setVisibility(true);
            bgChange1.style.backgroundPosition = 'top';   
            bgChange2.style.backgroundPosition = 'bottom';    
            bgChange3.style.backgroundPosition = 'top';

        // At beginning of page, nothing happens
        } else {
            bgChange3.style.backgroundPosition = 'bottom';
            bgChange2.style.backgroundPosition = 'top';
            bgChange1.style.backgroundPosition = 'bottom';
            setVisibility(false);
        }
      }

      document.addEventListener('scroll', bgTransition);
    }, [])

    return (
      <>
        <div id='float' className={clsx({
          [headerStyles.visibleFloat] : visible,
          [headerStyles.hideFloat] : !visible})}>
            <div id='bg-change-1' className={headerStyles.bgChange1}>
                <div className={headerStyles.verticalContainer}>
                    <TransLine className={clsx({
                      [headerStyles.transitionLine] : true,
                      [headerStyles.animateLine] : visible})} />
                </div>
            </div>
            <div id='bg-change-2' className={clsx({
              [headerStyles.bgChange2] : true,
              [headerStyles.bg2Visible] : visible})}></div>
            <div id='bg-change-3' className={clsx({
              [headerStyles.bgChange3] : true,
              [headerStyles.bg3Visible] : visible})}></div>
        </div>
        <div className={clsx({
          [headerStyles.hookContainer] : true,
          [headerStyles.showContainer] : visible, 
          [headerStyles.hideContainer] :!visible})}>
          <h1 id='hook' className={clsx({
            [headerStyles.hook] : true,
            [headerStyles.hideHook] : !visible})}>
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
              <em className={headerStyles.hookKey}>products.</em>
          </h1>
        </div>
      </>    
    )   
}