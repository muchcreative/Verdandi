import nightStyles from 'src/styles/night/Night.module.css';
import HorizontalBreak from 'public/night/horizontal_break.svg';
const horizontalBreak = () => <HorizontalBreak />;

export default function More() {
    return (
      <>
        <h2>Read More</h2>
        <div>
            <button>Front-End</button>
            <button>Data Analytics</button>
            <button>Back-End</button>
            <button>RenderLabs</button>
        </div>
        <HorizontalBreak />
        <div>
            <p>Blurb 1</p>
            <p>Blurb 2</p>
            <p>Blurb 3</p>
            <p>Blurb 4</p>
        </div>
        <div>
            <h4>Other Skills</h4>
            <ol>
                <li>Git</li>
                <li>Hugging Face</li>
                <li>Figma</li>
                <li>Solidworks</li>
                <li>Azure Cloud Development</li>
            </ol>
        </div>
        <div>
            <h4>This Year</h4>
            <p>Blurb about goals</p>
        </div>
        
      </>
    )
}