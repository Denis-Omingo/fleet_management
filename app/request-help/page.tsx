'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Car,
  AlertTriangle,
  Send,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';
import { FaWhatsapp } from 'react-icons/fa';

export default function RequestHelp() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    serviceType: '',
    urgency: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    'Emergency Vehicle Unlocking',
    'Key Programming',
    'Remote Diagnostics',
    'Garage Dispatch',
    'Immobilizer Bypass',
    'ECU Diagnostics',
    'Fleet IoT Setup',
    'Roadside Assistance',
    'Other'
  ];

  const urgencyLevels = [
    { value: 'emergency', label: 'Emergency (Immediate)', color: 'text-red-600' },
    { value: 'urgent', label: 'Urgent (Within 2 hours)', color: 'text-orange-600' },
    { value: 'normal', label: 'Normal (Same day)', color: 'text-blue-600' },
    { value: 'scheduled', label: 'Scheduled (Next available)', color: 'text-green-600' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Service request submitted successfully! We will contact you shortly.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
      serviceType: '',
      urgency: '',
      description: ''
    });
    
    setIsSubmitting(false);
  };

  const handleWhatsAppEmergency = () => {
    const message = `🚨 EMERGENCY REQUEST 🚨\n\nName: ${formData.name || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nLocation: ${formData.location || 'Not provided'}\nVehicle: ${formData.vehicleMake} ${formData.vehicleModel}\nIssue: ${formData.description || 'Emergency assistance needed'}\n\nPlease respond immediately!`;
    const url = `https://wa.me/254113890709?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-red-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Need Immediate Vehicle Assistance?
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Our emergency response team is available 24/7 across Kenya. 
              Get professional help when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600"
                onClick={handleWhatsAppEmergency}
              >
                <FaWhatsapp className="h-5 w-5 mr-2" />
                Emergency WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-white text-blue-500 hover:bg-white hover:text-red-600">
                <Phone className="h-5 w-5 mr-2" />
                Call +254 113 890 709
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="py-12 bg-red-50 border-b-4 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Clock className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">24/7 Response</h3>
              <p className="text-gray-600">Emergency services available round the clock</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <MapPin className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">45-Min Average</h3>
              <p className="text-gray-600">Average response time across major cities</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Professional Team</h3>
              <p className="text-gray-600">Certified technicians with proper equipment</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Request Vehicle Assistance</CardTitle>
                <p className="text-center text-gray-600">
                  Fill out the form below and we will dispatch help to your location
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g., +254 113 890 709"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Current Location *</Label>
                    <Input
                      id="location"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g., Westlands, Nairobi or GPS coordinates"
                    />
                  </div>

                  {/* Vehicle Information */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Car className="h-5 w-5 mr-2" />
                      Vehicle Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="vehicleMake">Make *</Label>
                        <Input
                          id="vehicleMake"
                          required
                          value={formData.vehicleMake}
                          onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                          placeholder="e.g., Toyota"
                        />
                      </div>
                      <div>
                        <Label htmlFor="vehicleModel">Model *</Label>
                        <Input
                          id="vehicleModel"
                          required
                          value={formData.vehicleModel}
                          onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                          placeholder="e.g., Hiace"
                        />
                      </div>
                      <div>
                        <Label htmlFor="vehicleYear">Year</Label>
                        <Input
                          id="vehicleYear"
                          value={formData.vehicleYear}
                          onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                          placeholder="e.g., 2020"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Service Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="serviceType">Service Type *</Label>
                        <select
                          id="serviceType"
                          required
                          className="w-full rounded-md border border-gray-300 px-3 py-2"
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        >
                          <option value="">Select service type</option>
                          {serviceTypes.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgency Level *</Label>
                        <select
                          id="urgency"
                          required
                          className="w-full rounded-md border border-gray-300 px-3 py-2"
                          value={formData.urgency}
                          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        >
                          <option value="">Select urgency</option>
                          {urgencyLevels.map((level) => (
                            <option key={level.value} value={level.value}>
                              {level.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Problem Description *</Label>
                    <Textarea
                      id="description"
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Please describe the issue you're experiencing in detail..."
                      className="min-h-[120px]"
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit Request
                        </>
                      )}
                    </Button>
                    
                    {formData.urgency === 'emergency' && (
                      <Button
                        type="button"
                        onClick={handleWhatsAppEmergency}
                        className="flex-1 bg-green-500 hover:bg-green-600"
                      >
                        <FaWhatsapp className="h-4 w-4 mr-2" />
                        Emergency WhatsApp
                      </Button>
                    )}
                  </div>

                  <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
                    <strong>Note:</strong> For immediate emergencies, please call our 24/7 hotline at{' '}
                    <strong>+254 113 890 709</strong> or use the Emergency WhatsApp button above.
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Coverage Areas</h2>
            <p className="text-lg text-gray-600">We provide emergency assistance across major Kenyan cities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: 'Nairobi', status: 'Active', time: '30-45 min' },
              { city: 'Mombasa', status: 'Active', time: '45-60 min' },
              { city: 'Kisumu', status: 'Active', time: '45-60 min' },
              { city: 'Nakuru', status: 'Coming Soon', time: 'TBD' }
            ].map((area, index) => (
              <motion.div
                key={area.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{area.city}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                      area.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {area.status}
                    </span>
                    <p className="text-gray-600">Response: {area.time}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}