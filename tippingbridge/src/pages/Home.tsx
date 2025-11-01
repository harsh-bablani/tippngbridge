import HeroSlider from '../components/HeroSlider'
import IconButtons from '../components/IconButtons'
import { Link } from 'react-router-dom'
import assistIcon from '../assets/assist.png'
import docsIcon from '../assets/docs.png'
import ecIcon from '../assets/ec.png'
import eventsIcon from '../assets/events.png'
import investIcon from '../assets/invest.png'
import pmIcon from '../assets/pm.png'
import stayIcon from '../assets/stay.png'

export default function Home() {
  const iconButtons = [
    { icon: assistIcon, label: 'Assist', link: '/services' },
    { icon: docsIcon, label: 'Docs', link: '/services' },
    { icon: ecIcon, label: 'Elderly Care', link: '/services' },
    { icon: eventsIcon, label: 'Events', link: '/services' },
    { icon: investIcon, label: 'Invest', link: '/services' },
    { icon: pmIcon, label: 'Property', link: '/services' },
    { icon: stayIcon, label: 'Stay', link: '/services' },
  ]

  const highlights = [
    { title: 'Property Management', text: 'End‑to‑end care for your home in India.', link: '/services' },
    { title: 'Elderly Care', text: 'Compassionate, reliable support for your loved ones.', link: '/services' },
    { title: 'Legal & Documentation', text: 'Paperwork made simple and secure.', link: '/services' },
    { title: 'Concierge Services', text: 'Utilities, bills, and errands handled.', link: '/services' },
  ]

  return (
    <div className="min-h-screen">
      <HeroSlider />

      {/* Icon Buttons Section */}
      <IconButtons buttons={iconButtons} />

      {/* About Preview */}
      <section className="section-padding bg-gradient-to-b from-brandCream to-white" id="about-preview">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brandGreen-800 leading-tight">
              About Tipping Bridge
            </h2>
            <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              We help NRIs manage property, care for family, and handle paperwork back home with
              transparency and trust. Wherever you live, we keep you connected to India.
            </p>
            <Link to="/about" className="btn btn-primary mt-6 sm:mt-8 inline-block">
              Learn More
            </Link>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-br from-brandGold-200/40 via-brandPink-200/30 to-brandBlue-200/40 blur-2xl opacity-60" />
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-brandBlue-400/30 via-brandCream to-brandPink-300/40 shadow-2xl border border-brandGold-300/30" />
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="section-padding bg-white" id="services">
        <div className="container">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brandGreen-800 mb-8 sm:mb-10 text-center sm:text-left">
            What We Do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-brandCream-50 to-white shadow-lg hover:shadow-xl border border-brandGold-200/40 hover:border-brandGreen-300/60 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-brandGreen-800 mb-2 sm:mb-3">
                  {h.title}
                </h4>
                <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">
                  {h.text}
                </p>
                <Link
                  to={h.link}
                  className="inline-block text-brandGreen-700 hover:text-brandGreen-800 font-semibold text-sm sm:text-base hover:underline transition-colors"
                >
                  View Service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-br from-brandBlue-100/30 via-brandCream to-brandPink-100/20">
        <div className="container text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brandGreen-800 mb-3 sm:mb-4">
            Need Assistance?
          </h3>
          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Reach out to us anytime. We are here 24/7.
          </p>
          <Link
            to="/contact"
            className="btn btn-primary inline-block px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
