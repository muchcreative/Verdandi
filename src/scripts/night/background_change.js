import { useEffect } from 'react';
import Script from 'next/script';

// a lot of timings need to be fixed here
// looks like its sandwhiching because you can still see the other black
// part

export default function BackgroundChange() {
    return (
      <>
        <Script id='background-change'> {
            useEffect(() => {
                const bgChangeOnScroll = () => {
                    if (elementLoc.top <= window.scrollY) {
                        console.log("I opened here", elementLoc.top, window.innerHeight, window.scrollY);
                        bgChanger.style.backgroundPosition = 'top';
                    } else {
                        bgChanger.style.backgroundPosition = 'bottom';
                    }
                }

                var bgChanger = document.querySelector('#bg-changer');
                var elementLoc = bgChanger.getBoundingClientRect();
                console.log("rectangle here", elementLoc);
            document.addEventListener("scroll", bgChangeOnScroll);
            }, [])
        } </Script>
      </>
    )

}