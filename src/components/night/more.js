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
              This portfolio website was built in Next.js and all SVG assets were designed in Figma. 
              Additionally, built two other websites for an Ontario-based materials handling company 
              and the Renderlabs website. Regarding dashboards, built and lead the design of the 
              data analytics dashboard for Portable Intelligence. Currently, designing the dashboard 
              and later the website for Flow DB. Over 1 year of experience in front-end development.
            </p>
            <p id='data-desc' className={clsx({
              [moreStyles.desc] : true,
              [moreStyles.descShow] : (desc.curr === 1),
              [moreStyles.descHide] : (desc.prev === 1)})}>
              Multiple data scientist certificates and courses. Lead multiple teams in machine 
              learning-related projects. Consulted for machine learning opportunities at Portable 
              Intelligence and created a client-facing analytics dashboard with easy-to-understand 
              graphics and data report summaries for users without a background in data. Notable 
              ML models trained, condominium blueprint summary, and room selection with convolutions 
              with data augmentation specific to the blueprints. Market derivative trader time-series 
              model. Code and markup understanding NLP model. Top game models copied include 
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
            <ol className={moreStyles.list}>
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