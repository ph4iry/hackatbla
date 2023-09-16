import FAQ from "@/components/FAQ";
import Image from "next/image";

const hackAtBLA = <>hack<span className="text-amber-400">@BLA</span></>

const resources = [
  ['Hack Club HQ Slack', 'https://hackclub.com/slack', 'col-span-3', 'row-span-2'],
  ['Replit', 'https://hackclub.com/slack', 'col-span-2', 'row-span-1'],
  ['Workshops', 'https://hackclub.com/slack', 'col-span-1', 'row-span-2'],
  ['Github', 'https://hackclub.com/slack','col-span-2', 'row-span-1'],
  ['OnBoard', 'https://hackclub.com/slack', 'col-span-2', 'row-span-1'],
  ['Toolbox', 'https://hackclub.com/slack', 'col-span-1', 'row-span-1'],
  ['Sprig', 'https://hackclub.com/slack', 'col-span-2', 'row-span-2'],
  ['Hackathons', 'https://hackclub.com/slack', 'col-span-2', 'row-span-1'],
  ['Jams', 'https://hackclub.com/slack', 'col-span-2', 'row-span-2'],
]
/*
10 resources

hackclub slack
replit
github
workshops
jams
onboard
toolbox
sprig
events
hackathons
*/

export default function Resources() {
  return (
    <main className="">
      <div className="w-screen max-w-screen md:px-16 lg:px-32 py-10 px-8 flex justify-center">
        <div className="text-center">
          <Image
            width={600}
            height={600}
            className="w-full max-w-lg h-auto"
            src="/underconstruction.svg"
            alt=""
            priority
          />
          <div className="text-3xl font-bold text-zinc-400 mt">Under Construction</div>
          <div className="mb-8">There&apos;s magic in the works, but it&apos;s not quite ready to go live yet! Come back later.</div>
          <a href="/" className="text-center md:text-left w-full py-2 px-4 md:px-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded font-bold text-lg md:text-xl md:w-fit hover:ring hover:ring-amber-400 hover:ring-offset-4 hover:ring-offset-zinc-700 transition">back to home</a>
        </div>
        <div className="hidden">
          <div className="grid grid-cols-6 grid-rows-2 gap-8">
            <div className="col-span-3 row-span-2 bg-purple-400 rounded p-3 transition hover:scale-110">slack</div>
            <div className="block col-span-2 row-span-1 space-y-8">
              <div className="w-full h-full bg-blue-400 rounded p-3 transition hover:scale-110">replit</div>
              <div className="w-full h-full bg-blue-400 rounded p-3 transition hover:scale-110">github</div>
            </div>
            <div className="col-span-1 row-span-2 bg-blue-400 rounded p-3 transition hover:scale-110 h-full">workshops</div>
          </div>
          <div className="grid grid-cols-6 grid-rows-2 gap-8 mt-8">
            <div className="col-span-2 row-span-1 space-y-8">
              <div className="w-full h-full bg-blue-400 rounded p-3 transition hover:scale-110">hackathons</div>
              <div className="w-full h-full bg-blue-400 rounded p-3 transition hover:scale-110">onboard</div>
            </div>
            <div className="col-span-2 row-span-2 bg-blue-400 rounded p-3 transition hover:scale-110">sprig</div>
            <div className="col-span-2 row-span-2 bg-blue-400 rounded p-3 transition hover:scale-110">workshops</div>
          </div>
        </div>
        {/* <div className="grid grid-cols-6">
          { resources.map((resource, i) => (
            <div key={i} className={`bg-blue-500 p-5 ${resource[1]} ${resource[2]}`}>
              {resource[0]}
            </div>
          ))}
        </div> */}
      </div>
    </main>
  )
}