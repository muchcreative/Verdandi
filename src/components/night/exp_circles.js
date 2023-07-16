// CSS
import expStyles from 'src/styles/night/Experience.module.css';

// External Libs
import { clsx } from 'clsx';

// SVGs
import CircleArrow from 'public/night/circle_arrow.svg'

const circleArrow = () => <CircleArrow />;

export default function ExpCircles({desc, setDesc}) {
    return (
      <>
        <button
          name='left-circle-arrow-btn'
          aria-label='left-circle-arrow-btn'
          className={expStyles.circleArrow} 
          onClick={() => {
          const updated = desc.curr - 1;
          updated === -1 ? setDesc({curr: 2, prev: desc.curr}) : setDesc({curr: updated, prev: desc.curr});
          }}>
            <CircleArrow className={expStyles.leftCircleArrow} />
        </button>
        <button
          name='current-desc-indicator' 
          aria-label='current-desc-indicator'
          onClick={() => setDesc({curr: 0, prev: desc.curr})}>
            <span className={clsx({
              [expStyles.dot] : true,
              [expStyles.selectedDot] : desc.curr === 0})}></span>
        </button>
        <button
          name='current-desc-indicator'
          aria-label='current-desc-indicator'
          onClick={() => setDesc({curr: 1, prev: desc.curr})}>
            <span className={clsx({
              [expStyles.dot] : true,
              [expStyles.selectedDot] : desc.curr === 1})}></span>
        </button>
        <button
          name='current-desc-indicator'
          aria-label='current-desc-indicator'
          onClick={() => setDesc({curr: 2, prev: desc.curr})}>
            <span className={clsx({
              [expStyles.dot] : true,
              [expStyles.selectedDot] : desc.curr === 2})}></span>
        </button>
        <button
          name='right-circle-arrow-btn'
          aria-label='right-circle-arrow-btn'
          className={expStyles.circleArrow} 
          onClick={() => {
          const updated = desc.curr + 1;
          updated === 3 ? setDesc({curr: 0, prev: desc.curr}) : setDesc({curr: updated, prev: desc.curr});
          }}>
            <CircleArrow className={expStyles.rightCircleArrow} />
        </button>
      </>
    )
}