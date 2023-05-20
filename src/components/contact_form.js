import formStyles from '../styles/night/Form.module.css';

export default function ContactForm() {
  return (
    <>
      <form action="/api/form" className={formStyles.form} method="post">
        <input
          type="text"
          id="name"
          className={formStyles.name}
          name="name"
          placeholder="Name" 
          required />
        <input
          type="email"
          id="email"
          className={formStyles.email}
          name="email"
          placeholder="Email"
          required />
        <input
          type="text"
          id="message"
          className={formStyles.msg}
          name="messsage"
          placeholder="Ask me Anything.."
          required />
        <button className={formStyles.button} type="submit">Send</button>
      </form>
    </>
  )
}