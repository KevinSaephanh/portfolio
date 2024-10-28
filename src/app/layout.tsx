import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/ui/layout/Footer';
import { Navbar } from '@/components/ui/layout/Navbar';
import Provider from './provider';
import '@/app/styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio site',
  openGraph: {
    title: 'Kevin Saephanh',
    type: 'website',
    url: 'https://kevinsaephanh.com/',
    siteName: 'Kevin Saephanh',
    images: '/images/og.png',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
          rel='stylesheet'
        />
      </head>
      <body
        className={`min-h-screen flex flex-col justify-between ${inter.className}`}
      >
        <Provider>
          <Navbar />
          <main
            role='main'
            className='w-full md:h-full flex flex-col justify-center relative'
          >
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
