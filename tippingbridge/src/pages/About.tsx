import nriImg from '../assets/nri.png'

export default function About() {
  return (
    <div className="min-h-screen section-padding bg-gradient-to-b from-brandCream to-white">
      <div className="container grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brandGreen-800 leading-tight mb-6 sm:mb-8">
            About Us
          </h1>
          <div className="space-y-4 sm:space-y-5 text-gray-800 text-base sm:text-lg leading-relaxed">
            <p>
              At Tipping Bridge, we understand that living abroad often means staying miles away from the people and properties that matter most. That's why we've built a bridge — a trusted connection that helps Non‑Resident Indians (NRIs) manage everything back home with complete peace of mind.
            </p>
            <p>
              From property maintenance and tenant management to elderly care, legal assistance, and concierge support — we handle it all with transparency, care, and professionalism. Our goal is simple: to help you feel closer to home, no matter where in the world you are.
            </p>
            <p>
              We believe that trust is built through consistent action, clear communication, and genuine empathy — values that shape every service we offer.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 lg:mt-12 space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-brandCream-50 to-white p-5 sm:p-6 rounded-xl border border-brandGold-200/40 shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold text-brandGreen-800 mb-3 sm:mb-4">
                Our Vision
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                To become India's most trusted and transparent partner for NRIs — simplifying life, care, and property management back home through technology, reliability, and a human touch.
              </p>
            </div>
            <div className="bg-gradient-to-br from-brandCream-50 to-white p-5 sm:p-6 rounded-xl border border-brandGold-200/40 shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold text-brandGreen-800 mb-3 sm:mb-4">
                Our Mission
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                To provide seamless, end‑to‑end services that empower NRIs to manage their homes, assets, and family responsibilities in India without worry — backed by honesty, efficiency, and 24/7 support.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative framed image */}
        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 rounded-3xl bg-gradient-to-br from-brandGold-400/60 via-brandPink-300/50 to-brandBlue-300/50 blur-3xl opacity-70" />
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-brandGold-500 transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src={nriImg}
              alt="NRI care and property management"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
