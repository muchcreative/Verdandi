import nightStyles from '../styles/night/Night.module.css';

export default function ContactForm() {
  return (
    <>
      <div claasName={nightStyles.contactContainer}>
        <form action="/api/form" method="post">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" />

          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />

          <label for="Message">Ask me Anything...</label>
          <input type="text" id="message" name="messsage" placeholder="Ask me Anything.." />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}