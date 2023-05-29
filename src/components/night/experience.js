import nightStyles from 'src/styles/night/Night.module.css';
import LineBreak from 'public/night/line_break.svg';
const lineBreak = () => <LineBreak />;

export default function Experience() {
    return (
      <>
        <div>
            <div>
                <h2>Flow DB</h2>
                <h3>Full Stack Developer</h3>
            </div>
            <div>
                <p>Thingy</p>
            </div>
        </div>
        <LineBreak className={nightStyles.lineBreak} />
        <div>
            <div>
                <p>Thingy</p>
            </div>
            <div>
                <h2>Portable Intelligence</h2>
                <h3>Lead Data Analyst</h3>
            </div>
        </div>
        <LineBreak className={nightStyles.lineBreak} />
        <div>
            <div>
                <h2>Derivative Trader</h2>
                <h3>Data Scientist</h3>
            </div>
            <div>
                <p>Thingy</p>
            </div>
        </div>  
      </>
    )
}