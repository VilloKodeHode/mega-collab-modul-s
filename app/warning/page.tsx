import Button from "./button";
import Image from "./image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Vidar was here!
      </h1>
      <Image></Image>
      <Button></Button>
    </main>
  );
}
