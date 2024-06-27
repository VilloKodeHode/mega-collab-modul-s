

import { AltButton, StdButton } from "./components/base/Button";
import { Container } from "./components/base/Container";
import { HeroContainer } from "./components/hero/Container";
import { HeroSection } from "./components/section/HeroSection";
import { click } from "./utils/utilClicks";
import { useState } from "react";

export default async function Home() {

  return (
    <>
      <HeroContainer />
      <section className="flex flex-col w-full items-center z-[1]">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <HeroSection/>
        <Container>
          <StdButton onClick={click}>Click me!</StdButton>
          <AltButton onClick={click}>Click me!</AltButton>
        </Container>
      </section>
    </>
  );
};