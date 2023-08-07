// CSS
import expStyles from 'src/styles/night/Experience.module.css';

// External Libs
import { clsx } from 'clsx';

// SVGs
import CircleArrow from 'public/night/circle_arrow.svg'

const circleArrow = () => <CircleArrow />;

export default function ExpCircles({desc, setDesc, showAddOn, closeAddOnFirst}) {
 
    return (
      <>
        <button
          name='left-circle-arrow-btn'
          aria-label='left-circle-arrow-btn'
          className={expStyles.circleArrow} 
          onClick={() => {
          const updated = desc.curr - 1;
          const descNum = updated === -1 ? 2 : updated;
          !showAddOn ?  setDesc({curr: descNum, prev: desc.curr}) : closeAddOnFirst(descNum)}}>
            <CircleArrow className={expStyles.leftCircleArrow} />
        </button>
        <button
          name='current-desc-indicator' 
          aria-label='current-desc-indicator'
          onClick={() => {
            if (desc.curr != 0) {
              !showAddOn ?  setDesc({curr: 0, prev: desc.curr}) : closeAddOnFirst(0)
            };
          }}>
            <span className={clsx({
              [expStyles.dot] : true,
              [expStyles.selectedDot] : desc.curr === 0})}></span>
        </button>
        <button
          name='current-desc-indicator'
          aria-label='current-desc-indicator'
          onClick={() => {
            if (desc.curr != 1) {
              !showAddOn ?  setDesc({curr: 1, prev: desc.curr}) : closeAddOnFirst(1)
            };
          }}>
            <span className={clsx({
              [expStyles.dot] : true,
              [expStyles.selectedDot] : desc.curr === 1})}></span>
        </button>
        <button
          name='current-desc-indicator'
          aria-label='current-desc-indicator'
          onClick={() => {
            if (desc.curr != 2) {
              !showAddOn ?  setDesc({curr: 2, prev: desc.curr}) : closeAddOnFirst(2)
            };
          }}>
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
          const descNum = updated === 3 ? 0 : updated;
          !showAddOn ?  setDesc({curr: descNum, prev: desc.curr}) : closeAddOnFirst(descNum)}}>
            <CircleArrow className={expStyles.rightCircleArrow} />
        </button>
      </>
    )
}