// Next.js
import { useState, useEffect } from 'react';

// CSS
import headerStyles from 'src/styles/night/Header.module.css';

// SVGs
import TransitionLine from 'public/night/transition_line.svg';

// External Libs
import { clsx } from 'clsx';

const transitionLine = () => <TransitionLine />;

// Slow down heavy with night bg
// delay
// Fast up with day bg
// Fast down light with night bg

// Not turning back when you scroll up

export default function Main() {
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
      const whiteSpace = document.querySelector('#float');
      const bgChange1 = document.querySelector('#bg-change-1');
      const bgChange2 = document.querySelector('#bg-change-2');
      const bgChange3 = document.querySelector('#bg-change-3');
  
      const preStart = 50;
      const whiteSpaceLoc = whiteSpace.getBoundingClientRect();

      const bgTransition = () => {
        if (whiteSpaceLoc.top - preStart <= window.scrollY) {
            setVisibility(true);
            bgChange1.style.backgroundPosition = 'top';   
            bgChange2.style.backgroundPosition = 'bottom';    
            bgChange3.style.backgroundPosition = 'top';           
        } else {
            setVisibility(false);
            bgChange3.style.backgroundPosition = 'bottom';
            bgChange2.style.backgroundPosition = 'top';
            bgChange1.style.backgroundPosition = 'bottom';
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
                    <TransitionLine className={clsx({
                      [headerStyles.transitionLine] : true,
                      [headerStyles.animateLine] : visible})} />
                </div>
            </div>
            <div id='bg-change-2' className={clsx({
              [headerStyles.bgChange2] : true,
              [headerStyles.bgChange2Show] : visible,
              [headerStyles.bgChange2Hidden] : !visible})}></div>
            <div id='bg-change-3' className={clsx({
              [headerStyles.bgChange3] : true,
              [headerStyles.bgChange3Show] : visible,
              [headerStyles.bgChange3Hidden] : !visible})}></div>
        </div>
        <div className={clsx({
          [headerStyles.hookContainer] : true,
          [headerStyles.showContainer] : visible, 
          [headerStyles.hideContainer] :!visible})}>
          <h1 id='hook' className={clsx({
            [headerStyles.hook] : true,
            [headerStyles.hideHook] : !visible})}>
              Because boring ideas<br></br>make boring&nbsp;<em>products</em>
          </h1>
        </div>
      </>
    )   
}