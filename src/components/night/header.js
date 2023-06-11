// Next.js
import { useState, useEffect } from 'react';

// CSS
import headerStyles from 'src/styles/night/Header.module.css';

// SVGs
import VerticalBreak from 'public/night/vertical_break.svg';

// External Libs
import { clsx } from 'clsx';

const verticalBreak = () => <VerticalBreak />;

// jumping to the scroll location
// what happens if you set the users scroll location?
// More dramatic effect
// Play with SVG line break size
// Add emphasis on hook

export default function Main() {
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
      const whiteSpace = document.querySelector('#float');
      const bgChange = document.querySelector('#bg-change');

      const preStart = 50;
      const whiteSpaceLoc = whiteSpace.getBoundingClientRect();

      const bgTransition = () => {
        if (whiteSpaceLoc.top - preStart <= window.scrollY) {
            setVisibility(true);
            bgChange.style.backgroundPosition = 'top';            
        } else {
            setVisibility(false);
            bgChange.style.backgroundPosition = 'bottom';
        }
      }

      document.addEventListener('scroll', bgTransition);
    }, [])

    return (
      <>
        <div id='float' className={clsx({
          [headerStyles.visibleFloat] : visible,
          [headerStyles.hideFloat] : !visible})}>
            <div id='bg-change' className={headerStyles.bgChange}>
                <div className={headerStyles.verticalContainer}>
                    <VerticalBreak className={clsx({
                      [headerStyles.verticalBreak] : true,
                      [headerStyles.animateBreak] : visible})} />
                </div>
            </div>
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