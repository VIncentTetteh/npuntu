import ServiceLayout from '@/components/ServiceLayout'
import { 
  HomeIcon,
  BuildingOfficeIcon,
  MapIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline'

export default function RealEstatePage() {
  const features = [
    {
      title: 'Residential Development',
      description: 'Design and construction of single-family homes, apartments, and residential complexes with modern amenities.',
      icon: <HomeIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Commercial Properties',
      description: 'Office buildings, retail centers, warehouses, and mixed-use developments for business needs.',
      icon: <BuildingOfficeIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Land Development',
      description: 'Site planning, infrastructure development, and subdivision of land for optimal use.',
      icon: <MapIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Property Management',
      description: 'Comprehensive property management services including maintenance, tenant relations, and financial management.',
      icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Investment Advisory',
      description: 'Real estate investment consulting and market analysis for optimal return on investment.',
      icon: <CurrencyDollarIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Community Planning',
      description: 'Integrated community development with consideration for social and environmental factors.',
      icon: <UserGroupIcon className="h-6 w-6 text-white" />
    }
  ]

  const stats = [
    {
      label: 'Properties Developed',
      value: '200+',
      description: 'Residential and commercial properties'
    },
    {
      label: 'Square Meters Built',
      value: '500K+',
      description: 'Total construction area completed'
    },
    {
      label: 'Happy Families',
      value: '1,500+',
      description: 'Families housed in our developments'
    },
    {
      label: 'Property Value Growth',
      value: '15%',
      description: 'Average annual property appreciation'
    }
  ]

  const processSteps = [
    'Market Research & Feasibility Study',
    'Site Selection & Acquisition',
    'Planning & Design Development',
    'Permit Acquisition & Approvals',
    'Construction & Quality Control',
    'Marketing & Sales/Leasing'
  ]

  const infographicData = {
    title: 'Property Portfolio Distribution',
    data: [
      { label: 'Residential', value: 60, color: '#10B981' },
      { label: 'Commercial', value: 25, color: '#3B82F6' },
      { label: 'Mixed-Use', value: 10, color: '#F59E0B' },
      { label: 'Industrial', value: 5, color: '#8B5CF6' }
    ]
  }

  const benefits = [
    'Prime locations in growing areas of Accra and surrounding regions',
    'Modern architectural designs with local cultural elements',
    'Sustainable building practices and energy-efficient systems',
    'Comprehensive infrastructure including utilities and roads',
    'Flexible financing options and payment plans',
    'Professional property management services',
    'High-quality construction materials and finishes',
    'Community amenities including recreational facilities',
    'Legal assistance with property documentation',
    'Post-construction warranty and maintenance support'
  ]

  return (
    <ServiceLayout
      title="Real Estate Development"
      subtitle="Creating Homes and Communities That Inspire"
      description="Our real estate development services encompass residential, commercial, and mixed-use properties. We create sustainable communities that enhance quality of life while providing excellent investment opportunities in Ghana's growing real estate market."
      heroImage="/images/services/Realestate.webp"
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      benefits={benefits}
    />
  )
}
