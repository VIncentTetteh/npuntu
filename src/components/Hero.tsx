import { ArrowRightIcon } from '@heroicons/react/20/solid'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Committed to{' '}
            <span className="text-blue-600">Excellence</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Npuntu Companies Ltd is a leading and reputable, wholly Ghanaian-owned Construction & Engineering company. 
            In partnership with our global collaborators, we are dedicated to delivering innovative, high-quality, 
            and tailored solutions that address the unique needs of each client in both the private and public sectors.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#services"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Our Services
            </a>
            <a 
              href="#about" 
              className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2 hover:text-blue-600"
            >
              Learn more <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}
