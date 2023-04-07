import * as React from 'react';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className='flex h-screen flex-col justify-between'>
      <Navbar route={router.pathname} />
      <main
        role='main'
        className={`${
          router.pathname !== '/' ? 'p-5 my-5 flex-auto' : 'h-screen w-screen absolute'
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
