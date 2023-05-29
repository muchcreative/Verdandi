import formStyles from '../styles/night/Form.module.css';

// Form must send out a post request and email confirmation as well
// rewrite onFocus or Active pseudo element styles for borders
// Look into autocomplete styles

export default function ContactForm() {
  return (
    <>
      <form action='/api/form' id='contact-form' method='post'>
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
            <button className={formStyles.button} type='submit'>Send</button>
          </div>
        </div>
      </form>
    </>
  )
}