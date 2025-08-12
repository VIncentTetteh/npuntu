'use client'

import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'

const stats = [
  { number: '250+', label: 'Projects Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Expert Team' }
]

const backgroundImages = [
  {
    url: '/images/services/11062b_4ac00df9268b4765b18eb82eee22432f~mv2.avif',
    alt: 'Professional construction and engineering services'
  },
  {
    url: '/images/services/3b23e7970432450492e5d304d7a29374.avif',
    alt: 'Infrastructure development and civil engineering'
  },
  {
    url: '/images/services/3c6e7f_7e5c67d612524dcab8408712d523f1bd~mv2.avif',
    alt: 'Road construction and maintenance projects'
  },
  {
    url: '/images/services/71dfa86bbe7d43838d96f0fbb643abdf.avif',
    alt: 'Modern construction site with advanced equipment'
  },
  {
    url: '/images/services/89238f5335504d239408fb381de8c4cb.avif',
    alt: 'Quality construction and project management'
  }
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])
  return (
    <section id="home" className="relative bg-gradient-to-br from-secondary via-secondary-800 to-secondary overflow-hidden min-h-screen">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/70 to-secondary/80" />
      </div>

      

      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary shadow-lg scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 pt-20 flex items-center min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-20 sm:py-28 lg:py-36">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-background sm:text-6xl lg:text-7xl mb-8">
                Building Ghana&apos;s
                <span className="block text-primary bg-gradient-to-r from-primary to-primary-400 bg-clip-text text-transparent">Future</span>
              </h1>
              <p className="text-xl sm:text-2xl leading-relaxed text-accent-200 max-w-3xl mx-auto mb-12 font-bold text-white">
                World-class construction and engineering solutions with cutting-edge AI technology.
              </p>
              <div className="flex items-center justify-center gap-x-8">
                <a
                  href="#services"
                  className="rounded-xl bg-primary px-10 py-4 text-lg font-semibold text-white shadow-xl hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  Our Services
                </a>
                <a 
                  href="#contact" 
                  className="text-lg font-semibold leading-6 text-background flex items-center gap-2 hover:text-primary transition-all duration-300 group"
                >
                  Get Started <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
             <button
                    onClick={() => {
                  const nextSection = document.getElementById('about') || document.querySelector('section:not(#home)');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                    }}
                    className="group flex flex-col items-center pt-20 justify-center gap-2 transition-all duration-300 hover:scale-110 w-full"
                    aria-label="Scroll down to see more content"
                  >
                    <div className="relative flex flex-col justify-center items-center w-fit">
                      <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300"> Scroll Down </div>
                      <div className="absolute flex top-10">
                        <ChevronDownIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white/80 group-hover:text-white transition-all duration-300 animate-bounce" />
                        <ChevronDownIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white/40 absolute top-2 left-0 transition-all duration-300 animate-bounce" style={{ animationDelay: '0.1s' }} />
                    </div>
                    </div>
                  </button>
          </div>
                </div>
        </div>


      {/* Simplified Stats */}
      <div className="relative z-10 bg-gradient-to-r from-primary via-primary-500 to-primary-600 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-primary-100 text-sm sm:text-base font-bold text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}
