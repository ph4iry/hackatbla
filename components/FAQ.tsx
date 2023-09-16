'use client';
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const questions = [
  { question: 'I\'m new to coding, can I still join?', answer: 'Yes! Hack Club is for people of all backgrounds and skill levels in computer science. New to coding? Attend a workshop (a jam) and walk through the process of creating someting awesome with code!' },
  { question: 'Do you guys actually hack?', answer: 'That\'s not the type of hacking we are doing here at Hack Club. Instead, we use hacking to describe using creativity to make cool things with computer science.' },
  { question: 'When and where do meetings take place?', answer: 'For the 2023-24 school year, we meet on Mondays after school from 1:45 to 2:45 PM in Ms. Roche\'s room (219).' },
  { question: 'Does it cost money to join?', answer: 'Not at all! Everything at Hack Club is free!' },
  { question: 'How will we code?', answer: 'We\'ll primarily use Replit to make coding things extra easy!' },
]
export default function FAQ() {
  return (
    <div className="w-full px-4 text-left w-full md:max-w-xl mx-auto">
      <div className="text-zinc-500 uppercase font-bold text-2xl block text-center mb-2">FAQ</div>
      <div className="bg-zinc-700/40 px-6 py-4">
        {
          questions.map((q, i) => (
            <Disclosure key={i}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75 border-b border-amber-400">
                  <span>{q.question}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-amber-500 transition`}
                  />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0 -translate-y-6"
                  enterTo="transform scale-100 opacity-100 translate-y-0"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100 translate-y-0"
                  leaveTo="transform scale-95 opacity-0 -translate-y-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-stone-300">
                    <div className="flex">
                      <div className="w-min">
                        <ChevronRightIcon className="h-5 w-5 text-stone-500"/>
                      </div>
                      <div className="grow font-mono">
                        {q.answer}
                      </div>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          ))
        }
      </div>
    </div>
  )
}