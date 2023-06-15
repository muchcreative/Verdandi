// Next.js
import { useState, useEffect } from 'react';

// CSS
import expStyles from 'src/styles/night/Experience.module.css';

//SVGs
import Moon from 'public/night/moon.svg'
import Mountains from 'public/night/mountains.svg'
import ExpMotif from 'public/night/exp_motif.svg'

// External Libs
import { clsx } from 'clsx';

const moon = () => <Moon />;
const mountains = () => <Mountains />;
const expMotif = () => <ExpMotif />;

export default function Experience() {
    const [selected, setSelected] = useState(-1);
    
    useEffect(() => {
      const dtDesc = document.querySelector('#dt');
      
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      };

      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              setSelected(0); 
              observer.unobserve(dtDesc);  // Close observer after done
          }
        })
      }

      let observer = new IntersectionObserver(callback, options);
      observer.observe(dtDesc);
    }, [])

    return (
      <>
        <h2 className={expStyles.expHeader}>Experience</h2>
        <div className={expStyles.art}>
            <Moon className={expStyles.moon}/>
            <Mountains className={expStyles.mountains} />
        </div>
        <div>
            <div id='flow' className={expStyles.flow}>
                <div className={expStyles.title}>
                    <h2>Flow DB</h2>
                    <h3>Developer</h3>
                </div>
                <div className={expStyles.desc}>
                    <p>
                      Flow is a cloud database for small to medium-sized human clinical trials. Flow aims to innovate from 
                      traditional EDCs (Electronic Data Capture Systems) through an aggressive subscription-based pricing 
                      structure and a modern approach to the user-client experience design philosophy.&nbsp;&nbsp;
                      <button className={expStyles.expander} onClick={() => setSelected(0)}>What is our approach?</button>
                    </p>
                </div>
                <div className={clsx({
                  [expStyles.addonContainer] : true,
                  [expStyles.closeContainer] : selected != 0})}>
                    <ExpMotif className={clsx({
                      [expStyles.motif] : true,
                      [expStyles.selectedMotif] : selected === 0})}/>
                    <p className={clsx({
                      [expStyles.addonDesc]: true,
                      [expStyles.selectedDesc] : selected === 0})}>
                      Flow will be built using Rust, Diesel, and PostgreSQL to boast a 5-10x SQL and navigational speed boost 
                      compared to other leading competitors and benchmarks. An example of Rust&#39;s natural speed comparison 
                      and GPU concurrency with other top software products is Polars with a 10x speed boost and SWC with a 20x 
                      speed boost over their leading competitors. With a modern UI and a well-designed database, Flow will 
                      completely change the way EDCs are used.
                    </p>                 
                </div> 
            </div>
        </div>
        <hr className={clsx({
          [expStyles.horizontalBreak] : true,
          [expStyles.expandBreak] : selected === 0 })}></hr>
        <div>
            <div id='pi' className={clsx({
              [expStyles.pi] : true,
              [expStyles.piSelected] : selected === 1,
              [expStyles.piDown] : selected === 0})}>
                <div className={expStyles.title}>
                    <h2>Portable Intelligence</h2>
                    <h3>Lead Data Analyst</h3>
                </div>
                <div className={expStyles.desc}>
                    <p>
                      Wanting to utilize machine learning to help stand out amongst competitors, I was brought in to consult 
                      on machine learning paths and complete early product data analysis. During my time there I was provided 
                      with a team of developers to consult with and speak on starting machine learning and data analysis within 
                      their company. The goal was that in 3 months we would have a product to showcase for Chicago&#39;s 
                      ProMat 2023.&nbsp;&nbsp;
                      <button className={expStyles.expander} onClick={() => setSelected(1)}>Here was our solution.</button>
                    </p>
                </div>
                <div className={clsx({
                  [expStyles.addonContainer] : true,
                  [expStyles.closeContainer] : selected != 1})}>
                    <p className={clsx({
                      [expStyles.addonDesc]: true,
                      [expStyles.selectedDesc] : selected === 1})}>
                      Early data was provided from their product launch for a warehouse monitoring system for Kumi Canada, 
                      a tier-1 automotive supplier. Created a full data processing pipeline and client-facing analysis 
                      dashboard. The dashboard enables managers to make key decisions on tasks and driver productivity 
                      during quarterly reports.
                    </p>             
                    <ExpMotif className={clsx({
                      [expStyles.motif] : true,
                      [expStyles.selectedMotif] : selected === 1})}/>    
                </div>
            </div>
        </div>
        <hr className={clsx({
          [expStyles.horizontalBreak] : true,
          [expStyles.expandBreak] : [0, 1].includes(selected)})}></hr>
        <div>
            <div id='dt' className={clsx({
              [expStyles.dt] : true,              
              [expStyles.dtSelected] : selected === 2,
              [expStyles.dtDown] : [0, 1].includes(selected)})}>
                <div className={expStyles.title}>
                    <h2>Derivative Trader</h2>
                    <h3>Lead Data Scientist</h3>
                </div>
                <div className={expStyles.desc}>
                    <p>
                      Lead a team of 3 data scientists for a derivative market trader. Created a NoSQL database set up for over 15mm 
                      data points on a Google Cloud Bucket server. Utilized Neptune model tracking and tested over 20 different machine 
                      learning and statistical algorithms.&nbsp;&nbsp;
                      <button className={expStyles.expander} onClick={() => setSelected(2)}>These were our results.</button>
                    </p>
                </div>
                <div className={clsx({
                  [expStyles.addonContainer] : true,
                  [expStyles.closeContainer] : [0, 1].includes(selected)})}>
                    <ExpMotif className={clsx({
                      [expStyles.motif] : true,
                      [expStyles.selectedMotif] : selected === 2})}/>
                    <p className={clsx({
                      [expStyles.addonDesc]: true,
                      [expStyles.selectedDesc] : selected === 2})}>
                      The final model was an ensemble LGBM with an autoencoder to help filter out noise modeled after Makridakis 
                      Competition winners. Data leakage and survivorship bias was cleared out during the post-processing of the 
                      data and using time-series validation splits. The ending model had 0.8 AUC and was successful in clearing 
                      in-house developed backtesting software. However, I was skeptical about overfitting during certain time 
                      periods due to a lack of data among the SP500. This along with consistent unusually high-weight activations 
                      on the first and last-time timestamps, lead to the project being scrapped.
                    </p>                 
                </div>
            </div>
        </div>
      </>
    )
}