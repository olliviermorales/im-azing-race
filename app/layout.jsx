import '@/styles/globals.css';

import Nav from '@/components/Nav';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'IM-AZING',
  description: 'Discover & Share AI Prompts',
  icons: {
    icon: '/favicon.png',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en' className='scroll-smooth'>
      <body>
        <>
          <Toaster />
          <main className='app'>
            <Nav />
            {children}
            <Footer />
            <Analytics />
          </main>
        </>
      </body>
    </html>
  );
};

export default RootLayout;
