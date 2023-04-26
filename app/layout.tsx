'use client';

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
              {/* <MyAccountProvider> */}
                {children}
              {/* </MyAccountProvider> */}
        </main>
      </body>
    </html>
  );
}
