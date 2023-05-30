import { useEffect } from 'react';
import Script from 'next/script';

export default function ScrollDraw() {
    return (
      <>
        <Script id='scroll-draw'> {
            useEffect(() => {
                const drawOnScroll = () => {
                    const scrollPercent = (window.scrollY + document.documentElement.scrollTop) 
                      / (5800 - document.documentElement.clientHeight);

                    console.log(
                      "Scroll Percent", scrollPercent,
                      "\nCurrent Scroll", window.scrollY,
                      "\nScroll Top", document.documentElement.scrollTop,
                      "\nScroll Height", document.documentElement.scrollHeight,
                      "\nClient Height", document.documentElement.clientHeight,              
                    );

                    const draw = length * scrollPercent;
                    svgElement.style.strokeDashoffset = length - draw;
                }

                var headStart = 500
                // it seems to be somewhat dependent on how long the entire page is
                // should return current coordinates using svgElement.getPointAtLength
                // then constantly set the new location of the knob

                const svgElement = document.querySelector('#scroll-line');
                const svgPath = svgElement.firstChild; // indexes SVG path
                var length = svgPath.getTotalLength() - headStart; // 500 head start for scroll hint
                svgElement.style.strokeDasharray = length + headStart; // Add back 500 to ensure dash array is equal to original length
                svgElement.style.strokeDashoffset = length;        
                document.addEventListener("scroll", drawOnScroll);
            }, [])
        } </Script>
      </>
    )
}