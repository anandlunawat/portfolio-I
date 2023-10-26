import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Pacifico } from "next/font/google"
import { IoMoonOutline } from "react-icons/io5"
import Profile from '@/components/Profile'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Script from 'next/script'

const pacifico = Pacifico({
  weight: "400",
  display: "swap",
  preload: false
});
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anand Lunawat',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-L678VG62DJ"></Script>
      <Script id="google-analytics">
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L678VG62DJ');
          `
        }
      </Script>
      <body className={`${inter.className} m-2 lg:overflow-hidden`}>
        <div className={`${pacifico.className} flex flex-row w-full`}>
          <Link href={"/"} className='tracking-widest whitespace-pre font-normal text-2xl 2xl:text-4xl basis-1/2'>Anand Lunawat</Link>
          <div className='ml-auto rounded-full p-3 text-lg border-[2px]'><IoMoonOutline /></div>
        </div>
        <div className='flex flex-col gap-4'>
          <Navbar />
          <div className='lg:flex max-md:h-full gap-4 lg:flex-row w-full'>
            <Profile />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
