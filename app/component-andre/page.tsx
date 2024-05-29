export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <nav className="w-full bg-blue-500">
        <button className="px-10">home</button>
        <button className="px-10">about</button>
        <button className="px-10">why?</button>
      </nav>
      <section id="content"></section>
      <h1 className="mt-20 text-3xl font-bold underline">Hello</h1>
      <h2 className="mt-10 text-5xl font-bold">You shall not pace</h2>
    </main>
  );
}
