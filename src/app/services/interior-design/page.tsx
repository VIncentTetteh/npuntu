import ServiceLayout from '@/components/ServiceLayout'
import { 
  PaintBrushIcon,
  CubeTransparentIcon,
  SparklesIcon,
  CogIcon,
  EyeIcon,
  LightBulbIcon 
} from '@heroicons/react/24/outline'

export default function InteriorDesignPage() {
  const features = [
    {
      title: '3D Visualization',
      description: 'Photorealistic 3D renderings and virtual walkthroughs using AI-powered visualization technology.',
      icon: <CubeTransparentIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Space Planning',
      description: 'Optimal space utilization and layout design for residential, commercial, and office spaces.',
      icon: <PaintBrushIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'AI-Powered Design',
      description: 'Advanced AI tools for design optimization, color matching, and furniture placement recommendations.',
      icon: <SparklesIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Real-Time Modifications',
      description: 'Interactive design sessions allowing clients to see and modify designs in real-time.',
      icon: <EyeIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Lighting Design',
      description: 'Comprehensive lighting solutions including natural and artificial lighting optimization.',
      icon: <LightBulbIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Project Implementation',
      description: 'End-to-end implementation including sourcing, procurement, and installation supervision.',
      icon: <CogIcon className="h-6 w-6 text-white" />
    }
  ]

  const stats = [
    {
      label: 'Spaces Designed',
      value: '300+',
      description: 'Interior design projects completed'
    },
    {
      label: 'Design Accuracy',
      value: '99%',
      description: 'Client satisfaction with final results'
    },
    {
      label: 'Time Saved',
      value: '60%',
      description: 'Faster design process with AI technology'
    },
    {
      label: 'Virtual Tours',
      value: '1000+',
      description: '3D virtual experiences created'
    }
  ]

  const processSteps = [
    'Client Consultation & Brief',
    '3D Space Scanning & Measurement',
    'AI-Assisted Design Development',
    'Client Review & Real-Time Modifications',
    'Final Design Approval & Documentation',
    'Implementation & Installation Supervision'
  ]

  const infographicData = {
    title: 'Design Project Types Distribution',
    data: [
      { label: 'Residential', value: 50, color: '#8B5CF6' },
      { label: 'Commercial', value: 25, color: '#A855F7' },
      { label: 'Office Spaces', value: 20, color: '#C084FC' },
      { label: 'Hospitality', value: 5, color: '#DDD6FE' }
    ]
  }

  const benefits = [
    'Cutting-edge AI technology for superior design solutions',
    'Immersive 3D visualization before implementation',
    'Real-time design modifications and client collaboration',
    'Sustainable and culturally relevant design approaches',
    'Professional sourcing and procurement services',
    'Cost-effective solutions without compromising quality',
    'Expert guidance on color, texture, and material selection',
    'Lighting design optimization for ambiance and efficiency',
    'Project management and installation supervision',
    'Post-completion support and design adjustments'
  ]

  return (
    <ServiceLayout
      title="3D Interior Design"
      subtitle="Transforming Spaces with AI-Powered Design Innovation"
      description="Our 3D interior design services leverage advanced AI technology and immersive visualization tools to create stunning, functional spaces. From concept to completion, we provide comprehensive design solutions that bring your vision to life with unprecedented accuracy and detail."
      heroImage="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjgwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPHJlY3QgeD0iNDAwIiB5PSIxNTAiIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiByeD0iMjAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8Y2lyY2xlIGN4PSI5NTAiIGN5PSIzNTAiIHI9IjYwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+CjxyZWN0IHg9IjUwMCIgeT0iMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzhCNUNGNiIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHJlY3QgeD0iNTIwIiB5PSIzMjAiIHdpZHRoPSIxNjAiIGhlaWdodD0iODAiIGZpbGw9IiNBODU1RjciIGZpbGwtb3BhY2l0eT0iMC40Ii8+CjxjaXJjbGUgY3g9IjUwMCIgY3k9IjIwMCIgcj0iMjAiIGZpbGw9IiNDMDg0RkMiLz4KPHR4dCB4PSI2MDAiIHk9IjU1MCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjNEIEludGVyaW9yIERlc2lnbjwvdGV4dD4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8wXzEiIHgxPSIwIiB5MT0iMCIgeDI9IjEyMDAiIHkyPSI2MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzhCNUNGNiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ODJGN0EiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      benefits={benefits}
    />
  )
}
