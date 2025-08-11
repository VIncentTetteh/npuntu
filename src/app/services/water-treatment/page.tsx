import ServiceLayout from '@/components/ServiceLayout'
import { 
  BeakerIcon,
  WrenchScrewdriverIcon,
  CogIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline'

export default function WaterTreatmentPage() {
  const features = [
    {
      title: 'Water Treatment Plants',
      description: 'Design and construction of municipal and industrial water treatment facilities with modern filtration systems.',
      icon: <BeakerIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Wastewater Management',
      description: 'Sewage treatment plants and wastewater management systems for environmental protection.',
      icon: <GlobeAltIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'System Installation',
      description: 'Professional installation of pumps, pipes, filtration systems, and control equipment.',
      icon: <WrenchScrewdriverIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Quality Testing',
      description: 'Comprehensive water quality testing and monitoring to ensure safe drinking water standards.',
      icon: <ShieldCheckIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Maintenance Services',
      description: 'Regular maintenance and servicing of water treatment equipment for optimal performance.',
      icon: <CogIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Compliance Management',
      description: 'Ensuring compliance with Ghana Water Company standards and international regulations.',
      icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-white" />
    }
  ]

  const stats = [
    {
      label: 'Treatment Plants Built',
      value: '25+',
      description: 'Water treatment facilities constructed'
    },
    {
      label: 'Daily Water Capacity',
      value: '50M L',
      description: 'Liters of water treated daily'
    },
    {
      label: 'Communities Served',
      value: '200K+',
      description: 'People with access to clean water'
    },
    {
      label: 'Water Quality',
      value: '99.9%',
      description: 'Purity level achieved'
    }
  ]

  const processSteps = [
    'Water Source Assessment',
    'Treatment System Design',
    'Equipment Procurement',
    'Installation & Testing',
    'Quality Certification',
    'Ongoing Maintenance'
  ]

  const infographicData = {
    title: 'Water Treatment Process Efficiency',
    data: [
      { label: 'Filtration', value: 95, color: '#0EA5E9' },
      { label: 'Purification', value: 98, color: '#3B82F6' },
      { label: 'Disinfection', value: 99, color: '#1D4ED8' },
      { label: 'Quality Control', value: 100, color: '#1E3A8A' }
    ]
  }

  const benefits = [
    'State-of-the-art water treatment technology',
    'Compliance with WHO water quality standards',
    'Sustainable and environmentally friendly processes',
    'Automated monitoring and control systems',
    'Cost-effective operation and maintenance',
    'Skilled technicians for installation and service',
    'Emergency response and repair services',
    'Training programs for local operators',
    'Long-term warranty on equipment and systems',
    'Regular water quality testing and certification'
  ]

  return (
    <ServiceLayout
      title="Water Treatment"
      subtitle="Providing Clean, Safe Water for Healthy Communities"
      description="Our water treatment services ensure access to clean, safe drinking water through advanced treatment technologies. We design, build, and maintain water treatment plants that serve communities and industries across Ghana."
      heroImage="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjgwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPGNpcmNsZSBjeD0iNjAwIiBjeT0iMzAwIiByPSIxMDAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNCIvPgo8Y2lyY2xlIGN4PSI5MDAiIGN5PSIyNTAiIHI9IjYwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+CjxyZWN0IHg9IjQwMCIgeT0iNDAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjgwIiByeD0iNDAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8dGV4dCB4PSI2MDAiIHk9IjEwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPldhdGVyIFRyZWF0bWVudDwvdGV4dD4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8wXzEiIHgxPSIwIiB5MT0iMCIgeDI9IjEyMDAiIHkyPSI2MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzBFQTVFOSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMzY5QTEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      benefits={benefits}
    />
  )
}
