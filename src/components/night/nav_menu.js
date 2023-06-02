// Next.js
import Link from 'next/link';
import { useState, useEffect } from 'react';

// CSS
import navStyles from 'src/styles/night/Nav.module.css';

// External Libs
import { clsx } from 'clsx';

// Animation Options,
// Each option should fade in followed by a slower slide in
// Change to translate

export default function NavMenu() {
    const [toggled, toggleMenu ] = useState(false);

    useEffect(() => {
        const menu = document.querySelector('#hamburger')
        menu.addEventListener('blur', () => {
            toggleMenu(!toggled);});
    }, [toggled])

    return (
      <>
        <div>
          <button id='hamburger'
            onClick={() => toggleMenu(!toggled)}
            className={clsx({
              [navStyles.hamburger] : true,
              [navStyles.hamburgerOpen] : toggled})}>
              <div className={navStyles.bar}></div>
          </button>
          <nav
            id='menu'
            className={clsx({
              [navStyles.menu] : true,
              [navStyles.menuOpen] : toggled,
              [navStyles.menuClosed] : toggled === false})}>
            <button
                className={navStyles.close}
                onClick={() => toggleMenu(!toggled)}>
              <div className={navStyles.closeBar}></div>
            </button>
            <ul className={navStyles.linkList}>
              <li><Link href='#beginning'>Beginning</Link></li>
              <hr></hr>
              <li><Link href='#experience'>Experience</Link></li>
              <hr></hr>
              <li><Link href='#skills'>Skills</Link></li>
              <hr></hr>
              <li><Link href='#more'>More</Link></li>
              <hr></hr>
              <li><Link href='#contact'>Contact</Link></li>
              <hr></hr>
            </ul>
          </nav>
          
        </div>
      </>
    )
  }