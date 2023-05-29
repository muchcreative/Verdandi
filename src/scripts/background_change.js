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
                    if (window.scrollY >= 2000) {
                        console.log("IM PAST");
                        bgChanger.style.backgroundPosition = 'top';
                    } else {
                        bgChanger.style.backgroundPosition = 'bottom';
                    }
                }

                var bgChanger = document.querySelector('#bg-changer');
            document.addEventListener("scroll", bgChangeOnScroll);
            }, [])
        } </Script>
      </>
    )

}