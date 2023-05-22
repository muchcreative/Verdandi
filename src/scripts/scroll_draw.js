import { useEffect } from 'react';
import Script from 'next/script';

export default function ScrollDraw() {
    return (
      <>
        <Script id='scroll-draw'> {
            useEffect(() => {
                const onScroll = () => {
                    var scrollPercent = (window.scrollY + document.documentElement.scrollTop) 
                                        / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
                            
                    var draw = length * scrollPercent;
                    svgElement.style.strokeDashoffset = length - draw;

                    console.log("Scroll Percent", scrollPercent,
                    "Current Dashoffset", svgElement.style.strokeDashoffset);
                }
                
                const svgElement = document.querySelector('#scroll-line');
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