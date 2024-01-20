import React from 'react';
import type { Metadata } from 'next';
import type { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';

import './[lang]/globals.css';
import { i18n, type Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

const inter: NextFont = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang);

  return {
    title: dict.main.metadata.title,
    description: dict.main.metadata.description,
  };
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
