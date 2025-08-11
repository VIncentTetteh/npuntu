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
    <section id="contact" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">CONTACT US</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ready to start your next project? Contact us today to discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold leading-7 text-gray-900">Contact Information</h3>
              <dl className="mt-10 space-y-6">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <MapPinIcon className="h-7 w-6 text-blue-600" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-600">
                    <div className="mb-2">
                      <strong>Office 1:</strong><br />
                      Plot 1, Banana Avenue, Dansoman-Akukofoto<br />
                      Accra, Ghana
                    </div>
                    <div>
                      <strong>Office 2:</strong><br />
                      House No: 20, 24th Street, New Achimota<br />
                      Accra, Ghana
                    </div>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <EnvelopeIcon className="h-7 w-6 text-blue-600" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-600">
                    <a href="mailto:info@npuntu.com" className="hover:text-blue-600">
                      info@npuntu.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <PhoneIcon className="h-7 w-6 text-blue-600" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-600">
                    <div className="mb-1">
                      <a href="tel:+233557275028" className="hover:text-blue-600">
                        +233 (0) 557 275 028
                      </a>
                    </div>
                    <div>
                      <a href="tel:+233503706700" className="hover:text-blue-600">
                        +233 (0) 503 706 700
                      </a>
                    </div>
                  </dd>
                </div>
              </dl>

              <div className="mt-10 p-6 bg-white rounded-lg shadow-sm">
                <h4 className="text-base font-semibold text-gray-900 mb-2">Company Registration</h4>
                <p className="text-sm text-gray-600">
                  Registered in Ghana: <span className="font-medium">BN021262018</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
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
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
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
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
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
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
