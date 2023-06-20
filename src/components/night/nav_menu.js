// Next.js
import Link from 'next/link';
import { useState, useEffect } from 'react';

// CSS
import navStyles from 'src/styles/night/Nav.module.css';

// External Libs
import { clsx } from 'clsx';

export default function NavMenu() {
    const [open, openMenu ] = useState(false);
    
    useEffect(() => {
        const invisible = document.querySelector('#invisible-bg')
        invisible.addEventListener('click', () => {
            openMenu(false);
        });
    }, [open])

    return (
      <>
        <button id='hamburger' name='nav-menu-button' aria-label='nav-menu-button'
            onClick={() => openMenu(!open)}
            className={clsx({
              [navStyles.hamburger] : true,
              [navStyles.hamburgerOpen] : open})}>
              <div className={navStyles.bar}></div>
        </button>
        <div 
          id='invisible-bg' 
          className={clsx({
            [navStyles.invisibleBgClosed] : !open,
            [navStyles.invisibleBgOpen] : open})}>
        </div>
        <nav
          className={clsx({
            [navStyles.menu] : true,
            [navStyles.menuOpen] : open,
            [navStyles.menuClosed] : !open})}>
                <ul className={navStyles.linkList}>
                    <li>
                      <Link onClick={() => openMenu(false)} href='#beginning'>Beginning</Link>
                      <hr></hr>
                    </li>
                    <li>
                      <Link onClick={() => openMenu(false)} href='#skills'>Skills</Link>
                      <hr></hr>  
                    </li>
                    <li><
                      Link onClick={() => openMenu(false)} href='#experience'>Experience</Link>
                      <hr></hr>
                    </li>                                       
                    <li>
                      <Link onClick={() => openMenu(false)} href='#more'>More</Link>
                      <hr></hr>
                    </li>
                    <li>
                      <Link onClick={() => openMenu(false)} href='#contact'>Contact</Link>
                      <hr></hr>  
                    </li>                    
                </ul>
            </nav>
      </>
    )
  }