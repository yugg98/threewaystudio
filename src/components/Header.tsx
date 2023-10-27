"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-[#0C1528]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <img
                    className="h-12 w-auto"
                    src="/logo.svg"
                    alt="Your Company"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex justify-between w-full space-x-6">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                      Home
                    </Link>
                    <Link
                      href="/aboutus"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      About us
                    </Link>
                    <Link
                      href="/ourservices"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Services
                    </Link>
                    {/* <Link
                      href="/academy"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                     Academy
                    </Link> */}
                    {/* <Link
                      href="/ourprocess"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                     Process
                    </Link>
                    <Link
                      href="/ourmerch"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                       Merch
                    </Link> */}
                    <Link
                      href="/contactus"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                     Contact us
                    </Link>
                    
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                <a
                target='_blank'
                  href="https://calendly.com/threeway-studio/blockchain-consultation"
                  className="-mx-3 bg-purple-800 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-600"
                >
                   let&apos;s connect
                </a>

               
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/aboutus"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Aboutus
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/ourservices"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contactus"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact us
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
           
              <div className="mt-3 space-y-1 px-2">
               
                <Disclosure.Button
                  as="a"
                  href="https://calendly.com/threeway-studio/blockchain-consultation"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                 let&apos;connect
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
