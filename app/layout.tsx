'use client';

import ProviderWrapper from './ProviderWrapper';
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
              <ProviderWrapper>

              {children}
              
              </ProviderWrapper>
                
              
            </ChakraProvider>
          </CacheProvider>
        </main>
      </body>
    </html>
  );
}
