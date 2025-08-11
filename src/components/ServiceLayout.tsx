import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

interface ServiceFeature {
  title: string
  description: string
  icon?: React.ReactNode
}

interface ServiceStat {
  label: string
  value: string
  description?: string
}

interface ServiceLayoutProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  features: ServiceFeature[]
  stats?: ServiceStat[]
  processSteps?: string[]
  infographicData?: {
    title: string
    data: { label: string; value: number; color: string }[]
  }
  gallery?: string[]
  benefits: string[]
}

export default function ServiceLayout({
  title,
  subtitle,
  description,
  heroImage,
  features,
  stats,
  processSteps,
  infographicData,
  gallery,
  benefits
}: ServiceLayoutProps) {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <div className="bg-gray-50 px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-600 font-semibold">
              {subtitle}
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {description}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={heroImage}
              alt={title}
              width={1200}
              height={600}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Approach</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive {title} Solutions
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 xl:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <div className="flex items-center gap-x-4 mb-4">
                    <div className="flex-none">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        {feature.icon || <CheckCircleIcon className="h-6 w-6 text-white" />}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      {stats && (
        <div className="bg-blue-600 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Our Impact in Numbers
                </h2>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col bg-white/5 p-8">
                    <dt className="text-sm font-semibold leading-6 text-blue-100">
                      {stat.label}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </dd>
                    {stat.description && (
                      <dd className="text-sm text-blue-200 mt-2">
                        {stat.description}
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      )}

      {/* Infographic Section */}
      {infographicData && (
        <div className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {infographicData.title}
              </h2>
            </div>
            
            <div className="mt-16 flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                  {infographicData.data.map((item, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="mx-auto h-24 w-24 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.value}%
                      </div>
                      <p className="text-sm font-medium text-gray-900">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Process Steps */}
      {processSteps && (
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Process
              </h2>
            </div>
            
            <div className="mt-16">
              <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex-1 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-base text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery */}
      {gallery && gallery.length > 0 && (
        <div className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Project Gallery
              </h2>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={image}
                    alt={`${title} project ${index + 1}`}
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Benefits */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our {title} Services?
            </h2>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 flex-none text-green-500" />
                <p className="text-base leading-7 text-gray-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your {title.toLowerCase()} project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Contact our expert team today to discuss your requirements and get a customized solution.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/#contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started
              </Link>
              <Link href="/" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
