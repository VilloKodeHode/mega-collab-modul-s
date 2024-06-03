import Button from "../components/warning-comps/button";
import Image from "../components/warning-comps/image";
import { Header } from "../components/header/organism/Header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Vidar was here!
      </h1>
      <Header />
      <h1 className="text-medium font-bold text-gray-900 dark:text-white">
        Vidar was here!
      </h1>
      <Image />

      <Button />
    </main>
  );
}
