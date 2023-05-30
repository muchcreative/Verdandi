import moreStyles from 'src/styles/night/More.module.css';
import HorizontalBreak from 'public/night/horizontal_break.svg';
const horizontalBreak = () => <HorizontalBreak />;

// Options to useState and useEffect to address on click motions
// Start with something simple, highligh on click

export default function More() {
    return (
      <>
        <h2 className={moreStyles.title}>Read More</h2>
        <div className={moreStyles.buttons}>
            <button>Front-End</button>
            <button>Data Analytics</button>
            <button>Back-End</button>
            <button>RenderLabs</button>
        </div>
        <HorizontalBreak className={moreStyles.horizontalBreak}/>
        <div className={moreStyles.descriptions}>
            <p id='front-desc' className={moreStyles.frontDesc}>
              Website built in Next.js and assets designed in Figma. Built and 
              lead the design on the analytics dashboard for Portable Intelligence. 
              Currently building the dashboard and later the website for Flow DB. 
              Over 1 year of experience in front-end development.
            </p>
            <p id='data-desc' className={moreStyles.dataDesc}>
              Starting learning and competition in Kaggle competitions in university. 
              Multiple data scientist certificates and courses taken. Lead multiple 
              teams in machine learning related projects. Built front facing client 
              dashboards at Portable Intelligence. Over 3-4 years of experience 
              building models.
            </p>
            <p id='back-desc' className={moreStyles.backDesc}>
              Started back-end development with a university project, leading a team 
              to develop a robot navigation algorithm in C++ to a 90% score. Currently 
              developing a SQL database interaction with Rust using Diseal for Flow DB. 
              1 year of experience in back-end development.
            </p>
            <p id='rl-desc' className={moreStyles.rlDesc}>
              Blurb
            </p>
        </div>
        <div>
            <h5>Other Practicals</h5>
            <ol>
                <li>Git</li>
                <li>Hugging Face</li>
                <li>Figma</li>
                <li>Solidworks</li>
                <li>Azure App Deployment</li>
            </ol>
        </div>
        <div>
            <h5>This Year</h5>
            <p>
              Focus on back-end development especially in Rust proficiency. 
              Get AWS certified in Application Architecture. Network with 
              coders through events. Currently help out coders on the weekend 
              through meetups.com and help run the discord to attend coding 
              events in Toronto.
            </p>
        </div>
      </>
    )
}