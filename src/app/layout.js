import Navbar from '@/components/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Locknotes | A secure and easy way to share self-destructing notes',
  description: 'A secure and easy way to share self-destructing notes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
