import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../components/common/Layout/Layout';
import { ThemeProvider } from 'next-themes';
import { Seo } from '../components/common/SEO/Seo';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Seo title='Kevin Saephanh' />
      <AnimatePresence mode='wait' initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
