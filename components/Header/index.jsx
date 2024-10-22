// Navbar.tsx
'use client'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../public/images/logo.png'
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Logo"
              src={logo}
              className="h-8 w-auto"
            />
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
            activeClassName="text-indigo-600"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
            activeClassName="text-indigo-600"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="text-sm font-semibold leading-6 text-gray-900"
            activeClassName="text-indigo-600"
          >
            Services
          </NavLink>
          <NavLink
            to="/carrer"
            className="text-sm font-semibold leading-6 text-gray-900"
            activeClassName="text-indigo-600"
          >
            Careers 
          </NavLink>
          <NavLink
            to="/contact"
            className="text-sm font-semibold leading-6 text-gray-900"
            activeClassName="text-indigo-600"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Get a Quote Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="/quote"
            className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Get a Quote
          </NavLink>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src={logo}
                className="h-8 w-auto"
              />
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  activeClassName="text-indigo-600"
                  onClick={() => setMobileMenuOpen(false)}
                  exact
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  activeClassName="text-indigo-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  activeClassName="text-indigo-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/carrer"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  activeClassName="text-indigo-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Career
                </NavLink>
                <NavLink
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  activeClassName="text-indigo-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink
                  to="/quote"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
