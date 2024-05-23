import React from 'react';
import myImage from './kaido/profilBilde.jpg'; // Adjust the path according to your project's structure

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">I don't write typescript :P</h1>
      <img src={myImage} alt="image"/>
    </main>
  );
}
  