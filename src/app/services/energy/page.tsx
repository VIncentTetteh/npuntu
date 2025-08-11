import ServiceLayout from '@/components/ServiceLayout'
import { 
  BoltIcon,
  SunIcon,
  CogIcon,
  Battery100Icon,
  WrenchScrewdriverIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline'

export default function EnergyPage() {
  const features = [
    {
      title: 'Solar Power Systems',
      description: 'Design and installation of solar photovoltaic systems for residential, commercial, and industrial applications.',
      icon: <SunIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Power Distribution',
      description: 'Electrical infrastructure development including substations, transmission lines, and distribution networks.',
      icon: <BoltIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Energy Storage',
      description: 'Battery storage solutions and energy management systems for reliable power supply.',
      icon: <Battery100Icon className="h-6 w-6 text-white" />
    },
    {
      title: 'System Integration',
      description: 'Integration of renewable energy systems with existing power infrastructure and grid connections.',
      icon: <CogIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Maintenance Services',
      description: 'Comprehensive maintenance and monitoring services to ensure optimal energy system performance.',
      icon: <WrenchScrewdriverIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Energy Audits',
      description: 'Detailed energy efficiency assessments and optimization recommendations for cost savings.',
      icon: <ChartBarIcon className="h-6 w-6 text-white" />
    }
  ]

  const stats = [
    {
      label: 'Energy Projects',
      value: '50+',
      description: 'Renewable energy projects completed'
    },
    {
      label: 'Power Generated',
      value: '25 MW',
      description: 'Total renewable energy capacity installed'
    },
    {
      label: 'CO2 Reduction',
      value: '15K Tons',
      description: 'Annual carbon emissions reduced'
    },
    {
      label: 'Energy Savings',
      value: '30%',
      description: 'Average energy cost reduction for clients'
    }
  ]

  const processSteps = [
    'Energy Needs Assessment',
    'System Design & Engineering',
    'Permits & Grid Connection',
    'Equipment Procurement & Installation',
    'Testing & Commissioning',
    'Monitoring & Maintenance'
  ]

  const infographicData = {
    title: 'Renewable Energy Solutions Distribution',
    data: [
      { label: 'Solar Power', value: 70, color: '#F59E0B' },
      { label: 'Wind Energy', value: 15, color: '#0EA5E9' },
      { label: 'Hybrid Systems', value: 10, color: '#10B981' },
      { label: 'Energy Storage', value: 5, color: '#8B5CF6' }
    ]
  }

  const benefits = [
    'Sustainable and environmentally friendly energy solutions',
    'Significant reduction in electricity costs and carbon footprint',
    'State-of-the-art renewable energy technologies',
    'Compliance with Ghana Energy Commission standards',
    'Grid-tied and off-grid energy system options',
    'Professional installation and commissioning services',
    'Comprehensive warranty and maintenance support',
    'Energy monitoring and performance optimization',
    'Training programs for local technicians and operators',
    'Financing options and government incentive assistance'
  ]

  return (
    <ServiceLayout
      title="Energy Solutions"
      subtitle="Powering Ghana&apos;s Future with Renewable Energy"
      description="Our energy solutions focus on renewable energy systems that provide sustainable, cost-effective power for residential, commercial, and industrial applications. We design and implement solar, wind, and hybrid energy systems that reduce environmental impact while delivering reliable electricity."
      heroImage="/images/services/green-energy-solutions.jpeg"
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      benefits={benefits}
    />
  )
}
