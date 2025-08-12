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
    <section id="services" className="py-20 sm:py-24 bg-card">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary mb-4">OUR SERVICES</h2>
          <p className="text-4xl font-bold tracking-tight text-secondary mb-6">
            Construction & Engineering Solutions
          </p>
          <p className="text-xl leading-relaxed text-muted max-w-3xl mx-auto">
            End-to-end solutions that meet the diverse needs of our clients across Ghana and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <div key={service.name} className="bg-background border border-border p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="flex items-center gap-x-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <service.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-x-2 text-sm font-semibold text-primary hover:text-primary-600 transition-colors duration-300 group-hover:translate-x-1"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/#services"
            className="inline-flex items-center gap-x-2 text-lg font-semibold text-primary hover:text-primary-600 transition-colors duration-300"
          >
            View All Services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
