import Button from "@/app/components/base/atom/warning-comps/button";
import Pic from "@/app/components/base/atom/warning-comps/image";

export default function Home() {
  return (
    <div className="flex max-h-screen gap-16 flex-col items-center justify-between pt-24">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Vidar was here!
      </h1>
      <Pic />
      <Button />
    </div>
  );
}
