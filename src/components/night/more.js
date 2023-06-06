// Next.js
import { useState, useEffect } from 'react';

// CSS
import moreStyles from 'src/styles/night/More.module.css';

// SVGs
import HorizontalBreak from 'public/night/horizontal_break.svg';
const horizontalBreak = () => <HorizontalBreak />;

// External Libs
import { clsx } from 'clsx';

export default function More() {
    const [desc, setDesc] = useState({curr: 0, prev: null});

    useEffect(() => {
        const descDivider = document.querySelector('#desc-divider');
        
        // ok I think i see what is happening
        // the forwards forces it to 0 and so when the animation
        // goes again it fails
        
        const draw = [
          { strokeDashoffset : 0 },
        ];

        const drawOutOptions = {
          duration: 1000,
          direction: 'reverse',
          iteratons: 1,
        };
        
        const drawInOptions = {
          duration: 1000,
          fill: 'forwards',
        };
    
        descDivider.animate(draw, drawOutOptions);
        setTimeout(() => {
          descDivider.animate(draw, drawInOptions);
        }, 1200);
    }, [desc])

    // apply a useeffect and provide the close animation
    // then apply the open animation for the line
    // also go for a query selector on the id to add class names
    // dont think you can add classnames, they all get changed with
    // css modules to avoid overlaps

    return (
      <>
        <h2 className={moreStyles.title}>Read More</h2>
        <div className={moreStyles.buttons}>
            <button className={clsx({
              [moreStyles.button] : true,
              [moreStyles.activeButton] : (desc.curr === 0)})}
            onClick={() => setDesc({curr: 0, prev: desc.curr})}>Front-End</button>
            <button className={clsx({
              [moreStyles.button] : true,
              [moreStyles.activeButton] : (desc.curr === 1)})}
            onClick={() => setDesc({curr: 1, prev: desc.curr})}>Data Analytics</button>
            <button className={clsx({
              [moreStyles.button] : true,
              [moreStyles.activeButton] : (desc.curr === 2)})}
            onClick={() => setDesc({curr: 2, prev: desc.curr})}>Back-End</button>
        </div>
        <HorizontalBreak id='desc-divider' className={moreStyles.horizontalBreak1} />
        <div className={moreStyles.descContainer}>
            <p id='front-desc' className={clsx({
              [moreStyles.desc] : true,
              [moreStyles.descShow] : (desc.curr === 0),
              [moreStyles.descHide] : (desc.prev === 0)})}>
              Website built in Next.js and assets designed in Figma. Built and 
              lead the design on the analytics dashboard for Portable Intelligence. 
              Currently building the dashboard and later the website for Flow DB. 
              Over 1 year of experience in front-end development.
            </p>
            <p id='data-desc' className={clsx({
              [moreStyles.desc] : true,
              [moreStyles.descShow] : (desc.curr === 1),
              [moreStyles.descHide] : (desc.prev === 1)})}>
              Starting learning and competition in Kaggle competitions in university. 
              Multiple data scientist certificates and courses taken. Lead multiple 
              teams in machine learning related projects. Built front facing client 
              dashboards at Portable Intelligence. Over 3-4 years of experience 
              building models.
            </p>
            <p id='back-desc' className={clsx({
              [moreStyles.desc] : true,
              [moreStyles.descShow] : (desc.curr === 2),
              [moreStyles.descHide] : (desc.prev === 2)})}>
              `Started back-end development with a university project, leading a team 
              to develop a robot navigation algorithm in C++ to a 90% score. Currently 
              developing a SQL database interaction with Rust using Diseal for Flow DB. 
              1 year of experience in back-end development.`
            </p>
        </div>
        <div className={moreStyles.practicals}>
            <h5>Other Practicals</h5>
            <ol className={moreStyles.list}>
                <li>Git</li>
                <li>Hugging Face</li>
                <li>Neptune</li>
                <li>Figma</li>
                <li>Solidworks</li>
                <li>Azure App Deployment</li>
                <li>Wix</li>
            </ol>
        </div>
        <div className={moreStyles.goals}>
            <h5>Focus</h5>
            <p className={moreStyles.goalDesc}>
                My pen name is Iris, both the flower and the eye. I am 25 years old and looking to create 
                something cool. I aim to be top 100 world-ranked in Kaggle.<br></br>
                However, this year I am currently:
            </p>
            <ol>
              <li>Focusing on back-end development, especially in Rust proficiency in my free time.</li>
              <li>Getting AWS certified in Application Architecture.</li>
              <li>
                  Networking with more coders through the event and helping out beginner to intermediate-level coders every Saturday in Toronto through TSE (Toronto Stack Exchange). 
                  I also help organize members and raise awareness for large coding events in Toronto.
              </li>
            </ol>
        </div>
        <hr className={moreStyles.horizontalBreak2}></hr>
      </>
    )
}