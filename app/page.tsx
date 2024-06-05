import { AltButton, StdButton } from "./components/base/Button";
import { Container } from "./components/base/Container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Container>
        <StdButton>Click me!</StdButton>
        <AltButton>Click me!</AltButton>
      </Container>
    </main>
  );
}
