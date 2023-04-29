import React from "react"
import "@/styles/globals.css"
import AuthContext from "./components/contexts/AuthContext";
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
          <AuthContext>
                {children}
          </AuthContext>
        </main>
      </body>
    </html>
  );
}
