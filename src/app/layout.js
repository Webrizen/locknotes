import './globals.css';
import { Poppins } from 'next/font/google';
import Appearance from '@/app/Appearance';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})


export const metadata = {
  title: {
    default: 'LockNotes | A Secure and Easy Way to Share Self-Destructing Notes',
    template: '%s | LockNotes | A Secure and Easy Way to Share Self-Destructing Notes'
  },
  description: {
    default: 'LockNotes is your secure platform for sharing self-destructing notes. Protect your information with our easy-to-use service.',
    template: '%s | LockNotes - Share Self-Destructing Notes'
  },
  applicationName: 'LockNotes',
  generator: 'LockNotes',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Secure Notes',
    'Self-Destructing Notes',
    'LockNotes',
    'Encrypted Notes',
  ],
  authors: [{ name: 'Arshahdul Ahmed', url: 'https://locknotes.in' }, { name: 'Jayandra Babu', url: 'https://locknotes.in' }],
  publisher: 'Arshahdul Ahmed',
  metadataBase: new URL('https://locknotes.in'),
  openGraph: {
    title: 'LockNotes',
    description: 'LockNotes is your secure platform for sharing self-destructing notes. Protect your information with our easy-to-use service.',
    url: 'https://locknotes.in',
    siteName: 'LockNotes',
    images: [
      {
        url: 'https://locknotes.in/locknotes.png',
        width: 500,
        height: 500,
        alt: 'LockNotes Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LockNotes',
    description: 'LockNotes is your secure platform for sharing self-destructing notes. Protect your information with our easy-to-use service.',
    creator: '@LockNotes',
    images: ['https://locknotes.in/locknotes.png'],
  },
  verification: {
    google: 'ZimtqbgHB1CKv_n_kRC1E_OZtGlIOq4V1vWULWYtso8',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['vijethasoftwaresols@gmail.com', 'locknotes.in'],
    },
  },
  category: 'Secure Notes',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Appearance children={children} />
        <Analytics />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3332601026052989"
          crossorigin="anonymous"></script>
      </body>
    </html>
  )
}
