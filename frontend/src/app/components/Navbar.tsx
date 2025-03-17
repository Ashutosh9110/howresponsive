"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation' // Add this for active route detection

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const pathname = usePathname(); // Get current route path

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services' },
    { title: 'Our Team', href: '/team' },
    { title: 'Contact', href: '/contact' } // Changed from '#' to actual route
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'bg-white/10 backdrop-blur-md shadow-lg shadow-white/[0.03] border-b border-white/10' 
          : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <motion.h1 
                className="text-3xl font-bold bg-clip-text text-transparent 
                  bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 
                  cursor-pointer filter drop-shadow-lg"
              >
                <span>How</span>
                Responsive
              </motion.h1>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 
                  opacity-30 blur-xl -z-10"
              />
            </motion.div>
          </Link>

          {/* Navigation Items */}
          <motion.ul 
            className="flex space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.li 
                key={item.title}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href={item.href}
                  className={`outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2
                    ${pathname === item.href ? 'text-white' : 'text-white/90 hover:text-white'}
                  `}
                >
                  <span className="relative text-lg font-medium">
                    {item.title}
                    {(hoveredItem === index || pathname === item.href) && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute left-0 right-0 h-0.5 -bottom-1 bg-gradient-to-r 
                          from-purple-500 via-blue-500 to-teal-500"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </span>
                </Link>
                {hoveredItem === index && (
                  <motion.div
                    className="absolute -inset-3 bg-gradient-to-r from-purple-500/20 
                      via-blue-500/20 to-teal-500/20 rounded-lg blur-sm -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;