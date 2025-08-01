"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation/Header */}
      <motion.section 
        className="w-full bg-[#ffffff]" 
        role="banner" 
        aria-label="Main navigation"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-4 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Left side - Logo and navigation */}
            <div className="flex items-center space-x-8">
              <Link href="/">
                <button className="text-2xl font-bold text-[#191c1f]">StellarPay</button>
              </Link>
              <nav className="flex items-center space-x-1">
                <button className="bg-[#0065ff] hover:bg-[#0065ff]/90 text-white rounded-full px-6 py-2 text-sm font-medium font-semibold">Personal</button>
                <button className="text-[#191c1f] hover:bg-[#f7f7f7] rounded-full px-6 py-2 text-sm font-medium font-semibold">Business</button>
                <Link href="https://www.meetgeorge.app/">
                <button className="text-[#191c1f] hover:bg-[#f7f7f7] rounded-full px-6 py-2 text-sm font-medium font-semibold">George</button>
                </Link>
              </nav>
            </div>

            {/* Right side - About us, language, auth */}
            <div className="flex items-center space-x-6">
              <Link href="/about">
                <button className="text-[#191c1f] hover:bg-[#f7f7f7] text-sm font-medium font-semibold">About us</button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-red-500 relative overflow-hidden rounded-full">
                  {/* Put flag img here later */}
                </div>
                <span className="text-[#191c1f] text-sm font-medium font-semibold">EN</span>
              </div>
              <button className="text-[#191c1f] hover:bg-[#f7f7f7] text-sm font-medium font-semibold">Log in</button>
              <button className="bg-[#0065ff] hover:bg-[#0065ff]/90 text-white rounded-full px-6 py-2 text-sm font-medium font-semibold">Sign Up</button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Hero Section */}
      <motion.section 
        className="flex flex-col items-center justify-center px-4 md:px-0 py-20 md:py-32 bg-white text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          News & Media
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Stay updated with the latest news and developments from StellarPay.
        </motion.p>
      </motion.section>

      {/* News Content Section */}
      <motion.section 
        className="max-w-4xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Latest News</h2>
          <p className="text-lg text-gray-700 mb-8">
            Read about our latest partnerships, product updates, and company milestones.
          </p>

          <div className="grid gap-8 mt-12">
            <motion.article 
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">StellarPay Announces Partnership with Flagright</h3>
              <p className="text-gray-600 mb-4">July 2025</p>
              <p className="text-lg text-gray-700 mb-4">
                StellarPay has announced a strategic partnership with Flagright, a leading 
                compliance and transaction monitoring platform. This partnership will enhance 
                our security and compliance capabilities.
              </p>
              <a 
                href="https://www.flagright.com/post/stellarpay-chooses-flagright-for-transaction-monitoring-aml-screening"
                className="text-blue-600 hover:text-blue-800 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More →
              </a>
            </motion.article>

            <motion.article 
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Coming Soon: New Features</h3>
              <p className="text-gray-600 mb-4">October 2025</p>
              <p className="text-lg text-gray-700 mb-4">
                We're working on exciting new features that will make money transfers 
                even faster and more convenient. Stay tuned for updates.
              </p>
            </motion.article>

            <motion.article 
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Expanding Global Reach</h3>
              <p className="text-gray-600 mb-4">October 2025</p>
              <p className="text-lg text-gray-700 mb-4">
                StellarPay is expanding its services to new countries and regions, 
                making global money transfers accessible to more people worldwide.
              </p>
            </motion.article>
          </div>
        </motion.div>

        {/* Download Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Experience StellarPay</h3>
          <p className="text-lg text-gray-700 mb-8">
            Download the app and start sending money globally with speed and security.
          </p>
          <motion.div 
            className="w-full flex justify-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
          <a href="https://apps.apple.com/ca/app/george/id6743195041">
        <Image src="/images/appleStore.png" alt="apple" width={175} height={90} className="mr-5" style={{height: 'auto'}} />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.stellar.stellarai.app">
        <Image src="/images/googleStore.png" alt="google" width={167} height={70} style={{height: 'auto'}} />
        </a>
        </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
} 