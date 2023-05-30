import Link from 'next/link';
import { useState, useEffect } from 'react';

import navStyles from 'src/styles/night/Nav.module.css';
import NavBars from 'public/night/nav_bars.svg';

const navBars = () => <NavBars />; 

export default function NavMenu() {
  const [open, toggleOpenClose ] = useState(false);

  return (
    <>
      <NavBars
        className={navStyles.navBars}
        onClick={() => toggleOpenClose(!open)} />
      <nav data-toggle={open} className={navStyles.navMenu}>
        <ul>
          <li><Link href='#beginning'>Beginning</Link></li>
          <li><Link href='#experience'>Experience</Link></li>
          <li><Link href='#skills'>Skills</Link></li>
          <li><Link href='#more'>Read More</Link></li>
          <li><Link href='#contact'>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

// on click open nav bars
// defaults closed
// how do you want to do this?