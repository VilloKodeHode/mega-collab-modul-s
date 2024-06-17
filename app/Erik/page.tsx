import React from "react";
import ImageBox from "../components/erikComponent/atom/ImageBox";
import ImagesContainer from "../components/erikComponent/molecule/ImagesContainer";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">My little Emma!</h1>

      <p className="text-2xl underline">In a bush!</p>
      <ImagesContainer />
    </>
  );
}
