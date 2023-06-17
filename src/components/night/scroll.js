// Next.js
import { useEffect } from 'react';

// CSS
import scrollStyles from 'src/styles/night/Scroll.module.css';

// SVGs
import ScrollLine from 'public/night/scroll_line.svg';
const scrollLine = () => <ScrollLine />;

export default function Scroll() {
    useEffect(() => {
        const drawOnScroll = () => {
          const scrollPercent = (window.scrollY + document.documentElement.scrollTop) 
            / (5800 - document.documentElement.clientHeight);

          const draw = length * scrollPercent;
          svgElement.style.strokeDashoffset = length - draw;
        }

        const headStart = 400;
        const svgElement = document.querySelector('#scroll-line');
        const svgPath = svgElement.firstChild;  // indexes SVG path
        const length = svgPath.getTotalLength() - headStart;  // Add head start for scroll hint
        svgElement.style.strokeDasharray = length + headStart;  // Add back headt start to ensure dash array is equal to original length
        svgElement.style.strokeDashoffset = length;        
        document.addEventListener("scroll", drawOnScroll);
   }, [])
  return (
    <>
      <div className={scrollStyles.scrollLineContainer}>
          <ScrollLine id='scroll-line' className={scrollStyles.scrollLine} />
      </div>
      <div className={scrollStyles.scrollText}>
          <h1>After Hours</h1>
          <p>5pm - 1am</p>
      </div>
    </>
  )
}