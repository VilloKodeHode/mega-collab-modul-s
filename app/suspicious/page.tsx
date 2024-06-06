import { Cena } from "./cena/Index";
import Background from "./background";

export default function Home() {

  return (
    <div className="-mt-24">
      <Background/>
      <Cena />
    </div>
  );
}
