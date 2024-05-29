import Button from "./button";
import Image from "./image";
import Header from "./header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-20">
      <Header></Header>
      <h1 className="text-medium font-bold text-gray-900 dark:text-white">
        Vidar was here!
      </h1>
      <Image></Image>
      <Button></Button>
    </main>
  );
}
