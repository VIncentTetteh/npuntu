import ServiceLayout from '@/components/ServiceLayout'
import { 
  WrenchScrewdriverIcon,
  CalculatorIcon,
  MapIcon,
  CogIcon,
  ClipboardDocumentCheckIcon,
  BuildingOfficeIcon 
} from '@heroicons/react/24/outline'

export default function CivilEngineeringPage() {
  const features = [
    {
      title: 'Structural Engineering',
      description: 'Design and analysis of buildings, bridges, and other structures using advanced engineering principles and modern software.',
      icon: <BuildingOfficeIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Site Planning & Design',
      description: 'Comprehensive site analysis, master planning, and sustainable design solutions for optimal land use.',
      icon: <MapIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Project Management',
      description: 'End-to-end project management from conception to completion, ensuring timely delivery and budget compliance.',
      icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Engineering Calculations',
      description: 'Precise engineering calculations for load analysis, material specifications, and structural integrity.',
      icon: <CalculatorIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control measures and compliance with international engineering standards.',
      icon: <CogIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Construction Supervision',
      description: 'Professional oversight during construction phases to ensure adherence to design specifications.',
      icon: <WrenchScrewdriverIcon className="h-6 w-6 text-white" />
    }
  ]

  const stats = [
    {
      label: 'Projects Completed',
      value: '150+',
      description: 'Successfully delivered civil engineering projects'
    },
    {
      label: 'Years Experience',
      value: '15+',
      description: 'In civil engineering and construction'
    },
    {
      label: 'Client Satisfaction',
      value: '98%',
      description: 'Client satisfaction rate'
    },
    {
      label: 'Safety Record',
      value: '99.9%',
      description: 'Accident-free construction hours'
    }
  ]

  const processSteps = [
    'Initial Consultation & Site Survey',
    'Feasibility Study & Design',
    'Permit Applications & Approvals',
    'Detailed Engineering & Planning',
    'Construction & Implementation',
    'Quality Control & Handover'
  ]

  const infographicData = {
    title: 'Project Distribution by Sector',
    data: [
      { label: 'Residential', value: 35, color: '#3B82F6' },
      { label: 'Commercial', value: 25, color: '#10B981' },
      { label: 'Infrastructure', value: 30, color: '#F59E0B' },
      { label: 'Industrial', value: 10, color: '#EF4444' }
    ]
  }

  const benefits = [
    'Innovative engineering solutions tailored to local conditions',
    'Compliance with Ghana Building Code and international standards',
    'Sustainable design practices for environmental responsibility',
    'Cost-effective solutions without compromising quality',
    'Experienced team with proven track record',
    'Advanced software and technology for precise calculations',
    'Comprehensive project documentation and reporting',
    'Post-construction support and maintenance services',
    'Risk assessment and mitigation strategies',
    'Collaborative approach with all stakeholders'
  ]

  return (
    <ServiceLayout
      title="Civil Engineering"
      subtitle="Building Ghana&apos;s Future with Engineering Excellence"
      description="Our civil engineering services encompass the full spectrum of infrastructure development, from residential buildings to large-scale commercial and industrial projects. We combine local expertise with international best practices to deliver sustainable, innovative solutions."
      heroImage="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8cGF0aCBkPSJNMjAwIDMwMEw0MDAgMTUwTDYwMCAzMDBMODAwIDE1MEwxMDAwIDMwMFY1MDBIMjAwVjMwMFoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8cGF0aCBkPSJNNDAwIDIwMEw2MDAgMTAwTDgwMCAyMDBWNDAwSDQwMFYyMDBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPHR4dCB4PSI2MDAiIHk9IjM1MCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNpdmlsIEVuZ2luZWVyaW5nPC90ZXh0Pgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTIwMCIgeTI9IjYwMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzMzM0ZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFFNDBBRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      benefits={benefits}
    />
  )
}
