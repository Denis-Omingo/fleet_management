'use client';

import { motion } from 'framer-motion';
import { 
  Car, 
  Smartphone, 
  Shield, 
  Zap,
  Wrench,
  MapPin,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <Car className="h-12 w-12" />,
      title: "Key Programming",
      description: "Professional car key programming and replacement for all vehicle makes and models",
      features: [
        "All major vehicle brands supported",
        "Remote and transponder keys",
        "Key fob programming",
        "Immobilizer bypass solutions"
      ],
      price: "From KES 3,500"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Remote Fleet Diagnostics",
      description: "Real-time vehicle monitoring and diagnostics through our IoT platform",
      features: [
        "Real-time engine diagnostics",
        "GPS tracking and location",
        "Fuel consumption monitoring",
        "Predictive maintenance alerts"
      ],
      price: "From KES 2,000/month"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Emergency Unlocking",
      description: "24/7 emergency vehicle unlocking services across Kenya",
      features: [
        "24/7 emergency response",
        "All vehicle types",
        "Non-destructive entry",
        "Average 45-minute response time"
      ],
      price: "From KES 2,500"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Garage Dispatch Services",
      description: "On-demand certified technician dispatch to your location",
      features: [
        "Certified mobile technicians",
        "On-site repairs and maintenance",
        "Emergency breakdown assistance",
        "Covering Nairobi, Mombasa, Kisumu"
      ],
      price: "From KES 1,500 + parts"
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "ECU Diagnostics",
      description: "Advanced engine control unit diagnostics and programming",
      features: [
        "Complete ECU analysis",
        "Error code reading and clearing",
        "Performance optimization",
        "Emissions compliance checks"
      ],
      price: "From KES 4,000"
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "GPS Fleet Tracking",
      description: "Comprehensive GPS tracking solutions for fleet management",
      features: [
        "Real-time vehicle location",
        "Route optimization",
        "Driver behavior monitoring",
        "Theft prevention and recovery"
      ],
      price: "From KES 1,200/month per vehicle"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Vehicle Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              From emergency assistance to advanced IoT fleet management, we provide 
              complete automotive solutions for transport industry in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-help">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Request Service Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-orange-500 hover:bg-white hover:text-blue-600">
                  Get Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional automotive solutions tailored for Kenyan roads
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardHeader>
                    <div className="text-blue-600 mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-blue-600">
                          {service.price}
                        </span>
                        <Link href="/request-help">
                          <Button size="sm">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose FleetTech Kenya?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Emergency Response</h3>
                    <p className="text-gray-600">Round-the-clock emergency services with average 45-minute response time across major Kenyan cities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Certified Technicians</h3>
                    <p className="text-gray-600">All our technicians are certified and experienced with the latest automotive technology and IoT systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Nationwide Coverage</h3>
                    <p className="text-gray-600">Serving major cities across Kenya including Nairobi, Mombasa, Kisumu, and expanding rapidly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Smartphone className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Advanced IoT Platform</h3>
                    <p className="text-gray-600">Cutting-edge technology for real-time monitoring, diagnostics, and fleet management solutions.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-600 rounded-lg p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Service Coverage Areas</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-blue-500 pb-2">
                  <span>Nairobi & Surrounding</span>
                  <span className="text-green-300">✓ Active</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-500 pb-2">
                  <span>Mombasa Region</span>
                  <span className="text-green-300">✓ Active</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-500 pb-2">
                  <span>Kisumu Area</span>
                  <span className="text-green-300">✓ Active</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-500 pb-2">
                  <span>Nakuru Region</span>
                  <span className="text-yellow-300">⏳ Coming Soon</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Eldoret Area</span>
                  <span className="text-yellow-300">⏳ Coming Soon</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-500">
                <h4 className="font-semibold mb-3">Emergency Hotline</h4>
                <p className="text-2xl font-bold text-orange-300">+254 113 890 709</p>
                <p className="text-blue-200 text-sm mt-1">Available 24/7 for emergencies</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}