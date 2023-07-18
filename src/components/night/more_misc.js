// CSS
import moreStyles from 'src/styles/night/More.module.css';

export default function Practicals() {
    return (
      <>
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
                My pen name is 	&ldquo;muchcreative&rdquo;. I am 25 years old and I want to be a strong developer. 
                This year I am:
            </p>
            <ol className={moreStyles.goals}>
              <li>Focusing on back-end development and improving data ETL pipeline skills, especially in Rust</li>
              <li>Networking with coders through Toronto technology conferences</li>
              <li>Attending Toronto developer sessions on Saturdays through meetups.com</li>
            </ol>
        </div>
        <hr className={moreStyles.contactBreak}></hr>
      </>
    )
}