import ServiceLayout from '@/components/ServiceLayout'
import { 
  ShieldCheckIcon,
  GlobeAltIcon,
  MapIcon,
  CogIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon 
} from '@heroicons/react/24/outline'

export default function SeaDefencePage() {
  const features = [
    {
      title: 'Coastal Protection',
      description: 'Design and construction of seawalls, breakwaters, and revetments to protect coastlines from erosion.',
      icon: <ShieldCheckIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Beach Nourishment',
      description: 'Sand replenishment and beach restoration projects to maintain natural coastal defenses.',
      icon: <MapIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Marine Engineering',
      description: 'Specialized marine construction including piers, jetties, and offshore structures.',
      icon: <WrenchScrewdriverIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Environmental Assessment',
      description: 'Comprehensive environmental impact studies and sustainable coastal management solutions.',
      icon: <GlobeAltIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Monitoring Systems',
      description: 'Installation of coastal monitoring equipment to track erosion and structural integrity.',
      icon: <CogIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Maintenance Services',
      description: 'Regular inspection and maintenance of coastal defense structures for long-term effectiveness.',
      icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-white" />
    }
  ]

  const stats = [
    {
      label: 'Coastline Protected',
      value: '50+ KM',
      description: 'Kilometers of coastline secured'
    },
    {
      label: 'Defense Structures',
      value: '15+',
      description: 'Sea defense projects completed'
    },
    {
      label: 'Communities Protected',
      value: '100K+',
      description: 'People protected from sea erosion'
    },
    {
      label: 'Structure Lifespan',
      value: '50+ Years',
      description: 'Expected durability of our defenses'
    }
  ]

  const processSteps = [
    'Coastal Survey & Assessment',
    'Hydrodynamic Modeling',
    'Environmental Impact Study',
    'Design & Engineering',
    'Construction & Installation',
    'Monitoring & Maintenance'
  ]

  const infographicData = {
    title: 'Sea Defence Solutions Distribution',
    data: [
      { label: 'Seawalls', value: 40, color: '#1E40AF' },
      { label: 'Breakwaters', value: 25, color: '#1D4ED8' },
      { label: 'Revetments', value: 20, color: '#2563EB' },
      { label: 'Other Structures', value: 15, color: '#3B82F6' }
    ]
  }

  const benefits = [
    'Protection against coastal erosion and flooding',
    'Sustainable and environmentally responsible solutions',
    'Advanced materials resistant to saltwater corrosion',
    'Compliance with international marine construction standards',
    'Integration with natural coastal ecosystems',
    'Long-term cost-effectiveness and durability',
    'Emergency response capabilities for coastal disasters',
    'Community consultation and stakeholder engagement',
    'Regular monitoring and performance assessment',
    'Adaptive management for changing sea levels'
  ]

  return (
    <ServiceLayout
      title="Sea Defence"
      subtitle="Protecting Ghana&apos;s Coastline for Future Generations"
      description="Our sea defence services provide comprehensive coastal protection solutions to safeguard communities, infrastructure, and natural habitats from the impacts of sea erosion and climate change along Ghana's coastline."
      heroImage="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8cGF0aCBkPSJNMCA0MDBIMTI0MFY2MDBIMFY0MDBaIiBmaWxsPSIjMUU0MEFGIiBmaWxsLW9wYWNpdHk9IjAuNiIvPgo8cGF0aCBkPSJNMCA0MjBDMjAwIDM4MCA0MDAgNDQwIDYwMCA0MTBDODAwIDM4MCA5NTAgNDIwIDEyMDAgNDAwVjYwMEgwVjQyMFoiIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC40Ii8+CjxyZWN0IHg9IjIwMCIgeT0iMzUwIiB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjciLz4KPHR4dCB4PSI2MDAiIHk9IjIwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNlYSBEZWZlbmNlPC90ZXh0Pgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTIwMCIgeTI9IjYwMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDVBRkQwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA3NzY5MSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      benefits={benefits}
    />
  )
}
