// CSS
import expStyles from 'src/styles/night/Experience.module.css';

//SVGs
import Moon from 'public/night/moon.svg'
import Mountains from 'public/night/mountains.svg'

const moon = () => <Moon />;
const mountains = () => <Mountains />;

// Can the hr breaks be a little thinner?
// consider running experience through the mountain and overlaying it?

export default function Experience() {
    return (
      <>
        <h2 className={expStyles.expHeader}>Experience</h2>
        <div className={expStyles.art}>
            <Moon className={expStyles.moon}/>
            <Mountains className={expStyles.mountains} />
        </div>
        <div className={expStyles.flow}>
            <div className={expStyles.title}>
                <h2>Flow DB</h2>
                <h3>Lead Developer</h3>
            </div>
            <div className={expStyles.desc}>
                <p>
                  EDC system for human clinical trials. SQL database with a focus on speed and 
                  cloud security built in Rust. Currently working on the company dashboard design 
                  back-end web server. Expected to query the SQL database 2x-3x faster than EDC 
                  competitors.
                </p>
            </div>
        </div>
        <hr className={expStyles.horizontalBreak}></hr>
        <div className={expStyles.pi}>
            <div className={expStyles.title}>
                <h2>Portable Intelligence</h2>
                <h3>Lead Data Analyst</h3>
            </div>
            <div className={expStyles.desc}>
                <p>
                  Early product data analysis on Kumi Canada&#39;s forklift drivers and task management 
                  for warehousing. Created a full data processing pipeline and client facing analysis 
                  dashboard. Dashboard enables managers to make keys decisions on task and driver 
                  productivity during quarterly reports. Recently, the dashboard was Portable 
                  Intelligence&#39;s main attraction showcased at Chicago&#39;s ProMat 2023.
                </p>
            </div>
        </div>
        <hr className={expStyles.horizontalBreak}></hr>
        <div className={expStyles.dt}>
            <div className={expStyles.title}>
                <h2>Derivative Trader</h2>
                <h3>Lead Data Scientist</h3>
            </div>
            <div className={expStyles.desc}>
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