'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { 
  Users, 
  Settings, 
  Bell, 
  Mail, 
  Eye,
  LogOut,
  Send,
  UserCheck,
  AlertCircle,
  CheckCircle
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
  role: string;
  lastSeen: string;
  status: 'active' | 'inactive';
}

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('users');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [generalMessage, setGeneralMessage] = useState('');
  const [privateMessage, setPrivateMessage] = useState('');

  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'James Kiprotich',
      email: 'james@nairobi-express.co.ke',
      role: 'Fleet Manager',
      lastSeen: '2025-01-15',
      status: 'active'
    },
    {
      id: '2',
      name: 'Mary Wanjiku',
      email: 'mary@safaricom.co.ke',
      role: 'Transport Manager',
      lastSeen: '2025-01-14',
      status: 'active'
    },
    {
      id: '3',
      name: 'Peter Ochieng',
      email: 'peter@campus-shuttle.co.ke',
      role: 'Operations Manager',
      lastSeen: '2025-01-10',
      status: 'inactive'
    },
    {
      id: '4',
      name: 'Grace Muthoni',
      email: 'grace@city-transport.co.ke',
      role: 'Fleet Owner',
      lastSeen: '2025-01-15',
      status: 'active'
    }
  ]);

  const [stats] = useState({
    totalUsers: 47,
    activeUsers: 32,
    pendingRequests: 8,
    completedServices: 156
  });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/auth/signin');
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    if (parsedUser.role !== 'admin') {
      toast.error('Access denied. Admin privileges required.');
      router.push('/dashboard');
      return;
    }
    
    setUser(parsedUser);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success('Successfully logged out');
    router.push('/');
  };

  const handleSendGeneralMessage = () => {
    if (!generalMessage.trim()) {
      toast.error('Please enter a message');
      return;
    }
    toast.success('General notification sent to all users');
    setGeneralMessage('');
  };

  const handleSendPrivateMessage = () => {
    if (!privateMessage.trim() || !selectedUser) {
      toast.error('Please select a user and enter a message');
      return;
    }
    toast.success(`Private message sent to ${selectedUser.name}`);
    setPrivateMessage('');
    setSelectedUser(null);
  };

  const handleViewProfile = (user: User) => {
    setSelectedUser(user);
    setActiveTab('profile');
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
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage users and system operations</p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Users</p>
                    <p className="text-2xl font-bold text-green-600">{stats.activeUsers}</p>
                  </div>
                  <UserCheck className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Requests</p>
                    <p className="text-2xl font-bold text-orange-600">{stats.pendingRequests}</p>
                  </div>
                  <AlertCircle className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed Services</p>
                    <p className="text-2xl font-bold text-blue-600">{stats.completedServices}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="users">User Management</TabsTrigger>
              <TabsTrigger value="profile">User Profile</TabsTrigger>
              <TabsTrigger value="notifications">Send Notifications</TabsTrigger>
              <TabsTrigger value="settings">System Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Registered Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {users.map((user) => (
                      <div key={user.id} className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <div>
                              <h3 className="font-semibold">{user.name}</h3>
                              <p className="text-sm text-gray-600">{user.email}</p>
                              <p className="text-sm text-gray-500">{user.role}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-sm text-gray-600">Last seen: {user.lastSeen}</p>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.status === 'active' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {user.status}
                            </span>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleViewProfile(user)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    User Profile Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedUser ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>Full Name</Label>
                          <Input value={selectedUser.name} readOnly />
                        </div>
                        <div>
                          <Label>Email Address</Label>
                          <Input value={selectedUser.email} readOnly />
                        </div>
                        <div>
                          <Label>Role</Label>
                          <Input value={selectedUser.role} readOnly />
                        </div>
                        <div>
                          <Label>Status</Label>
                          <Input value={selectedUser.status} readOnly />
                        </div>
                        <div>
                          <Label>Last Seen</Label>
                          <Input value={selectedUser.lastSeen} readOnly />
                        </div>
                        <div>
                          <Label>User ID</Label>
                          <Input value={selectedUser.id} readOnly />
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <Label htmlFor="private-message">Send Private Message</Label>
                        <div className="flex space-x-2 mt-2">
                          <Textarea
                            id="private-message"
                            placeholder={`Send a private message to ${selectedUser.name}...`}
                            value={privateMessage}
                            onChange={(e) => setPrivateMessage(e.target.value)}
                            className="flex-1"
                          />
                          <Button onClick={handleSendPrivateMessage}>
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Eye className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Select a user from the User Management tab to view their profile</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Send Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="general-message">General Update (All Users)</Label>
                    <div className="flex space-x-2 mt-2">
                      <Textarea
                        id="general-message"
                        placeholder="Send a notification to all users..."
                        value={generalMessage}
                        onChange={(e) => setGeneralMessage(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={handleSendGeneralMessage}>
                        <Mail className="h-4 w-4 mr-2" />
                        Send to All
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Notifications Sent</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-blue-800">System maintenance scheduled for this weekend</p>
                        <p className="text-xs text-blue-600 mt-1">Sent to all users • 2 days ago</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-green-800">New fleet monitoring features now available</p>
                        <p className="text-xs text-green-600 mt-1">Sent to all users • 5 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    System Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Platform Configuration</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>Emergency Response Time (minutes)</Label>
                          <Input value="45" readOnly />
                        </div>
                        <div>
                          <Label>Service Coverage Area</Label>
                          <Input value="Nairobi, Mombasa, Kisumu" readOnly />
                        </div>
                        <div>
                          <Label>Active Technicians</Label>
                          <Input value="23" readOnly />
                        </div>
                        <div>
                          <Label>Fleet Monitoring Interval</Label>
                          <Input value="Real-time" readOnly />
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">System Status</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <p className="font-semibold text-green-800">API Services</p>
                          <p className="text-sm text-green-600">Operational</p>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <p className="font-semibold text-green-800">Database</p>
                          <p className="text-sm text-green-600">Healthy</p>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <p className="font-semibold text-green-800">IoT Network</p>
                          <p className="text-sm text-green-600">Connected</p>
                        </div>
                      </div>
                    </div>
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