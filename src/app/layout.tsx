import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/shared/layout/Footer';
import { Navbar } from '@/components/shared/layout/Navbar';
import Provider from './provider';
import '@/app/styles/globals.scss';

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
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`h-screen flex flex-col justify-between ${inter.className}`}
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
