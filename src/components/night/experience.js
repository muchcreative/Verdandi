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


// SVG Art or something has to be animated
// You have to follow up with that introduction

// Can the hr breaks be a little thinner?
// can we add better alignments between divs
// Still feels very congested, font-sizing or what not
// Can use more spacing?
// Care because it animates them all
// ensure that flow's button is on the same line, prefer no line splitting

// First things first lets set only one as the changing slide

export default function Experience() {
    const [selection, setSelection] = useState(null)

    useEffect(() => {
        const scrollLag = 50;
        const secondHr = document.querySelector('#second-hr');
        const secondHrLoc = secondHr.getBoundingClientRect();

        const initialExpand = () => {
            if ((secondHrLoc.top + scrollLag <= window.scrollY) && (selection === null)) {
                setSelection(0);
            }
        }

        document.addEventListener("scroll", initialExpand);
    }, [selection])
    
    return (
      <>
        <h2 className={expStyles.expHeader}>Experience</h2>
        <div className={expStyles.art}>
            <Moon className={expStyles.moon}/>
            <Mountains className={expStyles.mountains} />
        </div>
        <div>
            <div className={expStyles.flow}>
                <div className={expStyles.title}>
                    <h2>Flow DB</h2>
                    <h3>Developer</h3>
                </div>
                <div className={expStyles.desc}>
                    <p>
                      Flow is a cloud database for small to medium-sized human clinical trials. Flow aims to innovate from 
                      traditional EDCs (Electronic Data Capture Systems) through an aggressive subscription-based pricing 
                      structure and a modern approach to the user-client experience design philosophy.&nbsp;&nbsp;
                      <button className={expStyles.expander} onClick={() => {setSelection(0)}}>How do we accomplish this?</button>
                    </p>
                </div> 
            </div>
            <div className={clsx({
              [expStyles.expandContainer] : true,
              [expStyles.hidden] : selection != 0,
              [expStyles.show] : selection === 0})}>
                <ExpMotif className={expStyles.motif}/>
                <p>
                  Flow will be built using Rust, Diesel, and PostgreSQL to boast a 5-10x SQL and navigational speed boost 
                  compared to other leading competitors and benchmarks. An example of Rust&#39;s natural speed comparison 
                  and GPU concurrency with other top software products is Polars with a 10x speed boost and SWC with a 20x 
                  speed boost over their leading competitors. With a modern UI and a well-designed database, Flow will 
                  completely change the way EDCs are used.
                </p>                 
            </div>
        </div>
        <hr className={expStyles.horizontalBreak}></hr>
        <div>
            <div className={expStyles.pi}>
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
                      <button className={expStyles.expander} onClick={() => {setSelection(1)}}>Here was our solution.</button>
                    </p>
                </div>
            </div>
            <div className={clsx({
              [expStyles.expandContainer] : true,
              [expStyles.hidden] : selection != 1,
              [expStyles.show] : selection === 1})}>
                <p>
                  Early data was provided from their product launch for a warehouse monitoring system for Kumi Canada, a tier-1 
                  automotive supplier. Created a full data processing pipeline and client-facing analysis dashboard. The dashboard 
                  enables managers to make key decisions on tasks and driver productivity during quarterly reports. 
                </p>
                <ExpMotif className={expStyles.motif}/>
            </div>
        </div>
        <hr id='second-hr' className={expStyles.horizontalBreak}></hr>
        <div>
            <div className={expStyles.dt}>
                <div className={expStyles.title}>
                    <h2>Derivative Trader</h2>
                    <h3>Lead Data Scientist</h3>
                </div>
                <div className={expStyles.desc}>
                    <p>
                      Lead a team of 3 data scientists for a derivative market trader. Created a NoSQL database set up for over 15mm 
                      data points on a Google Cloud Bucket server. Utilized Neptune model tracking and tested over 20 different machine 
                      learning and statistical algorithms.&nbsp;&nbsp;
                      <button className={expStyles.expander} onClick={() => {setSelection(2)}}>Results.</button>
                    </p>
                </div>
            </div>
            <div className={clsx({
              [expStyles.hidden] : selection != 2,
              [expStyles.show] : selection === 2})}>
                <ExpMotif className={expStyles.motif}/>
                <p>
                  The final model was an ensemble LGBM with an autoencoder to help filter out noise modeled after Makridakis 
                  Competition winners. Data leakage and survivorship bias was cleared out during the post-processing of the 
                  data and using time-series validation splits. The ending model had 0.8 AUC and was successful in clearing 
                  in-house developed backtesting software. However, I was skeptical about overfitting during certain time 
                  periods due to a lack of data among the SP500. This along with consistent unusually high-weight activations 
                  on the first and last-time timestamps, lead to the project being scrapped.
                </p>
            </div>
        </div>
      </>
    )
}