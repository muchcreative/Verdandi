// CSS
import scrollStyles from 'src/styles/night/Scroll.module.css';

// Scripts
import ScrollDraw from 'src/scripts/night/scroll_draw.js';

// SVGs
import ScrollLine from 'public/night/scroll_line.svg';
const scrollLine = () => <ScrollLine />;

export default function Scroll() {
  return (
    <>
      <div className={scrollStyles.scrollLineContainer}>
          <ScrollLine id='scroll-line' className={scrollStyles.scrollLine} />
      </div>
      <ScrollDraw />
      <div className={scrollStyles.scrollText}>
          <h1>Night</h1>
          <p>6pm - 6am</p>
      </div>
    </>
  )
}