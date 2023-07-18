// Next.js
import { useState, useEffect } from 'react';

// CSS
import scrollStyles from 'src/styles/night/Scroll.module.css';

// SVGs
import MobileLine from 'public/night/scroll_line_mobile.svg';
import DeskLine from 'public/night/scroll_line_desk.svg';
import DownArrow from 'public/night/down_arrow.svg';

// External Libs
import { clsx } from 'clsx';

const mobileLine = () => <MobileLine />;
const desskLine = () => <DeskLine />;
const downArrow = () => <DownArrow />;

// ok so this idea doesn't work
// plus there is still space excess right side
// good try

// consider removing eventlistener after completed
// I think if it has a design it should be fine

export default function Scroll() {
    const [scrolled, setScrolled]= useState(false)

    // Handles down arrow fade in and fade out
    useEffect(() => {
      const fadeOutMarker = () => {
        if (window.scrollY === 0) {
          setScrolled(false);          
        } else {
          setScrolled(true);
        }
      }
      document.addEventListener('scroll', fadeOutMarker);
    }, [])

    // Draw SVG on scroll
    useEffect(() => {
        const drawOnScroll = () => {
          const scrollPercent = (window.scrollY + document.documentElement.scrollTop) 
            / (3800 - document.documentElement.clientHeight);

          const draw = length * scrollPercent;
          svgElement.style.strokeDashoffset = length - draw;
        }

        const headStart = 400;
        if (screen.width <= 1366) {
            var svgElement = document.querySelector('#mobile-line');
        } else {
            var svgElement = document.querySelector('#desk-line');
        }

        const svgPath = svgElement.firstChild;  // indexes SVG path
        const length = svgPath.getTotalLength() - headStart;  // Add head start for scroll hint
        svgElement.style.strokeDasharray = length + headStart;  // Add back head start to ensure dash array is equal to original length
        svgElement.style.strokeDashoffset = length;        
        document.addEventListener('scroll', drawOnScroll);
   }, [])

  return (
    <>
      <div className={scrollStyles.scrollLineContainer}>
          <MobileLine id='mobile-line' className={scrollStyles.mobileLine} />
          <DeskLine id='desk-line' className={scrollStyles.deskLine}/>
      </div>
      <DownArrow className={clsx({
        [scrollStyles.downArrow]: true,
        [scrollStyles.hideDownArrow] : scrolled})}/>
      <div className={scrollStyles.scrollText}>
          <h1>After Lunch</h1>
          <p>3pm - 1am</p>
      </div>
    </>
  )
}