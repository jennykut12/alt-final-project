import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavbarHeader from './ui/navbar/bottom-nav-bar';
import TopNavbarHeader from './ui/navbar/top-nav-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carefinder',
  description: 'Your connection to reliable healthcare services in Nigeria ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <TopNavbarHeader />
        <NavbarHeader />
        <div>{children}</div>
      </body>
    </html>
  );
}
