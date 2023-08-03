// Next.js
import { Analytics } from '@vercel/analytics/react';

// Global CSS
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    )
}
