import ServiceLayout from '@/components/ServiceLayout'
import { 
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

export default function ConsultancyPage() {
  const features = [
    {
      title: 'Project Management',
      description: 'End-to-end project management services from initial planning through to successful completion and handover.',
      icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Technical Consulting',
      description: 'Expert technical advice on engineering design, construction methods, and technology implementation.',
      icon: <CogIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Feasibility Studies',
      description: 'Comprehensive feasibility analysis to assess project viability and optimize investment decisions.',
      icon: <ChartBarIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Team Coordination',
      description: 'Professional coordination of multidisciplinary teams, contractors, and stakeholders.',
      icon: <UserGroupIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Documentation & Reporting',
      description: 'Detailed project documentation, progress reporting, and compliance management.',
      icon: <DocumentTextIcon className="h-6 w-6 text-white" />
    },
    {
      title: 'Schedule Management',
      description: 'Critical path analysis and schedule optimization to ensure on-time project delivery.',
      icon: <ClockIcon className="h-6 w-6 text-white" />
    }
  ]

  const stats = [
    {
      label: 'Projects Managed',
      value: '250+',
      description: 'Successfully managed projects'
    },
    {
      label: 'On-Time Delivery',
      value: '95%',
      description: 'Projects completed on schedule'
    },
    {
      label: 'Budget Compliance',
      value: '98%',
      description: 'Projects within budget'
    },
    {
      label: 'Client Retention',
      value: '90%',
      description: 'Clients who return for more services'
    }
  ]

  const processSteps = [
    'Project Assessment & Planning',
    'Team Assembly & Resource Allocation',
    'Schedule Development & Monitoring',
    'Quality Control & Risk Management',
    'Progress Reporting & Communication',
    'Project Closure & Documentation'
  ]

  const infographicData = {
    title: 'Consultation Areas Distribution',
    data: [
      { label: 'Construction', value: 40, color: '#059669' },
      { label: 'Engineering', value: 30, color: '#0D9488' },
      { label: 'Management', value: 20, color: '#0F766E' },
      { label: 'Technical', value: 10, color: '#134E4A' }
    ]
  }

  const benefits = [
    'Experienced project managers with proven track records',
    'Comprehensive risk assessment and mitigation strategies',
    'Advanced project management tools and methodologies',
    'Regular stakeholder communication and reporting',
    'Cost optimization and budget management',
    'Quality assurance and compliance monitoring',
    'Vendor management and procurement support',
    'Change management and scope control',
    'Knowledge transfer and training programs',
    'Post-project support and evaluation'
  ]

  return (
    <ServiceLayout
      title="Consultancy & Project Management"
      subtitle="Expert Guidance for Successful Project Delivery"
      description="Our consultancy and project management services provide comprehensive support from project conception to completion. We ensure successful delivery through expert planning, coordination, and management of resources, timelines, and stakeholder relationships."
      heroImage="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8Y2lyY2xlIGN4PSI2MDAiIGN5PSIzMDAiIHI9IjE1MCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjxjaXJjbGUgY3g9IjMwMCIgY3k9IjIwMCIgcj0iNDAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8Y2lyY2xlIGN4PSI5MDAiIGN5PSI0MDAiIHI9IjYwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+CjxyZWN0IHg9IjQ1MCIgeT0iMjUwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjEwMCIgcng9IjEwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPHR4dCB4PSI2MDAiIHk9IjUwMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbnN1bHRhbmN5PC90ZXh0Pgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTIwMCIgeTI9IjYwMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDU5NjY5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAzNDA0QiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      benefits={benefits}
    />
  )
}
