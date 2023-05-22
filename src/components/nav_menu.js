import Link from 'next/link';
import { useState, useEffect } from 'react';

import NavBars from '../../public/svgs/nav_bars.svg';
import navStyles from '../styles/night/Nav.module.css';

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
          <li><Link href='#skills'>Skills</Link></li>
          <li><Link href='#experience'>Experience</Link></li>
          <li><Link href='#projects'>Projects</Link></li>
          <li><Link href='#contact'>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

// on click open nav bars
// defaults closed
// how do you want to do this?