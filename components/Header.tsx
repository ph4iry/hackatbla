'use client';

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'join us', href: 'https://docs.google.com/forms/d/e/1FAIpQLSd0lUe-EioGrGLqB2GW0fhZMPGv1oX0jd7EbAsF1ZoQ29Ey6w/viewform?usp=sf_link' },
  // { name: 'resources', href: '/resources' },
  // { name: 'the team', href: '#team' },
]

export default function Header () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="w-screen sticky top-0 bg-zinc-800 z-50 max-w-screen">
      <header className="shadow-lg">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="https://hackclub.com/" className="-m-1.5 p-1.5">
              <span className="sr-only">Visit the Hack Club site</span>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="-mt-6 h-20 w-auto"
                src="/flag-orpheus-top.png"
                alt=""
                priority
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 mr-3">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-semibold leading-6 text-white hover:text-amber-400 transition">
                {item.name}
              </a>
            ))}
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Hack Club</span>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-16 -mt-6 w-auto md:hidden"
                  src="/flag-orpheus-top.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}