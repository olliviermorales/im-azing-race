import '@/styles/globals.css';

import Nav from '@/components/Nav';
import Provider from '@/components/Provider';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'IM-AZING',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en' className='scroll-smooth'>
      <body>
        <Provider>
          <Toaster />
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
