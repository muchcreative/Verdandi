// Fonts
import { Allura, EB_Garamond } from 'next/font/google';

const allura = Allura({
  subsets: ['latin'], 
  weight: ['400']
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

export { allura, ebGaramond };