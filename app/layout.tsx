'use client';
import React from "react"
// import { MyAccountProvider } from '../hooks/MyAccountContext'
import "../styles/globals.css"
import ProviderWrapper from "./ProviderWrapper";
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
          <ProviderWrapper>
              {/* <MyAccountProvider> */}
                {children}
              {/* </MyAccountProvider> */}
          </ProviderWrapper>
        </main>
      </body>
    </html>
  );
}
