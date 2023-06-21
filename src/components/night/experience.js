// Next.js
import { useState } from 'react';

// CSS
import expStyles from 'src/styles/night/Experience.module.css';

//SVGs
import MMS from 'public/night/mms.svg'
import ExpMotif from 'public/night/exp_motif.svg'
import Triangle from 'public/night/triangle.svg'

// External Libs
import { clsx } from 'clsx';

const expMotif = () => <ExpMotif />;
const mms = () => <MMS />;
const triangle = () => <Triangle />;

export default function Experience() {
    const [expand, setExpanded] = useState({
                                    desc0: false,
                                    desc1: false,
                                    desc2: false,
                                  });
                                  
    return (
      <>
        <div className={expStyles.titleContainer}>
          <h2>Experience</h2>
          <hr className={expStyles.titleUnderline}></hr>
        </div>
        <div className={expStyles.art}>
            <MMS className={expStyles.mms}/>
        </div>
        <div className={expStyles.expContainer}>
            <div id='flow' className={expStyles.flow}>
                <div className={expStyles.title}>
                    <h4>Flow DB</h4>
                    <p>Full-Stack Developer</p>
                </div>
                <div className={expStyles.desc}>
                    <p>
                      Flow is a cloud database for small to medium-sized human clinical trials. Flow aims to innovate from 
                      traditional EDCs (Electronic Data Capture Systems) through an aggressive subscription-based pricing 
                      structure and a modern approach to the user-client experience design philosophy.                      
                    </p>
                    <div className={clsx({
                        [expStyles.expandContainer]: true,
                        [expStyles.hideExpander]: expand.desc0})}>
                      <button onClick={() => setExpanded({desc0: !expand.desc0})}>
                        <span className={expStyles.expander}>
                          <p>What&#39;s our approach?</p>
                          <Triangle className={expStyles.expandTriangle} />
                        </span>
                      </button>
                    </div>
                </div>
                <div className={clsx({
                  [expStyles.addOnContainer] : true,
                  [expStyles.openContainer] : expand.desc0,
                  [expStyles.closeContainer] : !expand.desc0})}>
                    <div className={expStyles.addOnFlex}>
                        <p className={expStyles.addOnDesc}>
                          Flow will be built using Rust, Diesel, and PostgreSQL to boast a 5-10x SQL and navigational speed boost 
                          compared to other leading competitors and benchmarks. An example of Rust&#39;s natural speed comparison 
                          and GPU concurrency with other top software products is Polars with a 10x speed boost and SWC with a 20x 
                          speed boost over their leading competitors. With a modern UI and a well-designed database, Flow will 
                          completely change the way EDCs are used.
                        </p>
                        <ExpMotif className={clsx({
                          [expStyles.motif] : true,
                          [expStyles.selectedMotif] : expand.desc0})}/>  
                    </div>
                    <div className={expStyles.collapseContainer}>
                        <button onClick={() => setExpanded({desc0: !expand.desc0})}>
                          <span className={expStyles.collapser}>
                            <p>Collapse</p>
                            <Triangle className={expStyles.collapseTriangle} />
                          </span>
                        </button>
                    </div>
                </div> 
            </div>
            <hr className={clsx({
              [expStyles.horizontalBreak] : true,
              [expStyles.expandBreak] : expand.desc0})}></hr>
            <div id='pi' className={clsx({
              [expStyles.pi] : true,
              [expStyles.piSelected] : expand.desc1,
              [expStyles.piDown] : expand.desc0})}>
                <div className={expStyles.title}>
                    <h4>Portable Intelligence</h4>
                    <p>Lead Data Analyst</p>
                </div>
                <div className={expStyles.desc}>
                    <p>
                      Wanting to utilize machine learning to help stand out amongst competitors, I was brought in to consult 
                      on machine learning paths and complete early product data analysis. During my time there I was provided 
                      with a team of developers to consult with and speak on starting machine learning and data analysis within 
                      their company. The goal was that in 3 months we would have a product to showcase for Chicago&#39;s 
                      ProMat 2023.
                    </p>
                    <div className={clsx({
                        [expStyles.expandContainer]: true,
                        [expStyles.hideExpander]: expand.desc1})}>
                        <button onClick={() => setExpanded({desc1: !expand.desc1})}>
                            <span className={expStyles.expander}>
                                <p>This was our solution.</p>
                                <Triangle className={expStyles.expandTriangle} />
                            </span>
                        </button>
                    </div>
                </div>
                <div className={clsx({
                  [expStyles.addOnContainer] : true,
                  [expStyles.openContainer] : expand.desc1,
                  [expStyles.closeContainer] : !expand.desc1})}>
                    <div className={expStyles.addOnFlex}>
                        <p className={expStyles.addOnDesc}>
                          Early data was provided from their product launch for a warehouse monitoring system for Kumi Canada, 
                          a tier-1 automotive supplier. Created a full data processing pipeline and client-facing analysis 
                          dashboard. The dashboard enables managers to make key decisions on tasks and driver productivity 
                          during quarterly reports.
                        </p>             
                        <ExpMotif className={clsx({
                          [expStyles.motif] : true,
                          [expStyles.selectedMotif] : expand.desc1})}/>    
                    </div>
                    <div className={expStyles.collapseContainer}>
                        <button onClick={() => setExpanded({desc1: !expand.desc1})}>
                          <span className={expStyles.collapser}>
                            <p>Collapse</p>
                            <Triangle className={expStyles.collapseTriangle} />
                          </span>
                        </button>
                    </div>
                </div>
            </div>
            <hr className={clsx({
              [expStyles.horizontalBreak] : true,
              [expStyles.expandBreak] : expand.desc0 || expand.desc1})}></hr>
            <div id='dt' className={clsx({
              [expStyles.dt] : true,              
              [expStyles.dtSelected] : expand.desc2,
              [expStyles.dtDown] : expand.desc0 || expand.desc1})}>
                <div className={expStyles.title}>
                    <h4>Derivative Trader</h4>
                    <p>Lead Data Scientist</p>
                </div>
                <div className={expStyles.desc}>
                    <p>
                      Lead a team of 3 data scientists for a derivative market trader. Created a NoSQL database set up for over 15mm 
                      data points on a Google Cloud Bucket server. Utilized Neptune model tracking and tested over 20 different machine 
                      learning and statistical algorithms.                      
                    </p>
                    <div className={clsx({
                        [expStyles.expandContainer]: true,
                        [expStyles.hideExpander]: expand.desc2})}>
                        <button onClick={() => setExpanded({desc2: !expand.desc2})}>
                            <span className={expStyles.expander}>
                                <p>These were our results.</p>
                                <Triangle className={expStyles.expandTriangle} />
                            </span>
                        </button>
                    </div>
                </div>
                <div className={clsx({
                  [expStyles.addOnContainer] : true,
                  [expStyles.openContainer] : expand.desc2,
                  [expStyles.closeContainer] : !expand.desc2})}>
                    <div className={expStyles.addOnFlex}>
                        <p className={expStyles.addOnDesc}>
                          The final model was an ensemble LGBM with an autoencoder to help filter out noise modeled after Makridakis 
                          Competition winners. Data leakage and survivorship bias was cleared out during the post-processing of the 
                          data and using time-series validation splits. The ending model had 0.8 AUC and was successful in clearing 
                          in-house developed backtesting software. However, I was skeptical about overfitting during certain time 
                          periods due to a lack of data among the SP500. This along with consistent unusually high-weight activations 
                          on the first and last-time timestamps, lead to the project being scrapped.
                        </p> 
                        <ExpMotif className={clsx({
                          [expStyles.motif] : true,
                          [expStyles.selectedMotif] : expand.desc2})}/>               
                    </div>
                    <div className={expStyles.collapseContainer}>
                        <button onClick={() => setExpanded({desc2: !expand.desc2})}>
                          <span className={expStyles.collapser}>
                            <p>Collapse</p>
                            <Triangle className={expStyles.collapseTriangle} />
                          </span>
                        </button>
                    </div>
                </div>
            </div>
            <hr className={clsx({
              [expStyles.horizontalBreak] : true,
              [expStyles.expandBreak] : expand.desc0 || expand.desc1 || expand.desc2})}></hr>
        </div>
      </>
    )
}