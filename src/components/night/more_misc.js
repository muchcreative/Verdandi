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
                My pen name is 	&ldquo;muchcreative&rdquo;. I am 25 years old and I want to be a decent developer. 
                This year I am:
            </p>
            <ol className={moreStyles.goals}>
              <li>Focusing on back-end development, especially in Rust proficiency</li>
              <li>Networking with more coders through events and Toronto technology conferences</li>
              <li>You can find me on most Saturdays at 1pm for the Morning Code Meetup at Creed&#39;s Coffee in Toronto</li>
            </ol>
        </div>
        <hr className={moreStyles.contactBreak}></hr>
      </>
    )
}