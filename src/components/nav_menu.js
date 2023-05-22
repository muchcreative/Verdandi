import Link from 'next/link';

import navControl from '../scripts/nav_control.js';
import NavBars from '../../public/svgs/nav_bars.svg';
import navStyles from '../styles/night/Nav.module.css';

const navBars = () => <NavBars />; 

// do you need to add the script component here?

export default function NavMenu() {
  return (
    <>
      <navControl />
      <NavBars className={navStyles.navBars} onClick={toggleNavBar()}/>
      <nav className={navStyles.navMenu}>
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