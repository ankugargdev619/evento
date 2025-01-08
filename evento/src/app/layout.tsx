import type { Metadata } from "next";
import {Barlow} from 'next/font/google';
import "./globals.css";

const barlow_init = Barlow({
  subsets : ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-barlow'
})

export const metadata: Metadata = {
  title: "Evento",
  description: "Tickets, merchandise you name it, we do it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow_init.variable} ${barlow_init.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
