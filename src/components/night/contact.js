// Next.js
import { useState, useEffect } from 'react';
import Link from 'next/link';

// CSS
import contactStyles from 'src/styles/night/Contact.module.css';

// Page Components
import ContactForm from 'src/components/night/contact_form.js';

// SVGs
import GitHubLogo from 'public/night/github_logo.svg';

// External Libs
import { clsx } from 'clsx';

const githubLogo = () => <GitHubLogo />;

export default function Contact() {
  const [seenTitle, setSeen] = useState(false);

  useEffect(() => {
    const contactTitle = document.querySelector('#contact-title');

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setSeen(true);
        }
      })
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(contactTitle);
  }, [])

  return (
    <>
      <h6 id='contact-title' className={contactStyles.title}>
        Together,<br></br>let&#39;s create something&nbsp;
        <em className={clsx({
          [contactStyles.different]: true,
          [contactStyles.animateDifferent] : seenTitle})}>different.</em>
      </h6>
      <ContactForm />
      <footer>
          <div className={contactStyles.logos}>
              <Link title='To my LinkedIn' href='https://www.linkedin.com/in/robby-lem-14ab97158/'>
                  <p className={contactStyles.linkedinText}>in</p>
              </Link>
              <Link title='To my GitHub' href='https://github.com/muchcreative'>
                  <GitHubLogo className={contactStyles.githubLogo}/>
              </Link>
          </div>
      </footer>
    </>
  )
}