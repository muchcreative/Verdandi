// CSS
import scrollStyles from 'src/styles/night/Scroll.module.css';

// Scripts
import ScrollDraw from 'src/scripts/night/scroll_draw.js';

// SVGs
import ScrollLine from 'public/night/scroll_line.svg';
const scrollLine = () => <ScrollLine />;

// Scroll line is loaded as a full line first
// how can we prevent this?

export default function Scroll() {
  return (
    <>
      <div className={scrollStyles.scrollLineContainer}>
          <ScrollLine id='scroll-line' className={scrollStyles.scrollLine} />
      </div>
      <ScrollDraw />
      <div className={scrollStyles.scrollText}>
          <h1>After Hours</h1>
          <p>5pm - 1am</p>
      </div>
    </>
  )
}