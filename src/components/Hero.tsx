import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { 
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  CheckBadgeIcon 
} from '@heroicons/react/24/outline'
import Carousel from './Carousel'

const heroImages = [
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwMCIgaGVpZ2h0PSI3MDAiIHZpZXdCb3g9IjAgMCAxNDAwIDcwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjE0MDAiIHkyPSI3MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzI0MjQyNCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxNzE3MTciLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTQwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9InVybCgjYmcpIi8+Cjx8phdGggZD0iTTEwMCAzMDBMMzAwIDEwMEw2MDAgMzAwTDkwMCAxMDBMMTIwMCAzMDBWNTUwSDEwMFYzMDBaIiBmaWxsPSJyZ2IoMjQ3LCAxMTUsIDIyKSIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPHBhdGggZD0iTTMwMCAyMDBMNjAwIDUwTDkwMCAyMDBWNTAwSDMwMFYyMDBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHRleHQgeD0iNzAwIiB5PSI2MDAiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iUG9wcGlucyIgZm9udC1zaXplPSI1NiIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbnN0cnVjdGlvbjwvdGV4dD4KPHRleHQgeD0iNzAwIiB5PSI2NTAiIGZpbGw9InJnYigyNDcsIDExNSwgMjIpIiBmb250LWZhbWlseT0iUG9wcGlucyIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9IjUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RXhjZWxsZW5jZTwvdGV4dD4KPC9zdmc+',
    alt: 'Construction Excellence',
    title: 'Building Excellence',
    description: 'World-class construction and engineering solutions'
  },
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwMCIgaGVpZ2h0PSI3MDAiIHZpZXdCb3g9IjAgMCAxNDAwIDcwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjE0MDAiIHkyPSI3MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzI0MjQyNCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxNzE3MTciLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTQwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9InVybCgjYmcpIi8+CjxjaXJjbGUgY3g9IjM1MCIgY3k9IjIwMCIgcj0iMTAwIiBmaWxsPSJyZ2IoMjQ3LCAxMTUsIDIyKSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPGNpcmNsZSBjeD0iMTA1MCIgY3k9IjQwMCIgcj0iMTIwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHJlY3QgeD0iNjAwIiB5PSIzMDAiIHdpZHRoPSIyNDAiIGhlaWdodD0iMTIwIiBmaWxsPSJyZ2IoMjQ3LCAxMTUsIDIyKSIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KPHR4dCB4PSI3MDAiIHk9IjYwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJQb3BwaW5zIiBmb250LXNpemU9IjU2IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW5mcmFzdHJ1Y3R1cmU8L3RleHQ+CjwvZz4KPHRleHQgeD0iNzAwIiB5PSI2NTAiIGZpbGw9InJnYigyNDcsIDExNSwgMjIpIiBmb250LWZhbWlseT0iUG9wcGlucyIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9IjUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGV2ZWxvcG1lbnQ8L3RleHQ+Cjwvc3ZnPg==',
    alt: 'Infrastructure Development',
    title: 'Modern Infrastructure',
    description: 'Building Ghana&apos;s future with cutting-edge infrastructure'
  },
  {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwMCIgaGVpZ2h0PSI3MDAiIHZpZXdCb3g9IjAgMCAxNDAwIDcwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjE0MDAiIHkyPSI3MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzI0MjQyNCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxNzE3MTciLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTQwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9InVybCgjYmcpIi8+CjxjaXJjbGUgY3g9IjUwMCIgY3k9IjE1MCIgcj0iODAiIGZpbGw9IiNGRkQzMDAiIGZpbGwtb3BhY2l0eT0iMC44Ii8+CjxwYXRoIGQ9Ik01MDAgNzBMNTQwIDEzMEw0NjAgMTMwTDUwMCA3MFoiIGZpbGw9IiNGRkQzMDAiIGZpbGwtb3BhY2l0eT0iMC42Ii8+CjxyZWN0IHg9IjcwMCIgeT0iMzUwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjEyMCIgZmlsbD0icmdiKDI0NywgMTE1LCAyMikiIGZpbGwtb3BhY2l0eT0iMC4zIi8+Cjx0ZXh0IHg9IjcwMCIgeT0iNjAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IlBvcHBpbnMiIGZvbnQtc2l6ZT0iNTYiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FbmVyZ3k8L3RleHQ+Cjx0ZXh0IHg9IjcwMCIgeT0iNjUwIiBmaWxsPSJyZ2IoMjQ3LCAxMTUsIDIyKSIgZm9udC1mYW1pbHk9IlBvcHBpbnMiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSI1MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNvbHV0aW9uczwvdGV4dD4KPC9zdmc+',
    alt: 'Sustainable Energy',
    title: 'Energy Solutions',
    description: 'Sustainable and renewable energy systems'
  }
]

const stats = [
  { number: '250+', label: 'Projects Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Expert Team' }
]

const capabilities = [
  {
    icon: BuildingOfficeIcon,
    title: 'Infrastructure',
    description: 'Large-scale infrastructure and civil engineering projects'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Engineering',
    description: 'Advanced engineering solutions with AI-powered design'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Assurance',
    description: 'International standards with local expertise'
  },
  {
    icon: CheckBadgeIcon,
    title: 'Certified',
    description: 'Registered and certified construction company in Ghana'
  }
]

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-secondary via-secondary-800 to-secondary overflow-hidden">
      {/* Main Hero Content */}
      <div className="relative z-10 pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-20 sm:py-28 lg:py-36">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-background sm:text-6xl lg:text-7xl mb-8">
                Building Ghana's
                <span className="block text-primary bg-gradient-to-r from-primary to-primary-400 bg-clip-text text-transparent">Future</span>
              </h1>
              <p className="text-xl sm:text-2xl leading-relaxed text-accent-200 max-w-3xl mx-auto mb-12">
                World-class construction and engineering solutions with cutting-edge AI technology.
              </p>
              <div className="flex items-center justify-center gap-x-8">
                <a
                  href="#services"
                  className="rounded-xl bg-primary px-10 py-4 text-lg font-semibold text-white shadow-xl hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  Our Services
                </a>
                <a 
                  href="#contact" 
                  className="text-lg font-semibold leading-6 text-background flex items-center gap-2 hover:text-primary transition-all duration-300 group"
                >
                  Get Started <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Stats */}
      <div className="relative z-10 bg-gradient-to-r from-primary via-primary-500 to-primary-600 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-primary-100 text-sm sm:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}
