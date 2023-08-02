// Global CSS
import '../styles/globals.css'

// Fonts
import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

export default function App({ Component, pageProps }) {
    return (
      <main className={ebGaramond.className}>
          <Component {...pageProps} />
      </main>
    )
}
