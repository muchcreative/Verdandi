// Next.js
import Link from 'next/link';
import { useState, useEffect } from 'react';

// CSS
import navStyles from 'src/styles/night/Nav.module.css';

// SVGs
import X from 'public/night/x.svg'

// External Libs
import { clsx } from 'clsx';

const x = () => <X />;

export default function NavMenu() {
    const [open, openMenu] = useState(false);
    
    useEffect(() => {
        const invisible = document.querySelector('#invisible-bg')
        invisible.addEventListener('click', () => {
            openMenu(false);
        });
    }, [open])

    return (
      <>
        <button id='hamburger' name='nav-menu-btn' aria-label='nav-menu-btn'
          onClick={() => openMenu(!open)}
          className={clsx({
          [navStyles.hamburger] : true,
          [navStyles.hamburgerOpen] : open})}>
            <div className={navStyles.bar}></div>
        </button>
        <div
          className={clsx({
          [navStyles.menu] : true,
          [navStyles.menuOpen] : open})}>
            <div className={navStyles.vertical}></div>
            <button className={navStyles.crossBtn} onClick={() => openMenu(!open)}>
                <X className={navStyles.cross}/>
            </button> 
            <nav className={navStyles.nav}>
                <ol className={navStyles.linkList}>
                    <li className={navStyles.underline}>
                        <Link
                          className={navStyles.navLink}
                          onClick={() => openMenu(false)} 
                          href='#beginning'>
                            Beginning
                        </Link>
                    </li>
                    <li className={navStyles.underline}>
                        <Link
                          className={navStyles.navLink}
                          onClick={() => openMenu(false)}
                          href='#skills'>
                            Skills
                        </Link>
                    </li>
                    <li className={navStyles.underline}>
                        <Link
                          className={navStyles.navLink}
                          onClick={() => openMenu(false)}
                          href='#experience'>
                            Experience
                        </Link>
                    </li>                                       
                    <li className={navStyles.underline}>
                        <Link
                          className={navStyles.navLink}
                          onClick={() => openMenu(false)}
                          href='#more'>
                            More
                        </Link>
                    </li>
                    <li>
                        <Link
                          className={navStyles.navLink}
                          onClick={() => openMenu(false)}
                          href='#contact'>
                            Contact
                        </Link>
                    </li>                    
                </ol>
            </nav>
        </div>
        <div 
          id='invisible-bg' 
          className={clsx({
            [navStyles.invisibleBgClosed] : !open,
            [navStyles.invisibleBgOpen] : open})}>
        </div>
      </>
    )
  }