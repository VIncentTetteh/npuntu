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
      heroImage="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8cmVjdCB4PSIxMDAiIHk9IjIwMCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIyMDAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8cmVjdCB4PSIzMDAiIHk9IjE1MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cmVjdCB4PSI1MDAiIHk9IjEwMCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNCIvPgo8cmVjdCB4PSI3MDAiIHk9IjE3MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIyMzAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMzUiLz4KPHR4dCB4PSI2MDAiIHk9IjUwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJlYWwgRXN0YXRlPC90ZXh0Pgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTIwMCIgeTI9IjYwMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTA5OTgxIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA1OUI2QSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      benefits={benefits}
    />
  )
}
