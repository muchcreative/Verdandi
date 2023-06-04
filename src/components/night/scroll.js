// CSS
import scrollStyles from 'src/styles/night/Scroll.module.css';

// Scripts
import ScrollDraw from 'src/scripts/night/scroll_draw.js';
import BackgroundChange from 'src/scripts/night/background_change.js';

// SVGs
import ScrollLine from 'public/night/scroll_line.svg';
const scrollLine = () => <ScrollLine />;

export default function Scroll() {
  return (
    <>
      <ScrollDraw />
      <BackgroundChange />
      <div className={scrollStyles.scrollLineContainer}>
          <ScrollLine id='scroll-line' className={scrollStyles.scrollLine} />
      </div>
      <div className={scrollStyles.scrollText}>
          <h1>Night</h1>
          <p>6pm - 6am</p>
      </div>
      <div id='bg-changer' className={scrollStyles.bgChanger}></div>    
    </>
  )
}