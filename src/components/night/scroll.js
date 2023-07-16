// Next.js
import { useState, useEffect } from 'react';

// CSS
import scrollStyles from 'src/styles/night/Scroll.module.css';

// SVGs
import ScrollLine from 'public/night/scroll_line.svg';
import DownArrow from 'public/night/down_arrow.svg';

// External Libs
import { clsx } from 'clsx';

const downArrow = () => <DownArrow />;
const scrollLine = () => <ScrollLine />;

// so you can set properties or 
// implement directly in javascript with css modules
// Can we control the viewbox too?
// Do i have to avoid auto-centering with preserve aspect ratio
// You can try adding padding

export default function Scroll() {
    const [scrolled, setScrolled]= useState(false)

    useEffect(() => {
      // Try setting the viewbox to be responsive
      // So you bring back the viewbox and by adjust youcan get it
      // HOWEVER, you might need to add to the width or add padding
      
      // Or maybe just add padding manually would that work idk LOL
      // so depending on the viewport size you can adjust the svg size
      // until padding gets terrible
      // no if I keep extra length I can scale my width to drop as much as I want
      // Infinite length capped at 2000 and the viewbox constantly adjusted
      // Adding overflow idden
      const svgElement = document.querySelector('#scroll-line');
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      // console.log('width:', width, 'height:', height);
      // svgElement.setAttribute("viewBox", "0 0 647 1800"); 
    }, [])
    
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
        const svgElement = document.querySelector('#scroll-line');
        const svgPath = svgElement.firstChild;  // indexes SVG path
        const length = svgPath.getTotalLength() - headStart;  // Add head start for scroll hint
        svgElement.style.strokeDasharray = length + headStart;  // Add back head start to ensure dash array is equal to original length
        svgElement.style.strokeDashoffset = length;        
        document.addEventListener('scroll', drawOnScroll);
   }, [])

  return (
    <>
      <div className={scrollStyles.scrollLineContainer}>
          <ScrollLine id='scroll-line' className={scrollStyles.scrollLine} />
      </div>
      <DownArrow className={clsx({
        [scrollStyles.downArrow]: true,
        [scrollStyles.hideDownArrow] : scrolled})}/>
      <div className={scrollStyles.scrollText}>
          <h1>After Lunch</h1>
          <p>1pm - 1am</p>
      </div>
    </>
  )
}