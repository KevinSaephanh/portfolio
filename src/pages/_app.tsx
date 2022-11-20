import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../components/common/Layout/Layout';
import { ThemeProvider } from 'next-themes';
import { Seo } from '../components/common/SEO/Seo';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Seo title="Kevin Saephanh" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
