// Next.js
import { useState, useEffect } from 'react';

// CSS
import expStyles from 'src/styles/night/Experience.module.css';

// Page Components
import ExpCircles from 'src/components/night/exp_circles.js';

// SVGs
import MMS from 'public/night/mms.svg'
import SideArrow from 'public/night/side_arrow.svg'
import Triangle from 'public/night/triangle.svg'

// External Libs
import { clsx } from 'clsx';

const mms = () => <MMS />;
const sideArrow = () => <SideArrow />;
const triangle = () => <Triangle />;

export default function Experience() {
    const [desc, setDesc] = useState({curr: 0, prev: null});
    const [showAddOn, setAddOn] = useState(false);
    const [seenTitle, setSeen] = useState(false);

    const closeAddOnFirst = (descNum) => {
      setAddOn(false);
      if (screen.width < 1000) { // Timeout only needed when layout shifts on mobile
        setTimeout(() => {
          setDesc({curr: descNum, prev: desc.curr});
        }, 800);
      } else {
          setDesc({curr: descNum, prev: desc.curr});
      }
    };

    useEffect(() => {
      const expTitle = document.querySelector('#exp-title');

      let options = {
        root: null,
        rootMargin: '0px',
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
      observer.observe(expTitle);
    }, [])

    return (
      <>
        <div id='exp-title' className={expStyles.titleContainer}>
          <h2 id='exp-header'>Experience</h2>
          <hr className={clsx({
            [expStyles.titleLine] : true,
            [expStyles.animateTitleLine] : seenTitle})}></hr>
        </div>
        <div className={expStyles.art}>
            <MMS className={expStyles.mms}/>
        </div>
        <div className={expStyles.dotContainer}>
            <ExpCircles
              desc={desc}
              setDesc={setDesc}
              showAddOn={showAddOn}
              closeAddOnFirst={closeAddOnFirst}/>
        </div>
        <div className={expStyles.expContainer}>          
            <div className={expStyles.mainDescs}>
                <button
                  name='left-arrow-btn'
                  aria-label='left-arrow-btn'
                  className={expStyles.arrowBtn}
                  onClick={() => {
                  const updated = desc.curr - 1;
                  const descNum = updated === -1 ? 2 : updated;
                  !showAddOn ?  setDesc({curr: descNum, prev: desc.curr}) : closeAddOnFirst(descNum)}}>
                    <SideArrow className={expStyles.leftArrow}/>
                </button>
                <div className={expStyles.allDesc}>
                    <div className={clsx({
                      [expStyles.baseDesc] : true,
                      [expStyles.mart] : true,
                      [expStyles.showDesc] : desc.curr === 0,
                      [expStyles.hideDesc] : desc.prev === 0})}>
                        <div className={expStyles.title}>
                            <h3>Data Mart</h3>
                            <h4>Full-Stack Developer</h4>
                        </div>
                        <div className={expStyles.desc}>
                            <p>
                              Data Mart is a dApp (decentralized application) that facilitates the online selling and trading of information 
                              and data. It is a decentralized marketplace for both buyers and sellers to share and sell
                              information from both sensitive data to large datasets for machine learning or market advantages.   
                            </p>
                            <div className={clsx({
                                [expStyles.expandContainer] : true,
                                [expStyles.hideExpander] : showAddOn})}>
                              <button onClick={() => setAddOn(true)}>
                                <span className={expStyles.expander}>
                                    <p>What&#39;s our approach?</p>
                                    <Triangle className={expStyles.expandTriangle} />
                                </span>
                              </button>
                            </div>
                        </div>
                    </div>
                    <div id='pi' className={clsx({
                      [expStyles.baseDesc] : true,
                      [expStyles.pi] : true,
                      [expStyles.showDesc] : desc.curr === 1,
                      [expStyles.hideDesc] : desc.prev === 1})}>
                        <div className={expStyles.title}>
                            <h3>Portable Intelligence</h3>
                            <h4>Lead Data Analyst</h4>
                        </div>
                        <div className={expStyles.desc}>
                            <p>
                              Seeking opportunities to use machine learning to help bolster their recent product release. I was brought in to 
                              complete data analysis and consult on machine learning. Provided with a team of developers, the goal was that 
                              within 3 months we would have a finished product to showcase for Chicago&#39;s ProMat 2023. 
                            </p>
                            <div className={clsx({
                                [expStyles.expandContainer] : true,
                                [expStyles.hideExpander] : showAddOn})}>
                                <button onClick={() => setAddOn(true)}>
                                    <span className={expStyles.expander}>
                                        <p>This was our solution.</p>
                                        <Triangle className={expStyles.expandTriangle} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id='dt' className={clsx({
                      [expStyles.baseDesc] : true,
                      [expStyles.dt] : true,              
                      [expStyles.showDesc] : desc.curr === 2,
                      [expStyles.hideDesc] : desc.prev === 2})}>
                        <div className={expStyles.title}>
                            <h3>Derivative Trader</h3>
                            <h4>Lead Data Scientist</h4>
                        </div>
                        <div className={expStyles.desc}>
                            <p>
                              I lead a team of 3 data scientists for a derivative market trader. Together, we created a cloud-based NoSQL 
                              database set up for over 15mm data points. Developed custom back-testing software for our derivative strategy. 
                              Utilized various model tracking software to test over 20 different machine learning and statistical algorithms.                   
                            </p>
                            <div className={clsx({
                                [expStyles.expandContainer] : true,
                                [expStyles.hideExpander] : showAddOn})}>
                                <button onClick={() => setAddOn(true)}>
                                    <span className={expStyles.expander}>
                                        <p>These were our results.</p>
                                        <Triangle className={expStyles.expandTriangle} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                  name='right-arrow-btn'
                  aria-label='right-arrow-btn'
                  className={expStyles.arrowBtn}
                  onClick={() => {
                  const updated = desc.curr + 1;
                  const descNum = updated === 3 ? 0 : updated;
                  !showAddOn ?  setDesc({curr: descNum, prev: desc.curr}) : closeAddOnFirst(descNum)}}>
                    <SideArrow className={expStyles.rightArrow}/>  
                </button>
            </div>
            <hr className={expStyles.horizontalBreak}></hr>
            <div className={expStyles.addOns}>
                <div
                  className={clsx({
                  [expStyles.addOnContainer] : true,
                  [expStyles.selectedAddOn] : desc.curr === 0,
                  [expStyles.showAddOnContainer] : desc.curr === 0 && showAddOn})}>
                    <p className={expStyles.addOnDesc}>
                      Built using Rust (smart contracts) and Typescript (front-end) on the NEAR Blockchain. NEAR ensures that the data 
                      can be stored and safely viewed through controlled sampling on the blockchain. Additionally, its block-sharding
                      algorithm allows for high computation speeds with low storage and gas costs. Data Mart is a combination of Web 2.0 
                      and 3.0 which ensures user familiarity and that both the data and cryptocurrency can be exchanged safely as determined 
                      by their smart contract.
                    </p>
                    <div className={expStyles.collapseContainer}>
                        <button onClick={() => setAddOn(false)}>
                            <span className={expStyles.collapser}>
                                <p>Collapse</p>
                                <Triangle className={expStyles.collapseTriangle} />
                            </span>
                        </button>
                    </div>                 
                </div>
                <div className={clsx({
                  [expStyles.addOnContainer] : true,
                  [expStyles.selectedAddOn] : desc.curr === 1,
                  [expStyles.showAddOnContainer] : desc.curr === 1 && showAddOn})}>
                    <p className={expStyles.addOnDesc}>
                      Early data was provided from their product launch for a warehouse monitoring system for Kumi Canada, a tier-1 
                      automotive supplier. From there we created a full data processing pipeline and client-facing analysis dashboard. 
                      The dashboard enables managers to make key decisions on tasks and driver productivity during quarterly reports. 
                      Additionally, future data pipelines were created to help address future machine-learning opportunities. The end 
                      product was their key showcase at ProMat and will be their main product focus for 2023.
                    </p>                                 
                    <div className={expStyles.collapseContainer}>
                        <button onClick={() => setAddOn(false)}>
                            <span className={expStyles.collapser}>
                                <p>Collapse</p>
                                <Triangle className={expStyles.collapseTriangle} />
                            </span>
                        </button>
                    </div>
                </div>
                <div className={clsx({
                  [expStyles.addOnContainer] : true,
                  [expStyles.selectedAddOn] : desc.curr === 2,                 
                  [expStyles.showAddOnContainer] : desc.curr === 2 && showAddOn})}>
                    <p className={expStyles.addOnDesc}>
                      The final model was an ensemble LGBM with an autoencoder to help filter out noise. The model drew inspiration 
                      from Makridakis Competition winners and similar Kaggle competition winners. Key data leakage and survivorship 
                      bias issues were addressed during the post-processing of the data and using time-series validation splits. 
                      The ending model had 0.8 AUC and was successful in clearing in-house developed backtesting software. The project 
                      had to be retired due to time constraints and unusual weight activation patterns during volatile time periods.
                    </p>  
                    <div className={expStyles.collapseContainer}>
                        <button onClick={() => setAddOn(false)}>
                            <span className={expStyles.collapser}>
                                <p>Collapse</p>
                                <Triangle className={expStyles.collapseTriangle} />
                            </span>
                        </button>
                    </div>           
                </div>
            </div>
            <div className={expStyles.dotContainer2}>
              <ExpCircles
                desc={desc}
                setDesc={setDesc}
                showAddOn={showAddOn}
                closeAddOnFirst={closeAddOnFirst}/>
            </div>
        </div>
      </>
    )
}