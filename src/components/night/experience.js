// CSS
import experienceStyles from 'src/styles/night/Experience.module.css';

//SVGs
import HorizontalBreak from 'public/night/horizontal_break.svg';
const horizontalBreak = () => <HorizontalBreak />;

export default function Experience() {
    return (
      <>
        <div className={experienceStyles.flow}>
            <div className={experienceStyles.title}>
                <h2>Flow DB</h2>
                <h3>Full Stack Developer</h3>
            </div>
            <div className={experienceStyles.desc}>
                <p>
                  EDC system for human clinical trials. SQL database with a focus on speed and 
                  cloud security built in Rust. Currently working on the company dashboard design 
                  back-end web server. Expected to query the SQL database 2x-3x faster than EDC 
                  competitors.
                </p>
            </div>
        </div>
        <HorizontalBreak className={experienceStyles.horizontalBreak} />
        <div className={experienceStyles.pi}>
            <div className={experienceStyles.title}>
                <h2>Portable Intelligence</h2>
                <h3>Lead Data Analyst</h3>
            </div>
            <div className={experienceStyles.desc}>
                <p>
                  Early product data analysis on Kumi Canada&#39;s forklift drivers and task management 
                  for warehousing. Created a full data processing pipeline and client facing analysis 
                  dashboard. Dashboard enables managers to make keys decisions on task and driver 
                  productivity during quarterly reports. Recently, the dashboard was Portable 
                  Intelligence&#39;s main attraction showcased at Chicago&#39;s ProMat 2023.
                </p>
            </div>
        </div>
        <HorizontalBreak className={experienceStyles.horizontalBreak} />
        <div className={experienceStyles.dt}>
            <div className={experienceStyles.title}>
                <h2>Derivative Trader</h2>
                <h3>Data Scientist</h3>
            </div>
            <div className={experienceStyles.desc}>
                <p>
                  Lead a team of 3 data scientists for a derivative market trader. Setup 15mm data points 
                  on a Google Cloud Bucket server using NoSQL. Utilized Neptune model tracking and tested 
                  over 20 different machine learning and statistical algorithms. Large models included LGBM, 
                  Convolutions, Autoencoders, and Attention ensembles.
                </p>
            </div>
        </div>  
      </>
    )
}