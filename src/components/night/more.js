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
      const buttons = [document.querySelector('#front-btn'),
                       document.querySelector('#data-btn'),
                       document.querySelector('#back-btn')]
      const hb = document.querySelector('#hb');
      
      const drawOut = [
        { strokeDashoffset : 0 },
        { strokeDashoffset : -1000 },
      ];
      
      const drawOutTiming = {        
        duration: 700,
        easing: 'ease',
        fill: 'forwards',
        iterations: 1
      };

      const drawIn = [
        { strokeDashoffset : 1000 },
        { strokeDashoffset : 0 },
      ];
      
      const drawInTiming = {        
        duration: 700,
        easing: 'ease',
        delay: 900,
        fill: 'forwards',
        iterations: 1
      };

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          hb.animate(drawOut, drawOutTiming);
          hb.animate(drawIn, drawInTiming);
        })
      })
    }, [])

    return (
      <>
        <h2 className={moreStyles.title}>Read More</h2>
        <div className={moreStyles.buttons}>
            <button id='front-btn' className={clsx({
              [moreStyles.button] : true,
              [moreStyles.activeButton] : (desc.curr === 0)})}
            onClick={() => setDesc({curr: 0, prev: desc.curr})}>Front-End</button>
            <button id='data-btn' className={clsx({
              [moreStyles.button] : true,
              [moreStyles.activeButton] : (desc.curr === 1)})}
            onClick={() => setDesc({curr: 1, prev: desc.curr})}>Data Analytics</button>
            <button id='back-btn' className={clsx({
              [moreStyles.button] : true,
              [moreStyles.activeButton] : (desc.curr === 2)})}
            onClick={() => setDesc({curr: 2, prev: desc.curr})}>Back-End</button>
        </div>
        <HorizontalBreak id='hb' className={clsx({
          [moreStyles.horizontalBreak1]: true,
          [moreStyles.animateHB0] : desc.curr === 0, 
          [moreStyles.animateHB1] : desc.curr === 1, 
          [moreStyles.animateHB2] : desc.curr === 2})} />
        <div className={moreStyles.descContainer}>
            <p id='front-desc' className={clsx({
              [moreStyles.desc] : true,
              [moreStyles.descShow] : (desc.curr === 0),
              [moreStyles.descHide] : (desc.prev === 0)})}>
              This portfolio website was built in Next.js and all SVG assets were designed in Figma. 
              Additionally, I built two other websites for an Ontario-based materials handling company 
              and for Renderlabs. Regarding dashboards, I built and lead the design of the 
              data analytics dashboard for Portable Intelligence. Currently, designing the human 
              clinical trials dashboard and later the website for Flow DB. Over 1 year of experience 
              in front-end development.
            </p>
            <p id='data-desc' className={clsx({
              [moreStyles.desc] : true,
              [moreStyles.descShow] : (desc.curr === 1),
              [moreStyles.descHide] : (desc.prev === 1)})}>
              Multiple data scientist certificates and courses. Lead multiple teams in machine 
              learning-related projects. Consulted for machine learning opportunities at Portable 
              Intelligence and created a client-facing analytics dashboard with easy-to-understand 
              graphics and data report summaries for users without a background in data. Notable 
              ML models trained include, condominium blueprint summary, and room selection with convolutions 
              with data augmentation specific to the blueprints. Market derivative trader time-series 
              model. Code and markup understanding NLP model. Top game models copied include models from
              Connect-4, Go, and Chess. Over 4-5 years of experience building ML and statistical models.
            </p>
            <p id='back-desc' className={clsx({
              [moreStyles.desc] : true,
              [moreStyles.descShow] : (desc.curr === 2),
              [moreStyles.descHide] : (desc.prev === 2)})}>
              Started back-end development with a university project, leading a team 
              to develop a robot navigation algorithm in C++ to a 90% score. Developed 
              backtesting software for market derivatives and the aggregation/post-processing 
              data pipeline to store market data over the Cloud. Currently developing 
              a SQL database ORM system with Rust using Diesel. Designing for multi-threaded 
              concurrency for page navigation and API requests. Over 1 year of experience in 
              back-end development.
            </p>
        </div>
        <div className={moreStyles.practicals}>
            <h5>Other Practicals</h5>
            <ol className={moreStyles.pracicalsList}>
                <li>Git</li>
                <li>Hugging Face</li>
                <li>Neptune</li>
                <li>GPU Cloud Optimization</li>
                <li>Figma</li>
                
                <li>Solidworks</li>
                <li>Bluebeam</li>
                <li>Wix</li>
                <li>Excel</li>
                <li>Azure Deployment</li>
            </ol>
        </div>
        <div className={moreStyles.focus}>
            <h5>Focus</h5>
            <p className={moreStyles.about}>
                My pen name is Iris. I am 25 years old. I aim to be top 100 world-ranked in Kaggle. 
                But, this year I am currently:
            </p>
            <ol className={moreStyles.goals}>
              <li>Focusing on back-end development, especially in Rust proficiency on my free time.</li>
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