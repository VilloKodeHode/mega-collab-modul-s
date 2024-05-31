import Button from "./button";
import Image from "./image";
import Header from "./header";
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
