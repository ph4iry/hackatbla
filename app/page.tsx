import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="flex w-screen max-w-screen justify-center lg:justify-between md:px-16 lg:px-32 items-center mb-16 flex-col-reverse md:flex-row mt-5">
        <div className="px-3 w-full md:basis-7/12">
          <div className="m-3 p-5 2xl:py-16 2xl:px-10 bg-zinc-700/30 rounded-md shadow">
            <div className="mb-5 text-center md:text-left">
              <div className="font-bold text-2xl md:text-3xl lg:text-5xl" id="home">welcome to</div>
              <h1 className="font-bold text-5xl md:text-5xl lg:text-8xl mb-4">hack<span className="text-amber-400">@BLA</span></h1>
              <div className="italic md:text-lg lg:text-2xl">... a Hack Club for Boston Latin Academy students interested in using computer science and programming to make something cool!</div>
            </div>
            <a href="/about" className="w-full py-2 px-4 md:px-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded font-bold text-lg md:text-xl md:w-fit hover:ring hover:ring-amber-400 hover:ring-offset-4 hover:ring-offset-zinc-700 transition">learn more</a>
          </div>
        </div>
        <div className="shrink-0 self-center grow flex-1">
          <Image
            width={600}
            height={600}
            className="w-full h-auto"
            src="/logo.png"
            alt=""
            priority
          />
        </div>
      </div>
    </main>
  )
}
