import { InstagramOutlined, MailOutlined } from "@ant-design/icons";
import Image from 'next/image';

const HackClubContent = [
  // { text: 'Our Team', href: '#team' },
  { text: 'Join Us', href: 'https://docs.google.com/forms/d/e/1FAIpQLSd0lUe-EioGrGLqB2GW0fhZMPGv1oX0jd7EbAsF1ZoQ29Ey6w/viewform?usp=sf_link' },
  { text: 'Hack Club HQ Slack', href: 'https://hackclub.com/slack' },
]

const Resources = [
  { text: 'Code of Conduct', href: 'https://hackclub.com/conduct' },
  { text: 'Preface', href: 'https://workshops.hackclub.com/preface' },
  { text: 'Hackathons', href: 'https://hackathons.hackclub.com/' },
  { text: 'Events', href: 'https://events.hackclub.com/' },
]

export default function Footer() {
  return (
    <div className="bg-zinc-900 md:px-20 lg:px-32 md:py-10 flex flex-wrap md:flex-nowrap flex-col md:flex-row py-5 px-8 md:space-x-10 space-y-10 md:space-y-0 w-full">
      <div className="flex basis-1/2 w-full md:space-x-10">
        <div className="w-full max-w-[24rem]">
          <div className="font-bold text-2xl text-zinc-500 mb-1">hack club</div>
          <div className="space-y-2">
            { HackClubContent.map((link, idx) => (
              <a key={idx} href={link.href} className="text-sm block text-zinc-300 transition hover:underline hover:text-amber-400" target="_blank" rel="noopener noreferrer">{link.text}</a>
            )) }
          </div>
        </div>
        <div className="w-full max-w-[24rem]">
          <div className="font-bold text-2xl text-zinc-500 mb-1">resources</div>
          <div className="space-y-2">
            { Resources.map((link, idx) => (
              <div className="block" key={idx}>
                <a href={link.href} className="text-sm text-zinc-300 transition hover:underline hover:text-amber-400" target="_blank" rel="noopener noreferrer">{link.text}</a>
              </div>
            )) }
          </div>
        </div>
      </div>
      <div className="w-fit flex flex-col space-y-5">
        <div>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          className="h-14 my-2 w-auto"
          src="/flag-standalone-bw.png"
          alt=""
          priority
        />
          <div className="font-bold text-2xl text-zinc-500">find us on social media!</div>
          <div className="flex justify-between">
            <a href="https://www.instagram.com/hackatbla/" target="_blank" rel="noopener noreferrer" className="transition text-zinc-400 hover:text-amber-400">
              <InstagramOutlined className="text-2xl mr-2" /> <span>hackatbla</span>
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold text-2xl text-zinc-500">or contact directly:</div>
          <div className="flex justify-between">
            <a href="mailto:psanon@bostonk12.org" target="_blank" rel="noopener noreferrer" className="transition text-zinc-400 hover:text-amber-400">
              <MailOutlined className="text-2xl mr-2" /> <span>psanon@bostonk12.org</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}