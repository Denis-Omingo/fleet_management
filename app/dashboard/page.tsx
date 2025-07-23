'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { 
  Car, 
  User, 
  Settings, 
  Bell, 
  FileText, 
  MapPin, 
  Phone,
  LogOut,
  Plus,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Navbar } from '@/components/ui/navbar';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [serviceRequests, setServiceRequests] = useState([
    {
      id: '1',
      type: 'Emergency Unlocking',
      status: 'Completed',
      date: '2025-01-15',
      location: 'Westlands, Nairobi'
    },
    {
      id: '2',
      type: 'Key Programming',
      status: 'In Progress',
      date: '2025-01-14',
      location: 'Industrial Area, Nairobi'
    }
  ]);

  const [notifications] = useState([
    {
      id: '1',
      message: 'Your key programming service has been completed',
      date: '2025-01-15',
      read: false
    },
    {
      id: '2',
      message: 'New fleet monitoring features are now available',
      date: '2025-01-14',
      read: true
    }
  ]);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/auth/signin');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success('Successfully logged out');
    router.push('/');
  };

  const handleServiceRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Service request submitted successfully!');
    // Add new request to the list
    const newRequest = {
      id: String(serviceRequests.length + 1),
      type: 'Remote Diagnostics',
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
      location: 'Pending Location'
    };
    setServiceRequests([newRequest, ...serviceRequests]);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
              <p className="text-gray-600">Manage your vehicle services and fleet operations</p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="requests">My Requests</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={user.name} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" value={user.email} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" value={user.phone || '+254 113 890 709'} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="role">Account Type</Label>
                      <Input id="role" value={user.role === 'admin' ? 'Administrator' : 'Standard User'} readOnly />
                    </div>
                  </div>
                  <Button disabled className="w-full md:w-auto">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile (Coming Soon)
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Car className="h-5 w-5 mr-2" />
                    Request New Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleServiceRequest} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service-type">Service Type</Label>
                        <select className="w-full rounded-md border border-gray-300 px-3 py-2" required>
                          <option value="">Select a service</option>
                          <option value="key-programming">Key Programming</option>
                          <option value="emergency-unlock">Emergency Unlocking</option>
                          <option value="remote-diagnostics">Remote Diagnostics</option>
                          <option value="garage-dispatch">Garage Dispatch</option>
                          <option value="immobilizer-bypass">Immobilizer Bypass</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="vehicle-make">Vehicle Make/Model</Label>
                        <Input id="vehicle-make" placeholder="e.g., Toyota Hiace" required />
                      </div>
                      <div>
                        <Label htmlFor="location">Current Location</Label>
                        <Input id="location" placeholder="e.g., Westlands, Nairobi" required />
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <select className="w-full rounded-md border border-gray-300 px-3 py-2" required>
                          <option value="normal">Normal</option>
                          <option value="urgent">Urgent</option>
                          <option value="emergency">Emergency</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description">Problem Description</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Please describe the issue you're experiencing..."
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full md:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Submit Service Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requests">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    My Service Requests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {serviceRequests.map((request) => (
                      <div key={request.id} className="border rounded-lg p-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{request.type}</h3>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {request.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <Clock className="h-4 w-4 mr-1" />
                            {request.date}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            request.status === 'Completed' 
                              ? 'bg-green-100 text-green-800'
                              : request.status === 'In Progress'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {request.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className={`border rounded-lg p-4 ${
                        !notification.read ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="text-gray-900">{notification.message}</p>
                            <p className="text-sm text-gray-600 mt-1">{notification.date}</p>
                          </div>
                          {!notification.read && (
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}