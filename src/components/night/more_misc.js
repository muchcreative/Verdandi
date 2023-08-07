// CSS
import moreStyles from 'src/styles/night/More.module.css';

export default function MoreMisc() {
    return (
      <>
        <div className={moreStyles.miscContainer}>
            <h4 className={moreStyles.pracTitle}>Other Practicals</h4>
            <div className={moreStyles.listContainer}>
                <ol className={moreStyles.practicalsList}>
                    <li>Git</li>
                    <li>Hugging Face</li>
                    <li>Neptune</li>
                    <li>Google Cloud Buckets</li>
                    <li>Figma</li>
                </ol>
                <ol className={moreStyles.practicalsList}>
                    <li>Solidworks</li>
                    <li>Bluebeam</li>
                    <li>Wix</li>
                    <li>Excel</li>
                    <li>Azure</li>
                </ol>
            </div>
            <h4 className={moreStyles.currTitle}>Current</h4>
            <p className={moreStyles.about}>
                My pen name is &ldquo;muchcreative&rdquo;. I am 25 years old and I want to be a strong developer. 
                This year I am:
            </p>
            <ol className={moreStyles.current}>
                <li>Focusing on back-end development and improving data ETL pipeline skills, especially in Rust</li>
                <li>Networking with coders through Toronto technology conferences</li>
                <li>Attending Toronto developer sessions on Saturdays through meetups.com</li>
            </ol>
        </div>
        <hr className={moreStyles.contactBreak}></hr>
      </>
    )
}