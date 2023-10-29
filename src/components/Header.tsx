"use client";
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-transparent">
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
                <div className="hidden sm:ml-6 lg:block">
                  <div className="flex justify-between w-full space-x-6">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link
                      href="/"
                      className="block p-2 px-3 py-2 text-sm font-semibold leading-6 text-white rounded-lg hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 hover:bg-gray-800"
                    >
                      Home
                    </Link>
                    <Link
                      href="/aboutus"
                      className="block p-2 px-3 py-2 text-sm font-semibold leading-6 text-white rounded-lg hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 hover:bg-gray-800"
                    >
                      About us
                    </Link>
                    <Popover className="relative z-[100]">
                      <Popover.Button className="flex items-center p-2 text-sm font-semibold leading-6 text-white rounded hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 gap-x-1 focus:outline-none">
                       Services
                        <ChevronDownIcon
                          className="flex-none w-5 h-5 text-white/60"
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 w-56 p-2 mt-3 bg-gray-900 shadow-lg -left-8 top-full rounded-xl ring-1 ring-gray-900/5">
                          <Link
                            href="/ourservices/development"
                            className="block p-2 px-3 py-2 text-sm font-semibold leading-6 text-white rounded-lg hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 hover:bg-gray-800"
                          >
                            Design
                          </Link>
                          <Link
                            href="/ourservices/development"
                            className="block p-2 px-3 py-2 text-sm font-semibold leading-6 text-white rounded-lg hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 hover:bg-gray-800"
                          >
                            Development
                          </Link>
                          <Link
                            href="/ourservices/marketing"
                            className="block p-2 px-3 py-2 text-sm font-semibold leading-6 text-white rounded-lg hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 hover:bg-gray-800"
                          >
                            Marketing
                          </Link>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Link
                      href="/academy"
                      className="block p-2 px-3 py-2 text-sm font-semibold leading-6 text-white rounded-lg hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 hover:bg-gray-800"
                    >
                      Academy
                    </Link>
                    <Link
                      href="/ourprocess"
                      className="block p-2 px-3 py-2 text-sm font-semibold leading-6 text-white rounded-lg hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 hover:bg-gray-800"
                    >
                      Process
                    </Link>
                    <Link
                      href="/ourmerch"
                      className="block p-2 px-3 py-2 text-sm font-semibold leading-6 text-white rounded-lg hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 hover:bg-gray-800"
                    >
                      Merch
                    </Link>
                    <Link
                      href="/contactus"
                      className="block p-2 px-3 py-2 text-sm font-semibold leading-6 text-white rounded-lg hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 hover:bg-gray-800"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 lg:block">
                <div className="flex items-center">
                  <Link
                    href="https://calendly.com/threeway-studio/blockchain-consultation"
                    className="items-center font-display justify-center hidden px-4 py-3 text-white rounded md:flex buttonbg hover:scale-95 active:scale-90 font-semibold transition-all duration-150 !bg-[#6c36ab] hover:text-white shadow-sm shadow-[#c977d6] hover:shadow-md hover:shadow-[#c977d6] ease-in-out"
                  >
                    Let&apos;connect
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex lg:hidden">
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

          <Disclosure.Panel className="lg:hidden rounded-t-md">
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
                  className="block rounded-full px-3 py-2 text-center text-lg bg-purple-800  font-bold text-white  hover:bg-purple-500 hover:text-white"
                >
                  let&apos; connect
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
