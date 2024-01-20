import React, { ReactElement, Suspense } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

import Loading from '@/app/[lang]/loading';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang);

  return {
    title: dict.login.metadata.title,
    description: dict.login.metadata.description,
  };
}

export default async function Login({ params }: { params: { lang: Locale } }): Promise<ReactElement> {
  const dict = await getDictionary(params.lang);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Suspense fallback={<Loading />}>
        <h1 className='mb-3 text-2xl font-semibold'>{dict.login.header}</h1>
        <Link href={'/' + params.lang}>{dict.login['return-home']}</Link>
      </Suspense>
    </main>
  );
}
