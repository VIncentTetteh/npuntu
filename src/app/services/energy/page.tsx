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
      heroImage="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSIxNTAiIHI9IjYwIiBmaWxsPSIjRkJCRjI0IiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8cGF0aCBkPSJNMzAwIDkwTDMzMCAxNTBMMjcwIDE1MEwzMDAgOTBaIiBmaWxsPSIjRkJCRjI0IiBmaWxsLW9wYWNpdHk9IjAuNiIvPgo8cGF0aCBkPSJNNDAwIDIwMEw1MDAyMDBMNTUwIDMwMEw0NTAgMzAwTDQwMCAyMDBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KPHJlY3QgeD0iNzAwIiB5PSIzMDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPHR4dCB4PSI2MDAiIHk9IjUwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVuZXJneSBTb2x1dGlvbnM8L3RleHQ+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMCIgeTE9IjAiIHgyPSIxMjAwIiB5Mj0iNjAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGNTlFMEIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDE3MjEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      benefits={benefits}
    />
  )
}
