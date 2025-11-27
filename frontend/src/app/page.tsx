'use client';

import { useState } from 'react';
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
 * Modern, energetic design with glassmorphism and animations.
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
      {/* Animated background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-indigo w-[600px] h-[600px] -top-48 -left-48 animate-float" />
        <div className="orb orb-cyan w-[500px] h-[500px] top-1/2 -right-32 animate-float delay-200" />
        <div className="orb orb-violet w-[400px] h-[400px] bottom-0 left-1/3 animate-float delay-300" />
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl blur-lg opacity-50" />
                <div className="relative bg-gradient-to-r from-indigo-500 to-violet-500 p-2 rounded-xl">
                  <Globe className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold gradient-text">AdamFTD</span>
            </div>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {['Search', 'Watchlists', 'Reports', 'Analytics'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50/50 transition-all"
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
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="relative h-9 w-9 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white font-semibold shadow-lg">
                  {user.name[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        {/* Hero section */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50/80 backdrop-blur-sm border border-indigo-100 text-indigo-600 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Powered by 2.4 billion shipment records
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Welcome back, {user.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover qualified trade partners backed by <span className="text-indigo-600 font-semibold">verified shipment data</span>.
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
                className="px-3 py-1 rounded-full bg-white/60 hover:bg-white border border-gray-200/50 hover:border-indigo-200 transition-all text-gray-600 hover:text-indigo-600"
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
              <div className="p-2 rounded-lg bg-indigo-50">
                <Search className="h-4 w-4 text-indigo-600" />
              </div>
              Recent Searches
            </h3>
            <ul className="space-y-3">
              {[
                { query: 'HS 730890 importers in DE, ES, PL', results: 127, time: '2 hours ago' },
                { query: 'Automotive parts suppliers Vietnam', results: 89, time: '1 day ago' },
                { query: 'ACME Industrial Corp', results: 1, time: '3 days ago' },
              ].map((search, i) => (
                <li key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-indigo-50/50 transition-colors group cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {search.query}
                    </p>
                    <p className="text-xs text-gray-500">
                      {search.results} results · {search.time}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                </li>
              ))}
            </ul>
          </div>

          {/* Watchlist alerts */}
          <div className="card p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div className="p-2 rounded-lg bg-cyan-50">
                <TrendingUp className="h-4 w-4 text-cyan-600" />
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
                    alert.severity === 'warning' ? 'bg-amber-500' : 'bg-cyan-500'
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
              { value: '2.4B', label: 'Shipment Records', icon: Ship },
              { value: '180M', label: 'Company Profiles', icon: Building2 },
              { value: '240', label: 'Countries Covered', icon: Globe },
              { value: '99.2%', label: 'Data Accuracy', icon: BarChart3 },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-6 w-6 text-indigo-600" />
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
            <Lock className="h-4 w-4 text-green-600" />
            <span>SOC 2 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-indigo-600" />
            <span>GDPR Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-cyan-600" />
            <span>Trusted by 2,500+ companies</span>
          </div>
        </div>
      </main>
    </div>
  );
}
