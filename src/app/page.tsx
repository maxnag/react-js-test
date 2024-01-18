import React from 'react';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='mb-3 text-2xl font-semibold'>TEST</h1>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <p className='flex w-full justify-center border-b border-gray-300 pb-6 pt-8 lg:static lg:rounded-xl lg:border lg:bg-gray-200  lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30'>
          Get started by editing:&nbsp;
          <code className='font-mono font-bold'>src/app/page.tsx</code>
        </p>
      </div>
    </main>
  );
}
