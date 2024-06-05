import React from 'react';
// import myImage from './kaido/profilBilde.jpg'; // Adjust the path according to your project's structure
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">I  don&apos;t write typescript :P</h1>
      <Image width={300} height={300} src="/profilBilde.jpg" alt="image"/>
    </main>
  );
}
