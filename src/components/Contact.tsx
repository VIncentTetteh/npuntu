'use client'

import { useState } from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-br from-secondary via-secondary-800 to-secondary">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary mb-4">GET STARTED</h2>
          <p className="text-4xl font-bold tracking-tight text-background mb-6">
            Ready to Build Your Vision?
          </p>
          <p className="text-xl leading-relaxed tracking-tight text-background max-w-3xl mx-auto">
            Contact our expert team today to discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold leading-7 tracking-tight text-background mb-8">Contact Information</h3>
            <dl className="space-y-6">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <MapPinIcon className="h-7 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd className="text-sm leading-6 text-gray-200 dark:text-black">
                  <div className="mb-2">
                    <strong className="text-white dark:text-background">Office 1:</strong><br />
                    Plot 1, Banana Avenue, Dansoman-Akukofoto<br />
                    Accra, Ghana
                  </div>
                  <div>
                    <strong className="text-white dark:text-background">Office 2:</strong><br />
                    House No: 20, 24th Street, New Achimota<br />
                    Accra, Ghana
                  </div>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <EnvelopeIcon className="h-7 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd className="text-sm leading-6 text-gray-200 dark:text-background">
                  <a href="mailto:info@npuntu.com" className="hover:text-primary transition-colors">
                    info@npuntu.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <PhoneIcon className="h-7 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd className="text-sm leading-6 text-gray-200 dark:text-background">
                  <div className="mb-1">
                    <a href="tel:+233557275028" className="hover:text-primary transition-colors">
                      +233 (0) 557 275 028
                    </a>
                  </div>
                  <div>
                    <a href="tel:+233503706700" className="hover:text-primary transition-colors">
                      +233 (0) 503 706 700
                    </a>
                  </div>
                </dd>
              </div>
            </dl>

            <div className="mt-10 p-6 bg-white dark:bg-gray-800 border border-primary/30 dark:border-primary/50 rounded-xl shadow-lg">
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Company Registration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Registered in Ghana: <span className="font-medium text-primary">BN021262018</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Full Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border-0 px-3.5 py-2.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border-0 px-3.5 py-2.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border-0 px-3.5 py-2.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="block w-full rounded-xl bg-primary px-3.5 py-3 text-center text-sm font-semibold text-white shadow-lg hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
