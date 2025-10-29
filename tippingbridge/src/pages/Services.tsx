import { useState } from 'react'
import propertyImg from '../assets/propertymanagement.png'
import elderlyImg from '../assets/elderlycare.png'
import legalImg from '../assets/legalservices.png'
import conciergeImg from '../assets/nri.png'
import investImg from '../assets/mainnrispropertymanagement.png'

interface Service {
  title: string
  short: string
  desc: string
  img: string
}

const services: Service[] = [
  {
    title: 'Property Management',
    short: 'Complete property care — tenants to maintenance.',
    desc:
      'Managing property from overseas can be stressful. We take full responsibility — from finding reliable tenants to collecting rent, handling repairs, and conducting regular inspections. Stay informed via timely updates and digital reports.',
    img: propertyImg,
  },
  {
    title: 'Elderly Care',
    short: 'Care has no distance — compassionate support.',
    desc:
      'Your loved ones deserve trusted, respectful assistance — regular check‑ins, medical coordination, emotional support, and daily needs. With verified caregivers and personalized attention, we bring peace of mind.',
    img: elderlyImg,
  },
  {
    title: 'Legal & Documentation',
    short: 'Simplifying paperwork, so you can focus on what matters.',
    desc:
      'Drafting and managing Power of Attorney, property registration, taxation, and other paperwork with confidentiality and accuracy. Your documents handled securely, your interests protected.',
    img: legalImg,
  },
  {
    title: 'Concierge & Lifestyle',
    short: 'Your personal team for every little task.',
    desc:
      'Utilities, bills, travel bookings, and home services — our Concierge team keeps everything running smoothly in your absence for a luxury, reliable experience.',
    img: conciergeImg,
  },
  {
    title: 'Investment & Financial Guidance',
    short: 'Secure your future with smart support.',
    desc:
      'Make informed decisions about real estate and asset investments in India. From identifying opportunities to NRI‑compliant execution, we provide transparent, end‑to‑end assistance.',
    img: investImg,
  },
]

export default function Services() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen section-padding bg-gradient-to-b from-brandCream to-white">
      <div className="container max-w-5xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brandGreen-800 mb-8 sm:mb-10 lg:mb-12 text-center">
          Our Services
        </h1>

        <div className="space-y-6 sm:space-y-8">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="group [perspective:1000px]"
              onTouchStart={() => setFlippedIndex(flippedIndex === idx ? null : idx)}
              onClick={() => setFlippedIndex(flippedIndex === idx ? null : idx)}
            >
              <div
                className={`relative h-[280px] sm:h-[320px] md:h-[360px] w-full [transform-style:preserve-3d] transition-transform duration-700 ${
                  flippedIndex === idx ? '[transform:rotateY(180deg)]' : ''
                } ${window.innerWidth >= 768 ? 'group-hover:[transform:rotateY(180deg)]' : ''}`}
              >
                {/* Front */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-white border-2 border-brandGold-300/40 [backface-visibility:hidden]">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brandGreen-900/80 via-brandGreen-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-white/90 text-sm sm:text-base">{s.short}</p>
                    <p className="text-white/80 text-xs sm:text-sm mt-2 md:hidden">
                      Tap to see details
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-brandCream-50 border-2 border-brandGold-300/40 p-5 sm:p-6 md:p-8 flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-semibold text-brandGreen-800 mb-3 sm:mb-4">
                    {s.title}
                  </h3>
                  <p className="text-brandGreen-700 mt-2 font-medium text-sm sm:text-base mb-3 sm:mb-4">
                    {s.short}
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
