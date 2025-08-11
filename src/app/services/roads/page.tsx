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
      heroImage="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8cGF0aCBkPSJNMCAwSDEyMDBWNjAwSDBWMFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8wXzEpIi8+CjxyZWN0IHg9IjAiIHk9IjI4MCIgd2lkdGg9IjEyMDAiIGhlaWdodD0iNDAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8cmVjdCB4PSIxMDAiIHk9IjI4NSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzFFNDBBRiIgZmlsbC1vcGFjaXR5PSIwLjYiLz4KPHJlY3QgeD0iNTAwIiB5PSIyODUiIHdpZHRoPSIxMDAiIGhlaWdodD0iMzAiIGZpbGw9IiMxRTQwQUYiIGZpbGwtb3BhY2l0eT0iMC42Ii8+CjxyZWN0IHg9IjkwMCIgeT0iMjg1IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMUU0MEFGIiBmaWxsLW9wYWNpdHk9IjAuNiIvPgo8dGV4dCB4PSI2MDAiIHk9IjE1MCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJvYWQgQ29uc3RydWN0aW9uPC90ZXh0Pgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTIwMCIgeTI9IjYwMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDM0MEJGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBGMTYyOSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      benefits={benefits}
    />
  )
}
