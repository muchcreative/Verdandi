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
    const [seenTitle, setSeen] = useState(false);

    useEffect(() => {
      const moreTitle = document.querySelector('#more-title');

      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };

      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              setSeen(true);
          }
        })
      };

      let observer = new IntersectionObserver(callback, options);
      observer.observe(moreTitle);
    }, [])

    return (
      <>
        <div id='more-title' className={moreStyles.titleContainer}>
          <h2>Read More</h2>
          <hr className={clsx({
            [moreStyles.titleLine] : true,
            [moreStyles.animateTitleLine]: seenTitle})}></hr>
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
                onClick={() => setDesc({curr: 2, prev: desc.curr})}>Back-End</button>
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
                    This portfolio website was built in Next.js and all assets were designed in Figma. 
                    Besides this website, I have helped design and develop 3 other websites for both small 
                    businesses and startups. Regarding applications, I have built and led the design 
                    of the data analytics dashboard for Portable Intelligence. Currently, I am designing the 
                    data marketplace and later the website information page for Data Mart. I have over 
                    1 year of experience in both design and front-end development.
                </p>
                <p id='data-desc' className={clsx({
                  [moreStyles.desc] : true,
                  [moreStyles.descShow] : (desc.curr === 1),
                  [moreStyles.descHide] : (desc.prev === 1)})}>
                    I have led multiple teams in machine learning-related projects and product development. 
                    I have consulted for machine learning opportunities at Portable Intelligence and created 
                    a client-facing analytics dashboard with understandable graphics and report summaries 
                    for users without a background in data analytics. Before that, my other notable ML models 
                    include a condominium blueprint summary to aid engineering system design and monitor various 
                    engineering standards, a market derivative trader time-series model, and a code and markdown 
                    NLP model. I have 4 - 5 years of experience in both data analytics and machine learning development.
                </p>
                <p id='back-desc' className={clsx({
                  [moreStyles.desc] : true,
                  [moreStyles.descShow] : (desc.curr === 2),
                  [moreStyles.descHide] : (desc.prev === 2)})}>
                    I lead a team to develop a robot navigation algorithm in C++ to a 90% score. From there, I 
                    developed backtesting software for market derivatives and the full ETL pipeline to store 
                    market data over the Cloud including its aggregation and pre-processing. I am currently 
                    working with other developers to help write smart contracts that outline the data rules 
                    for the usage of data commercialized through Data Mart and recorded on the blockchain. 
                    I have over 1 year of experience in back-end development.
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
                My pen name is 	&ldquo;muchcreative&rdquo;. I am 25 years old and I want to be a decent developer. 
                This year I am:
            </p>
            <ol className={moreStyles.goals}>
              <li>Focusing on back-end development, especially in Rust proficiency</li>
              <li>Networking with more coders through events and Toronto technology conferences</li>
              <li>You can find me on most Saturdays at 1pm for the Morning Code Meetup at Creed&#39;s Coffee in Toronto</li>
            </ol>
        </div>
        <hr className={moreStyles.contactBreak}></hr>
      </>
    )
}