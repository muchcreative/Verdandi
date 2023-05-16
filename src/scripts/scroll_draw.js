import { useEffect } from 'react';
import Script from 'next/script';


// you need to have an offset added here
// or least something to tell others to scroll here
// works at different zooms... there must bed a media query you can add to fix this.
// Reminder to remove the console.logging

export default function ScrollDraw() {
    return (
      <>
        <Script id="scroll-draw"> {
            useEffect(() => {
                const onScroll = () => {
                    console.log("Four measurements",
                    window.scrollY,
                    document.documentElement.scrollTop,
                    document.documentElement.scrollHeight,
                    document.documentElement.clientHeight);

                    var scrollPercent = (window.scrollY + document.documentElement.scrollTop) 
                                        / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
                    var draw = length * scrollPercent;
                    svgElement.style.strokeDashoffset = length - draw;

                    console.log("Scroll Percent", scrollPercent,
                    "Current Dashoffset", svgElement.style.strokeDashoffset);
                }
                
                const svgElement = document.getElementById("scroll-line");
                var svgPath = svgElement.firstChild; // indexes SVG path
                var length = svgPath.getTotalLength();
        
                svgElement.style.strokeDasharray = length;
                svgElement.style.strokeDashoffset = length;                
                document.addEventListener("scroll", onScroll);
            }, [])
        } </Script>
      </>
    )
}