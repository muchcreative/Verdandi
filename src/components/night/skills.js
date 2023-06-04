// Next.js
import { useState, useEffect } from 'react';

// CSS
import skillsStyles from 'src/styles/night/Skills.module.css';

// SVGs
import VerticalBreak from 'public/night/vertical_break.svg';
const verticalBreak = () => <VerticalBreak />;

// External Libs
import { clsx } from 'clsx';

export default function Skills() {
    const [show, setShow] = useState(false);
    const showSkills = clsx({ [skillsStyles.showSkills] : show });

    useEffect(() => {
        const frontElement = document.querySelector('#front')
        
        let options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.25,
        };

        const callback = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setShow(true);  // Once setShow(true) will not disappear again
            }
          })
        }

        let observer = new IntersectionObserver(callback, options);
        observer.observe(frontElement);
    }, [])

    return (
      <>
        <div className={skillsStyles.skillsContainer}>
            <div id='front' className={skillsStyles.front}>
                <h4 className={showSkills}>
                  <em>Front-End</em>
                </h4>
                <p className={showSkills}>JavaScript</p>
                <p className={showSkills}>HTML</p>
                <p className={showSkills}>CSS</p>
                <h4 className={clsx({
                  [skillsStyles.libTitle] : true,
                  [skillsStyles.showSkills] : show})}>Libraries / Frameworks</h4>
                <p className={showSkills}>React / Next.js</p>
                <p className={showSkills}>CSS Modules</p>
                <p className={showSkills}>Dash</p>
            </div>
            <VerticalBreak id='vline1' className={clsx({
              [skillsStyles.vline1] : true,
              [skillsStyles.vline1Show] : show})} />
            <div id='data' className={skillsStyles.data}>
                <h4 className={showSkills}>
                  <em>Data Analytics</em>
                </h4>
                <p className={showSkills}>Python</p>
                <p className={showSkills}>SQL / PostgreSQL</p>
                <p className={showSkills}>MATLAB</p>
                <p className={showSkills}>R</p>
                <h4 className={clsx({
                  [skillsStyles.libTitle] : true,
                  [skillsStyles.showSkills] : show})}>Libraries</h4>
                <p className={showSkills}>Tensorflow / PyTorch</p>
                <p className={showSkills}>Numpy / Pandas / Polars</p>
                <p className={showSkills}>Plotly / Seaborn / MatPlotLib</p>
            </div>
            <VerticalBreak id='vline2' className={clsx({
              [skillsStyles.vline2] : true,
              [skillsStyles.vline2Show] : show})} />
            <div id='back' className={skillsStyles.back}>
                <h4 className={showSkills}>
                  <em>Back-End</em>
                </h4>
                <p className={showSkills}>Rust</p>
                <p className={showSkills}>C</p>
                <h4 className={clsx({
                  [skillsStyles.libTitle] : true,
                  [skillsStyles.showSkills] : show})}>Crates</h4>
                <p className={showSkills}>Diseal</p>
                <p className={showSkills}>Tokio</p>
                <p className={showSkills}>Crossbeam</p>
            </div>
        </div>
      </>
    )
}