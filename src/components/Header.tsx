'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { 
    name: 'Services', 
    href: '#services',
    subItems: [
      { name: 'Civil Engineering', href: '/services/civil-engineering' },
      { name: 'Roads', href: '/services/roads' },
      { name: 'Real Estate', href: '/services/real-estate' },
      { name: 'Sea Defence', href: '/services/sea-defence' },
      { name: 'Water Treatment', href: '/services/water-treatment' },
      { name: 'Consultancy & Project Management', href: '/services/consultancy' },
      { name: 'Energy', href: '/services/energy' },
      { name: '3D Interior Design', href: '/services/interior-design' },
    ]
  },
  { name: 'Partners', href: '#partners' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-orange-600">NPUNTU</span>
            <span className="text-sm text-gray-600 block">COMPANIES LTD</span>
          </a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.subItems ? (
                <div className="relative">
                  <button
                    className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {item.name}
                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          {item.subItems.map((subItem) => (
                            <div key={subItem.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-orange-50">
                              <div>
                                <a href={subItem.href} className="font-semibold text-gray-900 hover:text-orange-600">
                                  {subItem.name}
                                  <span className="absolute inset-0" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600">
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Get in Touch
          </a>
        </div>
      </nav>
      
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#home" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-orange-600">NPUNTU</span>
              <span className="text-sm text-gray-600 block">COMPANIES LTD</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.subItems && (
                      <div className="ml-4 space-y-2">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-sm leading-7 text-gray-700 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
