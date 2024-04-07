
export default function RootLayout({
  children, support
}: Readonly<{
  children: React.ReactNode; support: React.ReactNode;
}>) {
  return (
          <div className="z-10 max-w-5xl h-full w-full items-center justify-between sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-5 font-mono text-sm">
            <div className="flex justify-center items-center rounded-lg bg-indigo-200 h-full row-span-2 w-full overflow-hidden">
              {children}
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg bg-indigo-200 h-full overflow-hidden">
              <h1 className="font-black text-xl mb-4">Rules</h1>
              <p className="mb-2">No Illegal Activities</p>
              <p>Have fun.</p>
            </div>
            <div className="flex justify-center items-center rounded-lg bg-indigo-200 h-full overflow-hidden">
              {support}
            </div>
          </div>
  );
}
