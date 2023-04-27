'use client';
import {SessionProvider} from 'next-auth/react'
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
// import { MyAccountProvider } from '../hooks/MyAccountContext'
import "../styles/globals.css"
export default function ProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <SessionProvider>
    {children}{/* */}
   </SessionProvider>
  );
}