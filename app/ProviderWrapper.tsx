'use client';
import {SessionProvider} from 'next-auth/react'
// import { MyAccountProvider } from '../hooks/MyAccountContext'
import "../styles/globals.css"
export default function ProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <SessionProvider basePath="/mern-frontend/api/auth" >
    {children}{/* */}
   </SessionProvider>
  );
}