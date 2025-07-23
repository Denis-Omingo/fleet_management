'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  MapPin, 
  Clock,
  CheckCircle,
  Target,
  Eye,
  Heart
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

export default function About() {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Vehicles Monitored" },
    { icon: <Award className="h-8 w-8" />, number: "50+", label: "Fleet Operators" },
    { icon: <MapPin className="h-8 w-8" />, number: "3", label: "Major Cities Covered" },
    { icon: <Clock className="h-8 w-8" />, number: "24/7", label: "Emergency Support" }
  ];

  const team = [
    {
      name: "Alex Kisau",
      role: "CEO & Founder",
      description: "15+ years in automotive technology and fleet management solutions.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Orem Wafula",
      role: "CTO",
      description: "IoT systems architect with expertise in vehicle diagnostics and telematics.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "James Mokaya",
      role: "Head of Operations",
      description: "Former fleet manager with deep understanding of transport industry challenges.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Mary Wamboi",
      role: "Customer Success Manager",
      description: "Dedicated to ensuring our clients achieve maximum value from our solutions.",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge IoT solutions that transform fleet management in Kenya."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Reliability",
      description: "Our clients depend on us for critical services. We deliver consistent, reliable solutions 24/7."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Focus",
      description: "Every solution is tailored to meet the unique needs of Kenyan transport operators."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in service delivery and technical expertise."
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
              About FleetTech Kenya
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading Kenyas transport technology revolution with innovative IoT solutions 
              and professional automotive services since 2020.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
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
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  FleetTech Kenya was founded in 2025 with a vision to revolutionize how transport 
                  operators manage their fleets across Kenya. Starting from our headquarters in 
                  Westlands, Nairobi, we identified the unique challenges facing the Kenyan 
                  transport industry.
                </p>
                <p>
                  Our founders, with combined decades of experience in automotive technology and 
                  fleet management, recognized the need for affordable, reliable IoT solutions 
                  tailored specifically for African road conditions and business environments.
                </p>
                <p>
                  Today, we serve over 50 fleet operators across Kenya, monitoring more than 500 
                  vehicles in real-time while providing emergency automotive services 24/7. Our 
                  growth reflects our commitment to solving real problems with innovative technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-blue-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <div className="flex items-start space-x-3 mb-6">
                  <Target className="h-6 w-6 text-orange-300 mt-1 flex-shrink-0" />
                  <p>
                    To empower Kenyan transport operators with cutting-edge IoT technology 
                    and reliable automotive services that improve efficiency, reduce costs, 
                    and enhance safety.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <div className="flex items-start space-x-3">
                  <Eye className="h-6 w-6 text-orange-300 mt-1 flex-shrink-0" />
                  <p>
                    To become East Africas leading provider of integrated fleet management 
                    and automotive technology solutions, setting the standard for innovation 
                    and service excellence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The experts driving Kenyas fleet technology revolution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose FleetTech Kenya?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-blue-100">
                  Deep understanding of Kenyan roads, regulations, and business environment.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-blue-100">
                  Round-the-clock emergency response and technical support when you need it.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-blue-100">
                  Track record of helping clients reduce costs and improve efficiency.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
