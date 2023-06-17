// Next.js
import { useState, useEffect } from 'react';

// CSS
import formStyles from 'src/styles/night/Form.module.css';

// External Libs
import { clsx } from 'clsx';

export default function Form() {
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
      setTimeout(() => {setSubmitted(false);}, 5000);
    }, [submitted])

    return (
      <>
        <form
          id='contact-form'
          action='/api/email'
          onSubmit={() => setSubmitted(true)}
          method='post'>
            <div className={formStyles.formGrid}>
                <div className={formStyles.nameArea}>
                  <label htmlFor='name' hidden>Name</label>
                <input
                  id='name'
                  className={formStyles.nameInput}
                  type='text'
                  name='name'
                  placeholder='Name'
                  required />
            </div>
            <div className={formStyles.emailArea}>
                <label htmlFor='email' hidden>Email</label>
                <input
                  id='email'
                  className={formStyles.emailInput}
                  type='email'
                  name='email'
                  placeholder='Email'
                  required />
            </div>
            <div className={formStyles.messageArea}>
                <label htmlFor='message' hidden>Message</label>
                <textarea
                  id='message'
                  className={formStyles.messageInput}
                  name='message'
                  form='contact-form'
                  wrap='off'
                  placeholder='Message'
                  required>
                </textarea>
            </div>
            <div className={formStyles.buttonArea}>
                <button type='submit' className={clsx({
                  [formStyles.submitButton] : true,
                  [formStyles.submittedButton] : submitted})}>
                    Send
                </button>
            </div>
          </div>
          <div className={clsx({
            [formStyles.submitMessage] : true,
            [formStyles.showSubmitMessage] : submitted,
            [formStyles.hideSubmitMessage] : !submitted})}>
              <p>Thank you for your message. I will get back to you as soon as I can.</p>
          </div>
        </form>
      </>
    )
}