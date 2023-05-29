import nightStyles from 'src/styles/night/Night.module.css';
import HorizontalBreak from 'public/night/line_break.svg';
const horizontalBreak = () => <HorizontalBreak />;

export default function Skills() {
    return (
      <>
        <div>
            <h4>Front-End</h4>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
            <h4>Libraries / Frameworks</h4>
            <p>React / Next.js</p>
        </div>
        <HorizontalBreak className={nightStyles.lineBreak} />
        <div>
            <h4>Data Analytics</h4>
            <p>Python</p>
            <p>SQL / PostgreSQL</p>
            <p>MATLAB</p>
            <p>R</p>
            <h4>Libraries</h4>
            <p>Tensorflow / PyTorch</p>
            <p>Numpy / Pandas / Polars</p>
            <p>Plotly / Seaborn / MatPlotLib</p>
        </div>
        <HorizontalBreak className={nightStyles.lineBreak} />
        <div>
            <h4>Back-End</h4>
            <p>Rust</p>
            <p>C</p>
            <h4>Crates</h4>
            <p>Diseal</p>
            <p>Tokio</p>
            <p>Crossbeam</p>
        </div>  
      </>
    )
}