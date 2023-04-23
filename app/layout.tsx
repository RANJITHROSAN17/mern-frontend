'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
// import { MyAccountProvider } from '../hooks/MyAccountContext'
import "../styles/globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
     <head/>
      <body>
        <main>
          <CacheProvider>
            <ChakraProvider>
              {/* <MyAccountProvider> */}
                {children}
              {/* </MyAccountProvider> */}
            </ChakraProvider>
          </CacheProvider>
        </main>
      </body>
    </html>
  );
}
