'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Search,
  Building2,
  Ship,
  TrendingUp,
  Shield,
  Globe,
  Sparkles,
  ArrowRight,
  Zap,
  BarChart3,
  Lock,
  Users
} from 'lucide-react';
import { SearchBar } from '@/components/search/SearchBar';
import { QuickTemplates } from '@/components/search/QuickTemplates';

/**
 * Landing / Home Page
 *
 * Modern, energetic design with AdamFTD brand colors from logo waves.
 * Professional copy focused on value propositions.
 */
export default function HomePage() {
  const [searchFocused, setSearchFocused] = useState(false);

  // Mock user - would come from auth context
  const user = {
    name: 'Maria',
    role: 'exporter' as const,
    tier: 'PRO' as const,
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background orbs using brand colors */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-green w-[600px] h-[600px] -top-48 -left-48 animate-float" />
        <div className="orb orb-teal w-[500px] h-[500px] top-1/2 -right-32 animate-float delay-200" />
        <div className="orb orb-orange w-[400px] h-[400px] bottom-0 left-1/4 animate-float delay-300" />
        <div className="orb orb-purple w-[350px] h-[350px] top-1/4 right-1/4 animate-float delay-400" />
        <div className="orb orb-amber w-[300px] h-[300px] bottom-1/4 right-1/3 animate-float delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/adamftd-logo.svg"
                alt="AdamFTD"
                width={140}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </div>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {['Search', 'Watchlists', 'Reports', 'Analytics'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#00838F] rounded-lg hover:bg-[#00ACC1]/10 transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* User menu */}
            <div className="flex items-center gap-3">
              <span className="badge-pro">
                <Sparkles className="w-3 h-3 mr-1" />
                {user.tier}
              </span>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ACC1] to-[#4CAF50] rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="relative h-9 w-9 rounded-full bg-gradient-to-r from-[#00ACC1] to-[#4CAF50] flex items-center justify-center text-white font-semibold shadow-lg">
                  {user.name[0]}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave decoration line under header */}
        <div className="wave-decoration" />
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        {/* Hero section */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ACC1]/10 backdrop-blur-sm border border-[#00ACC1]/20 text-[#00838F] text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Powered by 2.4 billion shipment records
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Welcome back, <span className="gradient-text">{user.name}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover qualified trade partners backed by <span className="text-[#00838F] font-semibold">verified shipment data</span>.
            Turn customs intelligence into closed deals.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-12 animate-slide-up delay-100">
          <SearchBar
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            placeholder="Search importers, exporters, or products by HS code..."
          />
          <div className="mt-3 flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>Popular:</span>
            {['HS 8471 Germany', 'Machinery importers EU', 'Steel suppliers'].map((term) => (
              <button
                key={term}
                className="px-3 py-1 rounded-full bg-white/60 hover:bg-white border border-gray-200/50 hover:border-[#00ACC1]/30 transition-all text-gray-600 hover:text-[#00838F]"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Quick templates */}
        <div className="mb-12 animate-slide-up delay-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Quick Actions
            </h2>
            <span className="text-sm text-gray-500">
              Tailored for export professionals
            </span>
          </div>
          <QuickTemplates role={user.role} />
        </div>

        {/* Activity cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 animate-slide-up delay-300">
          {/* Recent searches */}
          <div className="card p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div className="p-2 rounded-lg bg-[#00ACC1]/10">
                <Search className="h-4 w-4 text-[#00838F]" />
              </div>
              Recent Searches
            </h3>
            <ul className="space-y-3">
              {[
                { query: 'HS 730890 importers in DE, ES, PL', results: 127, time: '2 hours ago' },
                { query: 'Automotive parts suppliers Vietnam', results: 89, time: '1 day ago' },
                { query: 'ACME Industrial Corp', results: 1, time: '3 days ago' },
              ].map((search, i) => (
                <li key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-[#00ACC1]/5 transition-colors group cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-[#00838F] transition-colors">
                      {search.query}
                    </p>
                    <p className="text-xs text-gray-500">
                      {search.results} results · {search.time}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#00838F] group-hover:translate-x-1 transition-all" />
                </li>
              ))}
            </ul>
          </div>

          {/* Watchlist alerts */}
          <div className="card p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div className="p-2 rounded-lg bg-[#FF9800]/10">
                <TrendingUp className="h-4 w-4 text-[#F57C00]" />
              </div>
              Intelligence Alerts
            </h3>
            <ul className="space-y-3">
              {[
                {
                  type: 'shipment',
                  message: 'Widget GmbH received 3 new shipments from China',
                  severity: 'info',
                  time: 'Today'
                },
                {
                  type: 'tariff',
                  message: 'New anti-dumping duty proposed on HS 7604 (aluminum)',
                  severity: 'warning',
                  time: 'Yesterday'
                },
                {
                  type: 'compliance',
                  message: 'Target Corp added to OFAC sanctions watchlist',
                  severity: 'critical',
                  time: '2 days ago'
                },
              ].map((alert, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50/50 transition-colors cursor-pointer">
                  <span className={`flex-shrink-0 h-2 w-2 mt-2 rounded-full ${
                    alert.severity === 'critical' ? 'bg-red-500' :
                    alert.severity === 'warning' ? 'bg-[#FFB300]' : 'bg-[#00ACC1]'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats banner */}
        <div className="card-gradient p-8 animate-slide-up delay-400">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Global Trade Intelligence at Your Fingertips
            </h3>
            <p className="text-gray-600">
              Real-time data from customs authorities worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '2.4B', label: 'Shipment Records', icon: Ship, color: 'from-[#00ACC1] to-[#26C6DA]' },
              { value: '180M', label: 'Company Profiles', icon: Building2, color: 'from-[#4CAF50] to-[#8BC34A]' },
              { value: '240', label: 'Countries Covered', icon: Globe, color: 'from-[#FF9800] to-[#FFC107]' },
              { value: '99.2%', label: 'Data Accuracy', icon: BarChart3, color: 'from-[#7B1FA2] to-[#9C27B0]' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 animate-fade-in delay-500">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-[#4CAF50]" />
            <span>SOC 2 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#00ACC1]" />
            <span>GDPR Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#FF9800]" />
            <span>Trusted by 2,500+ companies</span>
          </div>
        </div>
      </main>
    </div>
  );
}
