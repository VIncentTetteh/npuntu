'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about' },
  { 
    name: 'Services', 
    href: '/#services',
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
  { name: 'Partners', href: '/#partners' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="bg-background/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-primary">NPUNTU</span>
            <span className="text-sm text-accent-600 block font-medium">COMPANIES LTD</span>
          </a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary hover:text-primary transition-colors"
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
                    className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-secondary hover:text-primary transition-colors duration-200"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {item.name}
                    <ChevronDownIcon className="h-5 w-5 flex-none text-accent-500" aria-hidden="true" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-2xl bg-background text-sm leading-6 shadow-xl">
                        <div className="p-4">
                          {item.subItems.map((subItem) => (
                            <div key={subItem.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-primary-50 transition-colors duration-200">
                              <div>
                                <a href={subItem.href} className="font-semibold text-secondary hover:text-primary transition-colors duration-200">
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
                <a href={item.href} className="text-sm font-semibold leading-6 text-secondary hover:text-primary transition-colors duration-200">
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </nav>
      
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm shadow-2xl">
          <div className="flex items-center justify-between">
            <a href="#home" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-primary">NPUNTU</span>
              <span className="text-sm text-accent-600 block font-medium">COMPANIES LTD</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-accent-200">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary hover:bg-primary-50 hover:text-primary transition-colors duration-200"
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
                            className="-mx-3 block rounded-lg px-3 py-2 text-sm leading-7 text-accent-600 hover:bg-primary-50 hover:text-primary transition-colors duration-200"
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
