import { useEffect } from 'react';
import Script from 'next/script';

export default function toggleNavBar() {
    return (
        <>
          <Script id='nav-bar-toggle'> {
            useEffect(() => {
              navMenu = document.querySelector('.navMenu');
              navMenu.style.display = 'visible';
            }, [])
          } </Script>
      </>
    )
}
