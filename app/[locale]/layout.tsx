import React from "react"
// import { MyAccountProvider } from '../hooks/MyAccountContext'
import "@/styles/globals.css"
import ProviderWrapper from "./ProviderWrapper";
import {useLocale} from 'next-intl';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const locale = useLocale();

  return (
    <html lang={locale}>
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
