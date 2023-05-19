import { useEffect } from 'react';
import Script from 'next/script';

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