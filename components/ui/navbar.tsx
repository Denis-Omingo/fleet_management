'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet Solutions', href: '/fleet-solutions' },
    { name: 'Request Help', href: '/request-help' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Car className={`h-8 w-8 transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`} />
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                FleetTech Kenya
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-orange-500 ${
                    pathname === item.href
                      ? (isScrolled ? 'text-orange-500' : 'text-orange-400')
                      : (isScrolled ? 'text-gray-700' : 'text-white/90')
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
                      layoutId="navbar-indicator"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link href={user.role === 'admin' ? '/admin/dashboard' : '/dashboard'}>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className={`transition-colors duration-300 ${
                        isScrolled 
                          ? 'text-gray-700 hover:text-orange-500' 
                          : 'text-white hover:text-orange-400'
                      }`}
                    >
                      <User className="h-4 w-4 mr-2" />
                      {user.name}
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleLogout}
                    className={`transition-colors duration-300 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-red-500' 
                        : 'text-white hover:text-red-400'
                    }`}
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <Link href="/auth/signin">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className={`transition-colors duration-300 ${
                        isScrolled 
                          ? 'text-gray-700 hover:text-orange-500' 
                          : 'text-white hover:text-orange-400'
                      }`}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button 
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600 text-white border-0"
                    >
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`} />
              ) : (
                <Menu className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-base font-medium transition-colors duration-200 ${
                      pathname === item.href
                        ? 'text-orange-500'
                        : 'text-gray-700 hover:text-orange-500'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  {user ? (
                    <>
                      <Link
                        href={user.role === 'admin' ? '/admin/dashboard' : '/dashboard'}
                        className="block text-base font-medium text-gray-700 hover:text-orange-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User className="h-4 w-4 inline mr-2" />
                        {user.name}
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="block text-base font-medium text-gray-700 hover:text-red-500"
                      >
                        <LogOut className="h-4 w-4 inline mr-2" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/auth/signin"
                        className="block text-base font-medium text-gray-700 hover:text-orange-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/auth/signup"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                          Get Started
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}