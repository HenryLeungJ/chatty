import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-1/2 items-center justify-between p-24">
      <div className="z-10 max-w-5xl h-full w-full items-center justify-between grid grid-cols-2 grid-rows-2 font-mono text-sm lg:flex">
        <div className="bg-black h-full">
          <p>Hello</p>
        </div>
        <div className="bg-black h-full">
          <p>Hello</p>
        </div>
      </div>
    </main>
  );
}
