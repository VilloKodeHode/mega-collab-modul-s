import { Container } from "../base/Container"
import { HeroText } from "./Text"
import { HeroWaves } from "./Waves"

export const HeroContainer = () => {

  return (
    <div id="hero-container" className="w-svw h-svh relative -top-24 flex justify-around items-center overflow-hidden">
      <HeroText>
        Lots of text introducing people to the page.
      </HeroText>
      <HeroWaves />
    </div>
  )
}