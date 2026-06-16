'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section-navy">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4">Clearwater Plumbing</h3>
            <p className="text-sm text-gray-300 mb-4">
              Fast. Dependable. Professional.
            </p>
            <p className="text-xs text-gray-400">
              Serving the Lower Mainland since 2012
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-blue transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4">Get in Touch</h4>
            <p className="text-sm mb-2">
              <span className="text-gray-300">Phone:</span>{' '}
              <a href="tel:6045550123" className="text-blue hover:text-yellow-400">
                (604) 555-0123
              </a>
            </p>
            <p className="text-sm mb-2">
              <span className="text-gray-300">Email:</span>{' '}
              <a href="mailto:info@clearwaterplumbing.com" className="text-blue hover:text-yellow-400">
                info@clearwaterplumbing.com
              </a>
            </p>
            <p className="text-xs text-gray-400 mt-4">
              Available 24/7 for emergencies
            </p>
          </div>
        </div>

        <div className="border-t border-blue/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              Licensed #L12345 | Insured | Bonded
            </p>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Clearwater Plumbing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
