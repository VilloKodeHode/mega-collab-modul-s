import { Container } from "../components/base/Container";
import { ContactCard } from "../components/base/molecyles/ContactCard";

export default function Home() {
  return (
    <>
      <h1>Contact page</h1>
      <div className="flex flex-wrap gap-16 justify-center p-8 bg-secondary-dark rounded-2xl">
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
      </div>
    </>
  );
}
