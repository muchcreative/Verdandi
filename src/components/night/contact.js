// Next.js
import Link from 'next/link';

// CSS
import contactStyles from 'src/styles/night/Contact.module.css';
import Form from 'src/components/night/form.js';

// SVGs
import GitHubLogo from 'public/night/github_logo.svg';
const githubLogo = () => <GitHubLogo />;

export default function Contact() {
  return (
    <>
      <h6>
        Together,<br></br>let&#39;s build something&nbsp;
        <em className={contactStyles.different}>different.</em>
      </h6>
      <Form />
      <footer>
          <div className={contactStyles.logos}>
              <Link href='https://www.linkedin.com/in/robby-lem-14ab97158/'>
                  <p className={contactStyles.linkedinText}>in</p>
              </Link>
              <Link href='https://github.com/muchcreative'>
                  <GitHubLogo className={contactStyles.githubLogo}/>
              </Link>
          </div>
      </footer>
    </>
  )
}