import ServiceLayout from '@/components/ServiceLayout'
import { 
  TruckIcon,
  MapIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  ShieldCheckIcon,
  CogIcon 
} from '@heroicons/react/24/outline'

export default function RoadsPage() {
  const features = [
    {
      title: 'Highway Construction',
      description: 'Design and construction of highways, arterial roads, and major transportation corridors using modern techniques.',
      icon: <TruckIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Urban Road Development',
      description: 'City streets, residential roads, and urban infrastructure development with proper drainage systems.',
      icon: <MapIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Road Maintenance',
      description: 'Comprehensive maintenance services including resurfacing, pothole repair, and preventive maintenance.',
      icon: <WrenchScrewdriverIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Traffic Management',
      description: 'Installation of traffic control systems, signage, and road safety infrastructure.',
      icon: <ShieldCheckIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Quality Control',
      description: 'Rigorous testing of materials, compaction, and surface quality to ensure durability.',
      icon: <CogIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Project Scheduling',
      description: 'Efficient project management to minimize traffic disruption and meet delivery deadlines.',
      icon: <ClockIcon className="h-6 w-6 text-white" />
    }
  ]

  const stats = [
    {
      label: 'Kilometers Built',
      value: '500+',
      description: 'Total road construction completed'
    },
    {
      label: 'Projects Delivered',
      value: '75+',
      description: 'Road construction projects'
    },
    {
      label: 'Average Duration',
      value: '6-18',
      description: 'Months per project completion'
    },
    {
      label: 'Warranty Period',
      value: '5 Years',
      description: 'Standard warranty on road construction'
    }
  ]

  const processSteps = [
    'Site Survey & Soil Analysis',
    'Engineering Design & Planning',
    'Environmental Impact Assessment',
    'Earthworks & Foundation Preparation',
    'Base Course & Surface Construction',
    'Quality Testing & Final Handover'
  ]

  const infographicData = {
    title: 'Road Construction Materials Distribution',
    data: [
      { label: 'Asphalt', value: 45, color: '#1F2937' },
      { label: 'Concrete', value: 30, color: '#6B7280' },
      { label: 'Base Materials', value: 20, color: '#9CA3AF' },
      { label: 'Others', value: 5, color: '#D1D5DB' }
    ]
  }

  const benefits = [
    'Durable road construction using high-quality materials',
    'Advanced construction equipment and techniques',
    'Compliance with Ghana Highway Authority standards',
    'Minimal traffic disruption during construction',
    'Comprehensive drainage and stormwater management',
    'Road safety features and proper signage installation',
    'Environmental consideration and impact mitigation',
    'Cost-effective solutions for long-term durability',
    'Regular quality control and material testing',
    'Post-construction maintenance services available'
  ]

  return (
    <ServiceLayout
      title="Roads Construction"
      subtitle="Connecting Communities Through Quality Infrastructure"
      description="Our road construction services span from urban streets to major highways, utilizing cutting-edge technology and proven engineering practices. We build roads that stand the test of time while ensuring minimal disruption to traffic flow."
      heroImage="/images/services/road-constructions.jpg"
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      benefits={benefits}
    />
  )
}
