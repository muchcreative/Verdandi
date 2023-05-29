import nightStyles from 'src/styles/night/Night.module.css';
import LineBreak from 'public/night/line_break.svg';
const lineBreak = () => <LineBreak />;

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
        <LineBreak />
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