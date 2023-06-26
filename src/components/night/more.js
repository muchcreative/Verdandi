// Next.js
import { useState, useEffect } from 'react';

// CSS
import moreStyles from 'src/styles/night/More.module.css';

// SVGs
import MoreVB from 'public/night/more_vb.svg';
const more_vb = () => <MoreVB />;

// External Libs
import { clsx } from 'clsx';

export default function More() {
    const [desc, setDesc] = useState({curr: 0, prev: null});

    return (
      <>
        <div className={moreStyles.titleContainer}>
          <h2>Read More</h2>
          <hr className={moreStyles.titleUnderline}></hr>
        </div>
        <div className={moreStyles.moreLayout}>
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
                onClick={() => setDesc({curr: 2, prev: desc.curr})}>Develop</button>
            </div>
            <MoreVB className={moreStyles.verticalBreak}/>
            <hr className={clsx({
              [moreStyles.hrDesc]: true,
              [moreStyles.hrDesc1] : desc.curr === 1, 
              [moreStyles.hrDesc2] : desc.curr === 2})} />
            <hr className={moreStyles.fullHr}></hr>
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
        <div className={moreStyles.current}>
            <h5>Current</h5>
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
        <hr className={moreStyles.contactBreak}></hr>
      </>
    )
}