import Link from 'next/link'
import { 
  WrenchScrewdriverIcon,
  TruckIcon,
  HomeIcon,
  ShieldCheckIcon,
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  BoltIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Civil Engineering',
    description: 'Comprehensive civil engineering solutions for infrastructure development and urban planning.',
    icon: WrenchScrewdriverIcon,
    href: '/services/civil-engineering',
  },
  {
    name: 'Roads',
    description: 'Road construction, maintenance, and highway infrastructure development projects.',
    icon: TruckIcon,
    href: '/services/roads',
  },
  {
    name: 'Real Estate',
    description: 'Property development, residential and commercial construction projects.',
    icon: HomeIcon,
    href: '/services/real-estate',
  },
  {
    name: 'Sea Defence',
    description: 'Coastal protection and marine engineering solutions for shoreline management.',
    icon: ShieldCheckIcon,
    href: '/services/sea-defence',
  },
  {
    name: 'Water Treatment',
    description: 'Water treatment plant design, construction, and maintenance services.',
    icon: BeakerIcon,
    href: '/services/water-treatment',
  },
  {
    name: 'Consultancy & Project Management',
    description: 'Expert consultation and comprehensive project management from conception to completion.',
    icon: ClipboardDocumentCheckIcon,
    href: '/services/consultancy',
  },
  {
    name: 'Energy',
    description: 'Renewable energy projects and power infrastructure development.',
    icon: BoltIcon,
    href: '/services/energy',
  },
  {
    name: '3D Interior Design',
    description: 'AI-powered interior design with immersive 3D visualization and planning tools.',
    icon: PaintBrushIcon,
    href: '/services/interior-design',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">OUR SERVICES</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Construction & Engineering Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From civil engineering to cutting-edge 3D interior design, we provide end-to-end solutions 
            that meet the diverse needs of our clients across Ghana and beyond.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-12">
            {services.map((service) => (
              <div key={service.name} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-x-4">
                  <div className="flex-none">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {service.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
