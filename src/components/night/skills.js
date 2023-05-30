import skillsStyles from 'src/styles/night/Skills.module.css';
import VerticalBreak from 'public/night/vertical_break.svg';
const verticalBreak = () => <VerticalBreak />;

export default function Skills() {
    return (
      <>
        <div className={skillsStyles.skillsContainer}>
          <div className={skillsStyles.front}>
              <h4><em>Front-End</em></h4>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <h4 className={skillsStyles.libTitle}>Libraries / Frameworks</h4>
              <p>React / Next.js</p>
              <p>CSS Modules</p>
          </div>
          <VerticalBreak className={skillsStyles.vline1} />
          <div className={skillsStyles.data}>
              <h4><em>Data Analytics</em></h4>
              <p>Python</p>
              <p>SQL / PostgreSQL</p>
              <p>MATLAB</p>
              <p>R</p>
              <h4 className={skillsStyles.libTitle}>Libraries</h4>
              <p>Tensorflow / PyTorch</p>
              <p>Numpy / Pandas / Polars</p>
              <p>Dash / Seaborn / MatPlotLib</p>
          </div>
          <VerticalBreak className={skillsStyles.vline2} />
          <div className={skillsStyles.back}>
              <h4><em>Back-End</em></h4>
              <p>Rust</p>
              <p>C</p>
              <h4 className={skillsStyles.libTitle}>Crates</h4>
              <p>Diseal</p>
              <p>Tokio</p>
              <p>Crossbeam</p>
          </div>
        </div>
      </>
    )
}