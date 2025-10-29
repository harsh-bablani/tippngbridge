import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brandGreen text-brandCream">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          <div>
            <h4 className="text-xl font-semibold">Tipping Bridge</h4>
            <p className="mt-3 text-brandCream/90">
              Trusted partner for NRIs — property, care, legal, concierge and more.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Follow Us</h5>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com/profile.php?id=100088852623320" target="_blank" className="hover:underline" rel="noreferrer">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/tipping-bridge/" target="_blank" className="hover:underline" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/tipping.bridge/" target="_blank" className="hover:underline" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-brandCream/80 pt-6">
          <p>&copy; {new Date().getFullYear()} Tipping Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
