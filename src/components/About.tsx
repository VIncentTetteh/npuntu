import { CheckCircleIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Innovative Solutions',
    description: 'We leverage cutting-edge technology and AI-driven analytics to enhance project efficiency and accuracy.',
  },
  {
    name: 'Local Expertise',
    description: 'As a wholly Ghanaian-owned company, we understand local conditions and cultural requirements.',
  },
  {
    name: 'Global Partnerships',
    description: 'Our collaboration with international partners brings world-class standards to every project.',
  },
  {
    name: 'Sustainable Practices',
    description: 'We create environmentally responsible and culturally relevant designs for lasting impact.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-background dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary mb-4">WHO WE ARE</h2>
          <p className="text-4xl font-bold tracking-tight text-secondary mb-6">
            Leading Construction Excellence in Ghana
          </p>
          <p className="text-xl leading-relaxed text-muted">
            World-class infrastructure solutions that transform communities and drive economic growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.name} className="flex items-start gap-4 group">
                <CheckCircleIcon className="h-6 w-6 flex-none text-primary mt-1" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-300 mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-muted leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-semibold text-secondary mb-6">AI-Powered Innovation</h3>
            <p className="text-muted leading-relaxed">
              Through our partnership with Waltergates AI technology, we deliver real-time 3D visualization 
              and AI-driven analytics that enhance accuracy in planning, reduce project delays, and ensure 
              sustainable, culturally relevant designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
