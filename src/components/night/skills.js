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
    const [show0, setShow0] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [seenTitle, setSeen] = useState(false);

    const showCol0 = clsx({ [skillsStyles.showSkills] : show0 });
    const showCol1 = clsx({ [skillsStyles.showSkills] : show1 });
    const showCol2 = clsx({ [skillsStyles.showSkills] : show2 });

    useEffect(() => {
        const frontSkills = document.querySelector('#front-skills');
        const dataSkills = document.querySelector('#data-skills');
        const backSkills = document.querySelector('#back-skills');
        
        let options0 = {
          root: null,
          rootMargin: "0px",
          threshold: 0.20,
        };

        let options1 = {
          root: null,
          rootMargin: "0px",
          threshold: 0.25,
        };

        let options2 = {
          root: null,
          rootMargin: "0px",
          threshold: 0.30,
        };


        const callback0 = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setShow0(true);  // Once setShow(true) will not disappear again
            }
          })
        };

        const callback1 = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setShow1(true);
            }
          })
        };

        const callback2 = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setShow2(true);
            }
          })
        };

        let observer0 = new IntersectionObserver(callback0, options0);
        let observer1 = new IntersectionObserver(callback1, options1);
        let observer2 = new IntersectionObserver(callback2, options2);
        observer0.observe(frontSkills);
        observer1.observe(dataSkills);
        observer2.observe(backSkills);
    }, [])

    useEffect(() => {
      const skillsTitle = document.querySelector('#skills-title');

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
      observer.observe(skillsTitle);
    }, [])

    return (
      <>
        <div id='skills-title' className={skillsStyles.titleContainer}>
          <h2>Skills</h2>
          <hr className={clsx({
            [skillsStyles.titleLine] : true,
            [skillsStyles.animateTitleLine] : seenTitle})}></hr>
        </div>
        <div id='skills-grid' className={skillsStyles.skillsContainer}>
            <div id='front-skills' className={skillsStyles.front}>
                <h3 className={showCol0}>
                    Front-End
                </h3>
                <p className={showCol0}>JavaScript / TypeScript</p>
                <p className={showCol0}>HTML</p>
                <p className={showCol0}>CSS</p>
                <h3 className={clsx({
                  [skillsStyles.libTitle] : true,
                  [skillsStyles.showSkills] : show0})}>Libraries / Frameworks</h3>
                <p className={showCol0}>React / Next.js</p>
                <p className={showCol0}>CSS Modules</p>
                <p className={showCol0}>Dash</p>
            </div>
            <VerticalBreak id='vline1' className={clsx({
              [skillsStyles.vline1] : true,
              [skillsStyles.vline1Show] : show0})} />
            <div id='data-skills' className={skillsStyles.data}>
                <h3 className={showCol1}>
                    Data Analytics
                </h3>
                <p className={showCol1}>Python</p>
                <p className={showCol1}>SQL / PostgreSQL</p>
                <p className={showCol1}>MATLAB</p>
                <p className={showCol1}>R</p>
                <h3 className={clsx({
                  [skillsStyles.libTitle] : true,
                  [skillsStyles.showSkills] : show1})}>Libraries</h3>
                <p className={showCol1}>Tensorflow / PyTorch</p>
                <p className={showCol1}>Numpy / Pandas / Polars</p>
                <p className={showCol1}>Plotly / Seaborn / MatPlotLib</p>
            </div>
            <VerticalBreak id='vline2' className={clsx({
              [skillsStyles.vline2] : true,
              [skillsStyles.vline2Show] : show1})} />
            <div id='back-skills' className={skillsStyles.back}>
                <h3 className={showCol2}>
                    Back-End
                </h3>
                <p className={showCol2}>Rust</p>
                <p className={showCol2}>C</p>
                <h3 className={clsx({
                  [skillsStyles.libTitle] : true,
                  [skillsStyles.showSkills] : show2})}>Crates</h3>
                <p className={showCol2}>Diesel</p>
                <p className={showCol2}>Tokio</p>
                <p className={showCol2}>Crossbeam</p>
            </div>
        </div>
      </>
    )
}