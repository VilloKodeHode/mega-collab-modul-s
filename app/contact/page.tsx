import { Container } from "../components/base/Container";
import { ContactCard } from "../components/base/molecyles/ContactCard";

export default function Home() {
  return (
    <>
      <h1>Contact page</h1>
      <Container>
        <ContactCard name="Maren" phone="1337" />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </Container>
    </>
  );
}
