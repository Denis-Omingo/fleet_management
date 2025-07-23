'use client';

import { motion } from 'framer-motion';
import { 
  Smartphone, 
  MapPin, 
  BarChart3, 
  Shield,
  Fuel,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';
import Link from 'next/link';

export default function FleetSolutions() {
  const solutions = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Real-Time GPS Tracking",
      description: "Monitor your entire fleet in real-time with precise GPS tracking and route optimization.",
      features: ["Live vehicle location", "Route history", "Geofencing alerts", "Speed monitoring"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to optimize fleet performance and reduce costs.",
      features: ["Performance dashboards", "Cost analysis", "Efficiency reports", "Predictive insights"]
    },
    {
      icon: <Fuel className="h-8 w-8" />,
      title: "Fuel Management",
      description: "Monitor fuel consumption, detect theft, and optimize fuel efficiency across your fleet.",
      features: ["Fuel consumption tracking", "Theft detection", "Efficiency optimization", "Cost savings"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Vehicle Security",
      description: "Advanced security features including immobilization, theft alerts, and recovery assistance.",
      features: ["Remote immobilization", "Theft alerts", "Recovery assistance", "Driver authentication"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Driver Management",
      description: "Monitor driver behavior, improve safety, and enhance overall fleet performance.",
      features: ["Behavior monitoring", "Safety scoring", "Training insights", "Performance tracking"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Maintenance Alerts",
      description: "Predictive maintenance scheduling to prevent breakdowns and reduce repair costs.",
      features: ["Scheduled maintenance", "Breakdown prevention", "Cost optimization", "Service reminders"]
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "KES 2,000",
      period: "per vehicle/month",
      description: "Perfect for small fleets getting started with IoT tracking",
      features: [
        "Real-time GPS tracking",
        "Basic reporting",
        "Mobile app access",
        "Email support",
        "Up to 5 vehicles"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "KES 3,500",
      period: "per vehicle/month",
      description: "Advanced features for growing transport businesses",
      features: [
        "Everything in Starter",
        "Advanced analytics",
        "Fuel management",
        "Driver behavior monitoring",
        "24/7 phone support",
        "Up to 25 vehicles"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive solution for large fleet operations",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "On-site training",
        "Priority support",
        "Unlimited vehicles"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppFloat />
      
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
              IoT Fleet Management Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform your fleet operations with our cutting-edge IoT platform. 
              Monitor, manage, and optimize your vehicles in real-time across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-help">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-orange-500 hover:bg-white hover:text-blue-600">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
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
              Comprehensive Fleet Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage your fleet efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
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
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Why Choose Our Fleet Solutions?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <BarChart3 className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Reduce Operating Costs</h3>
                    <p className="text-gray-600">Cut fuel costs by 15-20% and maintenance expenses by 30% with our optimization tools.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Enhance Security</h3>
                    <p className="text-gray-600">Protect your assets with real-time theft alerts and remote immobilization capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Improve Efficiency</h3>
                    <p className="text-gray-600">Optimize routes, reduce idle time, and improve overall fleet productivity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Better Driver Management</h3>
                    <p className="text-gray-600">Monitor driver behavior, improve safety, and reduce insurance costs.</p>
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
              <h3 className="text-2xl font-bold mb-6">Fleet Performance Metrics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span>Fuel Efficiency Improvement</span>
                  <span className="text-2xl font-bold text-orange-300">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Maintenance Cost Reduction</span>
                  <span className="text-2xl font-bold text-orange-300">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Route Optimization</span>
                  <span className="text-2xl font-bold text-orange-300">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Driver Safety Score</span>
                  <span className="text-2xl font-bold text-orange-300">95%</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-500">
                <h4 className="font-semibold mb-3">ROI Calculator</h4>
                <p className="text-blue-200 text-sm">
                  Most clients see a return on investment within 6-8 months through 
                  reduced fuel costs, improved efficiency, and lower maintenance expenses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your fleet size and requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`card-hover h-full relative ${pkg.popular ? 'ring-2 ring-orange-500' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                      <span className="text-gray-600 ml-2">{pkg.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{pkg.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact">
                      <Button 
                        className={`w-full ${
                          pkg.popular 
                            ? 'bg-orange-500 hover:bg-orange-600' 
                            : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Fleet?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of transport operators who have revolutionized their 
              fleet operations with our IoT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Schedule Free Demo
                </Button>
              </Link>
              <Link href="/request-help">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}