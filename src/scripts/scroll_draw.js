import { useEffect } from 'react';
import Script from 'next/script';

// need a way to consider the curve in the path
// ok so scrolling needs an offset

export default function ScrollDraw() {
    return (
      <>
        <Script id="scroll-draw"> {
            useEffect(() => {
                const onScroll = () => {
                    var scrollPercent = (window.scrollY + document.documentElement.scrollTop) 
                                        / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
                            
                    var draw = length * scrollPercent;
                    svgElement.style.strokeDashoffset = length - draw;

                    // specify a certain section of the page you change the animation
                    // you can use switch cases?
                    // only have one bend right now, but thais is not the final
                    // svg. so let's draw one

                    console.log("Scroll Percent", scrollPercent,
                    "Current Dashoffset", svgElement.style.strokeDashoffset);
                }
                
                const svgElement = document.getElementById("scroll-line");
                var svgPath = svgElement.firstChild; // indexes SVG path
                var length = svgPath.getTotalLength() - 500;
        
                svgElement.style.strokeDasharray = length + 500;
                svgElement.style.strokeDashoffset = length;                
                document.addEventListener("scroll", onScroll);
            }, [])
        } </Script>
      </>
    )
}