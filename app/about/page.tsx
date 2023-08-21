import Image from "next/image";

const hackAtBLA = <>hack<span className="text-amber-400">@BLA</span></>

export default function About() {
  return (
    <main className="">
      <div className="w-screen max-w-screen md:px-16 lg:px-32 py-10 px-8">
        <div className="space-y-2.5">
          <div className="text-zinc-500 font-bold text-xl uppercase">who we are</div>
          <div className="text-2xl font-bold text-4xl">{hackAtBLA} is a club for students to <span className="text-amber-400">code, collaborate, and innovate</span>.</div>
          <div className="leading-7">Join us weekly for coding workshops, creative projects, and showcasing your work! We also participate in local coding events and hackathons.</div>
        </div>
        <div className="flex items-center">
          <div className="basis-1/2">
            <Image
              width={750}
              height={305}
              alt=""
              src="/partnership.png"
            />
          </div>
          <div className="">
            <div className="text-zinc-500 uppercase font-bold text-xl">why you should join</div>
            <div className="leading-7">
              <div className="text-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}