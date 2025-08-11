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
      heroImage="/images/services/Consultancy-project.png"
      features={features}
      stats={stats}
      processSteps={processSteps}
      infographicData={infographicData}
      benefits={benefits}
    />
  )
}
