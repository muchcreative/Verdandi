// CSS
import mainStyles from 'src/styles/night/Main.module.css';

// SVGs
import Moon from 'public/night/moon.svg'
import Mountains from 'public/night/mountains.svg'

const moon = () => <Moon />;
const mountains = () => <Mountains />;

export default function Main() {
    return (
      <>
        <header className={mainStyles.hookContainer}>
            <h1 className={mainStyles.hookLine}>
                Because boring ideas<br></br>make boring&nbsp;<em>products</em>
            </h1>
        </header>
        <div className={mainStyles.art}>
            <Moon className={mainStyles.moon}/>
            <Mountains className={mainStyles.mountains} />
        </div>
      </>
    )   
}