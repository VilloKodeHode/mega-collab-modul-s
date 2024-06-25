import { HeroText } from "./Text";
import { HeroWaves } from "./Waves";

export const HeroContainer = () => {

  return (
    <section id="hero-container" className="w-svw h-svh relative -top-24 flex justify-around items-center">
      <HeroText>
        Lots of text introducing people to the page.
      </HeroText>
      <HeroWaves />
    </section>
  );
};