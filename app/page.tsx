'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Car, Shield, Smartphone, Zap } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/ui/footer';

const services = [
  {
    id: 'key-programming',
    title: 'Key Programming',
    subtitle: 'Professional car key programming and replacement services',
    description: 'Expert key programming for all vehicle makes and models with advanced security features.',
    image: '/assets/key_programming.jpg',
    icon: <Car className="h-8 w-8" />,
  },
  {
    id: 'fleet-diagnostics',
    title: 'Fleet Diagnostics',
    subtitle: 'Real-time IoT monitoring and diagnostics',
    description: 'Advanced IoT platform for comprehensive fleet management and real-time vehicle monitoring.',
    image: '/assets/fleet-diagnostics.jpg',
    icon: <Smartphone className="h-8 w-8" />,
  },
  {
    id: 'emergency-services',
    title: 'Emergency Services',
    subtitle: '24/7 emergency vehicle assistance',
    description: 'Round-the-clock emergency unlocking and roadside assistance across Kenya.',
    image: '/assets/emergency-services.jpg',
    icon: <Shield className="h-8 w-8" />,
  },
  {
    id: 'garage-dispatch',
    title: 'Garage Dispatch',
    subtitle: 'Mobile technician services',
    description: 'Professional mobile technicians dispatched to your location for on-site repairs.',
    image: '/assets/garage-dispatch.jpg',
    icon: <Zap className="h-8 w-8" />,
  },
];

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Autoplay on mobile only
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveService((prev) =>
        prev === null ? 1 : (prev + 1) % services.length
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const handleServiceClick = (serviceId: string) => {
    router.push(`/services/${serviceId}`);
  };

  const activeIndex = activeService ?? 0;
  const bgImage = services[activeIndex].image;

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppFloat />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.div
            key={bgImage}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Image
              src={bgImage}
              alt="background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Slides */}
        <div className="relative z-10 w-full h-full flex overflow-x-auto snap-x snap-mandatory md:overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`relative snap-start flex-shrink-0 ${
                isMobile ? 'w-full h-screen' : 'md:flex-1 cursor-pointer'
              } ${!isMobile && activeService === index ? 'md:flex-[2]' : ''} transition-all duration-500`}
              onMouseEnter={() => !isMobile && setActiveService(index)}
              onMouseLeave={() => !isMobile && setActiveService(null)}
              onClick={() => handleServiceClick(service.id)}
              whileHover={{ scale: isMobile ? 1 : 1.02 }}
              onTouchStart={() => isMobile && setActiveService(index)}
            >
              <div className="h-full flex flex-col justify-center items-center text-center p-6 text-white">
                <div className="space-y-4">
                  <div className="text-orange-400">{service.icon}</div>
                  <h2
                    className={`font-bold ${
                      activeService === index ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                    }`}
                  >
                    {service.title}
                  </h2>
                  <p
                    className={`transition-all ${
                      activeService === index ? 'text-lg opacity-100' : 'text-sm opacity-80'
                    }`}
                  >
                    {service.subtitle}
                  </p>

                  {activeService === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1 }}
                      className="space-y-4"
                    >
                      <p className="text-white/80 max-w-md mx-auto">
                        {service.description}
                      </p>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceClick(service.id);
                        }}
                        className="bg-orange-500 hover:bg-orange-600"
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}
                </div>
              </div>
              {!isMobile && index < services.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/20" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Dots (Mobile Only) */}
        {isMobile && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {services.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === activeIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">About FleetTech Kenya</h2>
          <p className="text-lg text-gray-700">
            We are a Kenyan-based vehicle tech solutions provider specializing in advanced diagnostics,
            emergency assistance, key programming, and mobile garage dispatch. With real-time IoT monitoring,
            we help fleet businesses stay in control and reduce costs.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Denis Omingo',
                company: 'System Developer',
                comment:
                  'FleetTech Kenya transformed our fleet management. Real-time tracking and diagnostics have reduced our maintenance costs by 30%.',
              },
              {
                name: 'Mary Amollo',
                company: 'Safaricom Transport Division',
                comment:
                  'Their emergency response time is incredible. When our delivery van broke down in Mombasa, they had a technician there within 45 minutes.',
              },
              {
                name: 'Peter Kamau',
                company: 'Campus Shuttle Services',
                comment:
                  'The key programming service saved us thousands. Professional, reliable, and much more affordable than dealership prices.',
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
                <p className="italic text-gray-600 mb-4">“{t.comment}”</p>
                <div className="font-semibold text-gray-800">{t.name}</div>
                <div className="text-sm text-gray-500">{t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to optimize your fleet?</h2>
          <p className="mb-6 text-lg">
            Contact us today to learn how FleetTech Kenya can improve your vehicle security and performance.
          </p>
          <Button
            className="bg-white text-orange-600 hover:bg-gray-100"
            onClick={() => router.push('/contact')}
          >
            Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
       <Footer />
    </div>
  );
}
