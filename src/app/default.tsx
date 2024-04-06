import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full items-center justify-center p-24">
      <Image src="/dance-dancing.gif" alt="dancing snoopy"/>
      <div className="h-full">
        <h1 className="font-black text-xl mb-4">Enter Your Desired Username</h1>
      </div>
      <form className="w-full max-w-sm absolute">
        <div className="flex justify-center items-center border-b border-teal-500 py-2">
          <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="name" aria-label="Full name" />
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
            Confirm
          </button>
        </div>
      </form>
    </main>
  );
}
