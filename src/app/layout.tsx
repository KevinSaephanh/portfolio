import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/ui/layout/Footer';
import { Navbar } from '@/components/ui/layout/Navbar';
import { KonamiEasterEgg } from '@/components/ui/konami/KonamiEasterEgg';
import { ScrollProgress } from '@/components/ui/scroll-progress/ScrollProgress';
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
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='x-hint' content='the old ways still work — ↑↑↓↓←→←→BA' />
        <link
          href='https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body
        className={`min-h-screen flex flex-col justify-between ${inter.className}`}
        suppressHydrationWarning
      >
        {/* Anime RPG landscape — fixed behind all content */}
        <div
          className='fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/assets/anime-rpg-landscape.jpg')" }}
        />
        {/* Overlay: light in light mode, dark in dark mode */}
        <div className='fixed inset-0 -z-[9] bg-white/30 dark:bg-black/60' />
        <ScrollProgress />
        <Provider>
          <KonamiEasterEgg />
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
