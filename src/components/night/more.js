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

    // you need to add some sort of use effect
    // it will trigger once to close the line animation
    // and the other will open it

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
            <button className={clsx({
              [moreStyles.button] : true,
              [moreStyles.activeButton] : (desc.curr === 3)})}
            onClick={() => setDesc({curr: 3, prev: desc.curr})}>RenderLabs</button>
        </div>
        <HorizontalBreak className={clsx({
            [moreStyles.horizontalBreak1] : true,
            [moreStyles.drawLine0] : desc.curr === 0,
            [moreStyles.drawLine1] : desc.curr === 1,
            [moreStyles.drawLine2] : desc.curr === 2,
            [moreStyles.drawLine3] : desc.curr === 3})} />
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
              Started back-end development with a university project, leading a team 
              to develop a robot navigation algorithm in C++ to a 90% score. Currently 
              developing a SQL database interaction with Rust using Diseal for Flow DB. 
              1 year of experience in back-end development.
            </p>
            <p id='rl-desc' className={clsx({
              [moreStyles.desc] : true,
              [moreStyles.descShow] : (desc.curr === 3),
              [moreStyles.descHide] : (desc.prev === 3)})}>
              Blurb
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
            <h5>This Year</h5>
            <p className={moreStyles.goalDesc}>
              Focus on back-end development especially in Rust proficiency. 
              Get AWS certified in Application Architecture. Network with 
              coders through events. Currently help out coders on the weekend 
              through meetups.com and help run the discord to attend coding 
              events in Toronto.
            </p>
        </div>
        <HorizontalBreak className={moreStyles.horizontalBreak2} />
      </>
    )
}