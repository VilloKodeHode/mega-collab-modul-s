import React from "react";
import ImageBox from "../components/erikComponent/molecule/imagesContainer";
import ImagesContainer from "../components/erikComponent/molecule/imagesContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Erik sin side!</h1>
      <ImagesContainer />
    </main>
  );
}
