import { useEffect, useState } from 'react'

interface Slide {
  title: string
  subtitle: string
}

const slides: Slide[] = [
  { title: 'Caring for your loved ones, just like family.', subtitle: 'Elderly Care for NRIs' },
  { title: 'Your property, our priority.', subtitle: 'End‑to‑End Property Management' },
  { title: 'Legal ease for NRIs, wherever you are.', subtitle: 'Legal & Documentation' },
  { title: 'Every little task handled back home.', subtitle: 'Concierge & Lifestyle Services' },
  { title: 'Invest in India with confidence.', subtitle: 'Investment & Financial Guidance' },
]

export default function HeroSlider() {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[500px] sm:h-[560px] md:h-[640px] lg:h-[700px] overflow-hidden bg-gradient-to-br from-brandCream via-brandCream-100 to-brandGold-50">
      {/* Rich luxury gradient background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-brandBlue-400/30 via-brandCream to-brandPink-200/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-brandGreen-900/5 via-transparent to-transparent" />
      </div>

      {/* Slide content */}
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-20 sm:pt-24">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-x-0 px-4 sm:px-6 lg:px-8 flex items-center transition-opacity duration-700 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="max-w-3xl w-full">
              <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-brandGold-200/40 to-brandPink-200/40 backdrop-blur-sm text-brandGreen-700 text-xs sm:text-sm font-semibold border border-brandGold-300/30 shadow-sm">
                {s.subtitle}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-tight text-brandGreen-800 drop-shadow-sm">
                {s.title}
              </h1>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#services" className="btn btn-primary text-center px-6 py-3 sm:py-3">Explore Services</a>
                <a href="/contact" className="btn btn-secondary text-center px-6 py-3 sm:py-3">Contact Us</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${i === index ? 'bg-brandGreen-600 w-8 sm:w-10 shadow-md' : 'bg-brandGreen-400/50 w-2 sm:w-2.5 hover:bg-brandGreen-400/70'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
