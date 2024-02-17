import React, { ReactElement } from 'react';
import Link from 'next/link';

import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import LocaleSwitcher from '@/app/[lang]/components/locale-switcher';

export default async function Home({ params }: { params: { lang: Locale } }): Promise<ReactElement> {
  const dict = await getDictionary(params.lang);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <LocaleSwitcher />
      <h1 className='mb-3 text-2xl font-semibold'>{dict.main.header}</h1>
      <ul>
        <li>
          <Link href={'/' + params.lang + '/login'}>{dict.login.link}</Link>
        </li>
        <li>
          <Link href={'/' + params.lang + '/logout'}>{dict.logout.link}</Link>
        </li>
      </ul>
    </main>
  );
}
