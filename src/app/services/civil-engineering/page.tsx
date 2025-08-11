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
      { label: 'Residential', value: 35, color: '#EA580C' },
      { label: 'Commercial', value: 25, color: '#10B981' },
      { label: 'Infrastructure', value: 30, color: '#F59E0B' },
      { label: 'Industrial', value: 10, color: '#EF4444' }
    ]
  }

  const gallery = [
    '/images/services/11062b_4ac00df9268b4765b18eb82eee22432f~mv2.avif',
    '/images/services/3c6e7f_7e5c67d612524dcab8408712d523f1bd~mv2.avif',
    '/images/services/71dfa86bbe7d43838d96f0fbb643abdf.avif',
    '/images/services/89238f5335504d239408fb381de8c4cb.avif',
    '/images/services/cccf0d1c2f4845a9a78a2b16e75459c7.avif',
    '/images/services/da06b8e50d69441f82862d8c00ae77b4.avif'
  ]

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
      heroImage="/images/services/Constructioncivilengineertechnicianandarchitectworking.webp"
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      gallery={gallery}
      benefits={benefits}
    />
  )
}
