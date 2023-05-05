import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Mobile.module.css'

export default function Mobile() {
  return (
    <>
      <Head>
        <title>Verdandi</title>
        <meta name="description" content=" " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.formContainer}>
          <div id="bg-block" className={styles.bgBlock}>
            <form id="pwd-form" className={styles.pwdForm}>
              <label for="pwd">Password from <em>Desktop:</em></label>
              <input
                id='pwd'
                name='pwd'
                type="text"
                minlength="3"
                maxlength="3"
                pattern=".*shy.*"
                title="Try a larger screen size to get the password"
                autofocus
                required
              />
              <button type="submit" onSubmit={"closeForm();"}>Enter</button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

// I want the mobile websit to be more robotic
// Can we animae the words coming in
// how to use javascript to control which one it sees

// not case sensitive
// just must contain the word shy