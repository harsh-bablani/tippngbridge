import { useState } from 'react'

const WHATSAPP_NUMBER = '73036676000'

export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const composed = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(composed)}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen section-padding bg-gradient-to-b from-brandCream to-white">
      <div className="container grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brandGreen-800 mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8">
            We usually respond within minutes on WhatsApp.
          </p>
          <form
            onSubmit={submitWhatsApp}
            className="space-y-4 sm:space-y-5 bg-gradient-to-br from-white to-brandCream-50 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-brandGold-200/40"
          >
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-brandGreen focus:ring-2 focus:ring-brandGreen-300 text-base transition-all"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-brandGreen focus:ring-2 focus:ring-brandGreen-300 text-base transition-all"
                placeholder="+91 1234567890"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                What do you want to talk about?
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                required
                className="w-full px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-brandGreen focus:ring-2 focus:ring-brandGreen-300 text-base transition-all resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full py-3 sm:py-4 text-base sm:text-lg mt-2"
            >
              Send to WhatsApp
            </button>
          </form>
        </div>
        <div className="bg-gradient-to-br from-white to-brandCream-50 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-brandGold-200/40 h-fit lg:sticky lg:top-24">
          <h2 className="text-xl sm:text-2xl font-semibold text-brandGreen-800 mb-4 sm:mb-6">
            Business Info
          </h2>
          <ul className="space-y-3 sm:space-y-4 text-gray-800 text-sm sm:text-base">
            <li className="flex items-start">
              <strong className="text-brandGreen-700 min-w-[70px] sm:min-w-[80px]">Email:</strong>
              <a
                href="mailto:info@tippingbridge.com"
                className="text-brandGreen-600 hover:text-brandGreen-800 hover:underline break-all"
              >
                info@tippingbridge.com
              </a>
            </li>
            <li className="flex items-start">
              <strong className="text-brandGreen-700 min-w-[70px] sm:min-w-[80px]">Mobile:</strong>
              <a
                href={`tel:+91${WHATSAPP_NUMBER}`}
                className="text-brandGreen-600 hover:text-brandGreen-800 hover:underline"
              >
                +91 {WHATSAPP_NUMBER}
              </a>
            </li>
            <li className="flex items-start">
              <strong className="text-brandGreen-700 min-w-[70px] sm:min-w-[80px]">Address:</strong>
              <span className="text-gray-700">
                Plot No- 1791, Sector 52, Gurgaon, Haryana. Pin - 122002
              </span>
            </li>
          </ul>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary text-center"
            >
              WhatsApp Chat
            </a>
            <a
              href="mailto:info@tippingbridge.com"
              className="btn btn-secondary text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
