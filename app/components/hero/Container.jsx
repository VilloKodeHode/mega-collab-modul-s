import { HeroText } from "./Text";
import { HeroWaves } from "./Waves";

/* 
Note to self:
Instead of cutting content at the end of hero Container, let wave effect continue with overflow:visible
Let wave effect naturally end offscreen to the right instead of cutting out in the middle
Watch out for z-index

Alternatively, continue with above, but add an eventlistener to scroll and change opacity based on scrollX.
Opacity should reach 0 when other element is x% from top?
*/

export const HeroContainer = () => {
  return (
    <div id="hero-container" className="w-svw h-svh relative -top-24 flex justify-around items-center overflow-hidden">
      <HeroText>
        Lots of text introducing people to the page.
      </HeroText>
      <HeroWaves />
    </div>
  );
};