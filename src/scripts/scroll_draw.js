import { useEffect } from 'react';
import Script from 'next/script';

export default function ScrollDraw() {
    return (
      <>
        <Script id='scroll-draw'> {
            useEffect(() => {
                const onScroll = () => {
                   // its not resetting properly.
                   // its only going one way
                    var currentDashOffset = svgElement.style.strokeDashoffset;
                    console.log(currentDashOffset);
                    var scrollPercent = (window.scrollY + document.documentElement.scrollTop) 
                      / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

                    if (window.scrollY < 500) {
                      console.log("here");
                      
                    } else if (window.scrollY >= 500 && window.scrollY <= 1300) {
                      console.log("here2");
                    
                    } else {
                      console.log("here3");

                    };

                    // ready for some big4head moves
                            
                    var draw = length * scrollPercent;
                    svgElement.style.strokeDashoffset = currentDashOffset - draw;
                }
                
                const svgElement = document.querySelector('#scroll-line');
                var svgPath = svgElement.firstChild; // indexes SVG path
                var length = svgPath.getTotalLength() - 500; // 500 head start for scroll hint
        
                svgElement.style.strokeDasharray = length + 500; // you have to find a way to manipulate both values
                svgElement.style.strokeDashoffset = length;                
                document.addEventListener("scroll", onScroll);
            }, [])
        } </Script>
      </>
    )
}