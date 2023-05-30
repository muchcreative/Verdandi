import Image from 'next/image';
import mainStyles from 'src/styles/night/Main.module.css';

import Mountains from 'public/night/mountains.svg'
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
            <Image
              className={mainStyles.moon}
              src='/night/moon.png'
              alt='Moon'
              height={298}
              width={302}
            />
            <Mountains className={mainStyles.mountains} />
        </div>
      </>
    )   
}