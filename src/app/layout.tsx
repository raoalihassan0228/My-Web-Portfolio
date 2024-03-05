import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './component/navbar'
import Footer from './component/footer'
import Img from '../../public/assets/picture/ali-logo.jpg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rao Ali Hassan',
  description: 'Rao Ali Hassan Portfolio',
  // icons:{
  //   icon: "../../public/assets/picture/ali-logo.jpg"
  // }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar/>
        {children}
        <Footer/>
        </body>        
    </html>
  )
}
