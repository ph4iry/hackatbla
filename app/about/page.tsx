import FAQ from "@/components/FAQ";
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
        <div className="flex items-center my-6 flex-wrap md:flex-nowrap md:space-x-4">
          <div className="grow-0">
            <Image
              width={750}
              height={305}
              alt=""
              src="/partnership.png"
            />
          </div>
          <div className="mb-4">
            <div className="text-zinc-500 uppercase font-bold text-xl">why you should join</div>
            <div className="leading-7 space-y-2 md:space-y-unset">
              <div className="mb-3">
                <div className="text-3xl font-bold text-white">Anyone is welcome</div>
                <div className="text-md text-white">Whether you&apos;ve been coding since elementary school or have never touched a programming language before, we cater to students of various backgrounds. All you need is a positive attitude and a will to learn and you&apos;re welcome to join us!</div>
              </div>
              <div className="my-3">
                <div className="text-3xl font-bold text-white">You don&apos;t need to know how to code</div>
                <div className="text-md text-white">During our meetings, you&apos;ll get walked through making something amazing and custom to you using a range of technologies and skills! Everything is beginner friendly so you can walk in without any coding experience but leave with you creating something amazing!</div>
              </div>
              <div className="my-3">
                <div className="text-3xl font-bold text-white">Lots of freebies!</div>
                <div className="text-md text-white">Get stickers, food and also access to TONS of Hack Club resources such as Zoom Pro and Figma Pro, just by joining!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center my-6 flex-wrap md:flex-nowrap md:space-x-4">
          <div className="">
            <div className="text-zinc-500 uppercase font-bold text-xl">beyond club meetings</div>
            <div className="leading-7">
              <div className="mb-3">
                <div className="text-3xl font-bold text-white">Participate in <a className="text-amber-400" href="https://hackathons.hackclub.com">hackathons!</a></div>
                <div className="text-md text-white">Members are encouraged to team up to participate in hackathons and compete in competitions such as the <span className="text-amber-400">Congressional App Challenge</span> or join local hackathons such as <span className="text-amber-400">MIT Blueprint</span>!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6 w-full">
          <FAQ />
        </div>
       
      </div>
    </main>
  )
}