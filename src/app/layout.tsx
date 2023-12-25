// 'use client';

import * as React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
// import { AnimatePresence } from 'framer-motion';
// import { usePathname } from 'next/navigation';
import Provider from './provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio site',
  metadataBase: null,
  openGraph: {
    title: 'Kevin Saephanh',
    type: 'website',
    url: 'https://kevinsaephanh.com/',
    siteName: 'Kevin Saephanh',
    images: '/images/og.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://twitter.com/Kevcoolio',
    images: '/images/og.png',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  // const pathname = usePathname();

  return (
    <html lang='en'>
      {/* <head>
        <title>Kevin Saephanh</title>
        <meta name='description' content='Description' />
      </head> */}
      <body
        className={`flex h-screen flex-col justify-between ${inter.className}`}
      >
        <Provider>
          {/* <AnimatePresence
          mode='wait'
          initial={true}
          onExitComplete={() => window.scrollTo(0, 0)}
        > */}
          <Navbar />
          <main
            role='main'
            className='w-full h-full'
            // className={`${
            //   pathname !== '/'
            //     ? 'p-5 my-5 flex-auto'
            //     : 'h-screen w-screen absolute'
            // }`}
          >
            {children}
          </main>
          <Footer />
          {/* </AnimatePresence> */}
        </Provider>
      </body>
    </html>
  );
}
