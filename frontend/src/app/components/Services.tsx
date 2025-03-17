'use client'; // This is needed for client-side features in Next.js 13+

import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface ServiceProps {}

const Services: React.FC<ServiceProps> = () => {
  const [url, setUrl] = useState('');
  const [websiteContent, setWebsiteContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchWebsite = async () => {
    if (!url) {
      setError('Please enter a valid URL');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/fetch-website', { 
        url: url.startsWith('http') ? url : `https://${url}`,
      });
      setWebsiteContent(response.data);
    } catch (error) {
      console.error('Error fetching website:', error);
      setError('Failed to fetch website content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-50 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-8"
          >
            Check your website's responsiveness here...
          </motion.h1>

          <div className="flex flex-col items-center space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full max-w-xl"
            >
              <input
                className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm 
                  border border-white/20 text-white placeholder-white/50 focus:outline-none 
                  focus:ring-2 focus:ring-blue-500 transition-all"
                type="text"
                placeholder="Enter the URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 
                text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 
                transition-all disabled:opacity-50 disabled:cursor-not-allowed enabled:cursor-pointer"
              onClick={handleFetchWebsite}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Load Website'}
            </motion.button>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-center"
              >
                {error}
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: websiteContent ? 1 : 0 }}
            className="mt-8 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm 
              border border-white/10 shadow-xl"
          >
            {websiteContent ? (
              <iframe
                title="website-viewer"
                srcDoc={websiteContent}
                className="w-full h-[600px] bg-white"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            ) : (
              <div className="h-[600px] flex items-center justify-center text-white/60">
                Enter a URL to load the website.
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;