import Link from 'next/link';
import { Car, Phone, MapPin, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">FleetTech Kenya</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of IoT-driven SaaS services for transport operators and comprehensive 
              automotive assistance across Kenya.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-sm">Westlands, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-sm">+254 113 890 709</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-sm">info@fleettechkenya.vercel.app</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link href="/fleet-solutions" className="text-gray-300 hover:text-orange-500 transition-colors">Fleet Solutions</Link></li>
              <li><Link href="/request-help" className="text-gray-300 hover:text-orange-500 transition-colors">Request Help</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Key Programming</span></li>
              <li><span className="text-gray-300">Remote Diagnostics</span></li>
              <li><span className="text-gray-300">Emergency Unlocking</span></li>
              <li><span className="text-gray-300">GPS Tracking</span></li>
              <li><span className="text-gray-300">ECU Diagnostics</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 FleetTech Kenya. All rights reserved. Developed By <a href="https://denis-omingo.vercel.app">Denis Omingo</a>.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}