import { SqlData } from "../database/sql";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-font-dark">
        This is the change
      </h1>
      <div className="bg-contrast-dark-300 h-64 w-96 flex items-center justify-center flex-col gap-8">
        <p className="bg-contrast-dark-200 p-8 text-font-dark font-bold">
          this is a textbox
        </p>
        <button className="h-12 px-6 font-semibold rounded-lg text-font-dark bg-accent-dark">
          Click me
        </button>
        <SqlData/>
      </div>
    </>
  );
}
