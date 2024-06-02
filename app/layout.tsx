import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
      </body>
    </html>
  );
}
