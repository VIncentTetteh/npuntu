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
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">WHO WE ARE</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Leading Construction & Engineering Excellence in Ghana
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Npuntu Companies Ltd stands at the forefront of Ghana&apos;s construction and engineering sector,
            delivering world-class infrastructure solutions that transform communities and drive economic growth.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircleIcon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Innovation</h3>
            <p className="text-gray-600 mb-4">
              Through our partnership with Waltergates AI technology, Npuntu is empowered with real-time 3D visualization 
              and immersive design tools, allowing our clients to see and modify projects before ground is broken.
            </p>
            <p className="text-gray-600">
              The AI-driven analytics enhance accuracy in planning, material estimation, and resource allocation, 
              significantly reducing project delays and cost overruns while ensuring sustainable, culturally relevant designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
