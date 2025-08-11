import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Carousel from './Carousel'

const heroImages = [
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8cGF0aCBkPSJNMjAwIDMwMEw0MDAgMTUwTDYwMCAzMDBMODAwIDE1MEwxMDAwIDMwMFY1MDBIMjAwVjMwMFoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8cGF0aCBkPSJNNDAwIDIwMEw2MDAgMTAwTDgwMCAyMDBWNDAwSDQwMFYyMDBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPHR4dCB4PSI2MDAiIHk9IjUwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbnN0cnVjdGlvbjwvdGV4dD4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8wXzEiIHgxPSIwIiB5MT0iMCIgeDI9IjEyMDAiIHkyPSI2MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y5NzMxNiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEOTI3MDkiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K',
    alt: 'Construction Excellence',
    title: 'World-Class Construction',
    description: 'Leading construction and engineering solutions across Ghana'
  },
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjgwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPGNpcmNsZSBjeD0iOTAwIiBjeT0iNDAwIiByPSIxMDAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMjUiLz4KPHJlY3QgeD0iNTAwIiB5PSIzMDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KPHR4dCB4PSI2MDAiIHk9IjUwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkluZnJhc3RydWN0dXJlPC90ZXh0Pgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTIwMCIgeTI9IjYwMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkI5MjNDIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VBNTgwQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=',
    alt: 'Infrastructure Development',
    title: 'Modern Infrastructure',
    description: 'Building the future of Ghana with cutting-edge infrastructure'
  },
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8Y2lyY2xlIGN4PSI0MDAiIGN5PSIxNTAiIHI9IjYwIiBmaWxsPSIjRkJCRjI0IiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8cGF0aCBkPSJNNDAwIDkwTDQzMCAxNTBMMzcwIDE1MEw0MDAgOTBaIiBmaWxsPSIjRkJCRjI0IiBmaWxsLW9wYWNpdHk9IjAuNiIvPgo8cmVjdCB4PSI2MDAiIHk9IjMwMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8dGV4dCB4PSI2MDAiIHk9IjUwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVuZXJneSBTb2x1dGlvbnM8L3RleHQ+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMCIgeTE9IjAiIHgyPSIxMjAwIiB5Mj0iNjAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjczMTYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDkzNTE3Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==',
    alt: 'Sustainable Energy',
    title: 'Sustainable Solutions',
    description: 'Renewable energy and environmental solutions for tomorrow'
  }
]

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 to-red-100 pt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Committed to{' '}
            <span className="text-orange-600">Excellence</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Npuntu Companies Ltd is a leading and reputable, wholly Ghanaian-owned Construction & Engineering company. 
            In partnership with our global collaborators, we are dedicated to delivering innovative, high-quality, 
            and tailored solutions that address the unique needs of each client in both the private and public sectors.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#services"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Our Services
            </a>
            <a 
              href="#about" 
              className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2 hover:text-orange-600"
            >
              Learn more <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Image Carousel */}
        <div className="mt-16">
          <Carousel images={heroImages} />
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
