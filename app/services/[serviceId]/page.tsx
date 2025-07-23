import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/ui/navbar';
import Link from 'next/link';

type ServiceData = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: JSX.Element;
  features: string[];
  benefits: string[];
  pricing: { service: string; price: string }[];
  process: string[];
};

const services: Record<string, ServiceData> = {
  'key-programming': {
    title: 'Key Programming',
    subtitle: 'Smart Key Solutions',
    description: 'We offer advanced key programming for all vehicle models...',
    image: '/assets/key_programming.jpg',
    icon: <ArrowRight className="text-orange-500" />,
    features: ['Smart keys', 'Immobilizer programming', 'Transponder chips'],
    benefits: ['Quick turnaround', 'Secure', 'Affordable'],
    pricing: [
      { service: 'Key Duplication', price: 'KES 2,500' },
      { service: 'Remote Programming', price: 'KES 3,000' },
    ],
    process: ['Assessment', 'Programming', 'Testing', 'Delivery'],
  },
  'fleet-diagnostics': {
    title: 'Fleet Diagnostics',
    subtitle: 'Real-time Vehicle Health',
    description: 'Stay ahead of breakdowns with real-time diagnostic reports.',
    image: '/assets/fleet-diagnostics.jpg',
    icon: <ArrowRight className="text-orange-500" />,
    features: ['Engine Scans', 'Error Code Reporting', 'Live Metrics'],
    benefits: ['Preventive maintenance', 'Cost-saving', 'Fleet efficiency'],
    pricing: [
      { service: 'Engine Diagnostics', price: 'KES 1,500' },
      { service: 'Full Report', price: 'KES 2,500' },
    ],
    process: ['Plug-in Scan', 'Report Generation', 'Expert Review'],
  },
  'emergency-services': {
    title: 'Emergency Services',
    subtitle: 'Quick Response Team',
    description: 'Stay ahead of breakdowns with real-time emergency service request.',
    image: '/assets/emergency-services.jpg',
    icon: <ArrowRight className="text-orange-500" />,
    features: ['Engine Scans', 'Error Code Reporting', 'Live Metrics'],
    benefits: ['Preventive maintenance', 'Cost-saving', 'Fleet efficiency'],
    pricing: [
      { service: 'Engine Diagnostics', price: 'KES 1,500' },
      { service: 'Full Report', price: 'KES 2,500' },
    ],
    process: ['Plug-in Scan', 'Report Generation', 'Expert Review'],
  },
  'garage-dispatch': {
    title: 'Garage Dispatch',
    subtitle: 'Best Garage Dispatch Services',
    description: 'Stay ahead of breakdowns with real-time garage dispatch.',
    image: '/assets/fleet-diagnostics.jpg',
    icon: <ArrowRight className="text-orange-500" />,
    features: ['Engine Scans', 'Error Code Reporting', 'Live Metrics'],
    benefits: ['Preventive maintenance', 'Cost-saving', 'Fleet efficiency'],
    pricing: [
      { service: 'Engine Diagnostics', price: 'KES 1,500' },
      { service: 'Full Report', price: 'KES 2,500' },
    ],
    process: ['Plug-in Scan', 'Report Generation', 'Expert Review'],
  },
};

// Required for static export with dynamic routes
export async function generateStaticParams() {
  return Object.keys(services).map((id) => ({ serviceId: id }));
}

export default function ServicePage({ params }: { params: { serviceId: string } }) {
  const service = services[params.serviceId];

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-white text-gray-800">
        <Navbar/>
      <section className="relative h-[400px] w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl font-bold">{service.title}</h1>
            <p className="text-xl mt-2">{service.subtitle}</p>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700">{service.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {service.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {service.benefits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <table className="w-full border text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Service</th>
                <th className="p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {service.pricing.map((p, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{p.service}</td>
                  <td className="p-2">{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            {service.process.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>

        <div className="text-center">
          <Link href="/contact">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Book This Service
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
