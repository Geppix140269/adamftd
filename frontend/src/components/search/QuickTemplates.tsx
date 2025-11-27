'use client';

import { Search, Shield, TrendingUp, Users, Ship, FileText, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

/**
 * QuickTemplates Component - Dark Theme
 *
 * Role-based search templates with AdamFTD brand colors from logo waves.
 * Each template accelerates common workflows with intelligent
 * pre-populated filters and smooth animations.
 */

type UserRole = 'exporter' | 'importer' | 'logistics' | 'chamber' | 'government';

interface Template {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  glowColor: string;
  shadowClass: string;
  action: () => void;
}

interface QuickTemplatesProps {
  role: UserRole;
}

export function QuickTemplates({ role }: QuickTemplatesProps) {
  const router = useRouter();

  // Brand gradients from logo wave colors
  const brandGradients = [
    { gradient: 'from-[#00ACC1] to-[#26C6DA]', glow: 'rgba(0, 172, 193, 0.4)', shadow: 'shadow-cyan-500/30' },
    { gradient: 'from-[#4CAF50] to-[#8BC34A]', glow: 'rgba(76, 175, 80, 0.4)', shadow: 'shadow-green-500/30' },
    { gradient: 'from-[#FF9800] to-[#FFC107]', glow: 'rgba(255, 152, 0, 0.4)', shadow: 'shadow-orange-500/30' },
    { gradient: 'from-[#7B1FA2] to-[#9C27B0]', glow: 'rgba(123, 31, 162, 0.4)', shadow: 'shadow-purple-500/30' },
  ];

  // Templates by role with professional descriptions
  const templatesByRole: Record<UserRole, Template[]> = {
    exporter: [
      {
        id: 'find-importers',
        label: 'Discover Buyers',
        description: 'Identify qualified importers by HS code and market',
        icon: Search,
        gradient: brandGradients[0].gradient,
        glowColor: brandGradients[0].glow,
        shadowClass: brandGradients[0].shadow,
        action: () => router.push('/search?mode=find-buyers'),
      },
      {
        id: 'check-risk',
        label: 'Risk Assessment',
        description: 'Comprehensive sanctions and compliance screening',
        icon: Shield,
        gradient: brandGradients[1].gradient,
        glowColor: brandGradients[1].glow,
        shadowClass: brandGradients[1].shadow,
        action: () => router.push('/compliance/check'),
      },
      {
        id: 'competitor-intel',
        label: 'Competitive Intelligence',
        description: 'Analyze competitor shipments and market positioning',
        icon: TrendingUp,
        gradient: brandGradients[2].gradient,
        glowColor: brandGradients[2].glow,
        shadowClass: brandGradients[2].shadow,
        action: () => router.push('/search?mode=competitor'),
      },
      {
        id: 'market-entry',
        label: 'Market Analysis',
        description: 'Data-driven export market evaluation reports',
        icon: FileText,
        gradient: brandGradients[3].gradient,
        glowColor: brandGradients[3].glow,
        shadowClass: brandGradients[3].shadow,
        action: () => router.push('/reports/market-entry'),
      },
    ],
    importer: [
      {
        id: 'find-suppliers',
        label: 'Source Suppliers',
        description: 'Find verified exporters with proven track records',
        icon: Search,
        gradient: brandGradients[0].gradient,
        glowColor: brandGradients[0].glow,
        shadowClass: brandGradients[0].shadow,
        action: () => router.push('/search?mode=find-suppliers'),
      },
      {
        id: 'check-risk',
        label: 'Supplier Verification',
        description: 'Due diligence and compliance history analysis',
        icon: Shield,
        gradient: brandGradients[1].gradient,
        glowColor: brandGradients[1].glow,
        shadowClass: brandGradients[1].shadow,
        action: () => router.push('/compliance/check'),
      },
      {
        id: 'price-benchmark',
        label: 'Price Intelligence',
        description: 'Market-wide unit price benchmarking analytics',
        icon: TrendingUp,
        gradient: brandGradients[2].gradient,
        glowColor: brandGradients[2].glow,
        shadowClass: brandGradients[2].shadow,
        action: () => router.push('/analytics/pricing'),
      },
      {
        id: 'duty-lookup',
        label: 'Tariff Calculator',
        description: 'Real-time duty rates and trade measures lookup',
        icon: FileText,
        gradient: brandGradients[3].gradient,
        glowColor: brandGradients[3].glow,
        shadowClass: brandGradients[3].shadow,
        action: () => router.push('/tariffs'),
      },
    ],
    logistics: [
      {
        id: 'find-shippers',
        label: 'Lead Generation',
        description: 'Identify high-volume shippers on target trade lanes',
        icon: Ship,
        gradient: brandGradients[0].gradient,
        glowColor: brandGradients[0].glow,
        shadowClass: brandGradients[0].shadow,
        action: () => router.push('/search?mode=find-shippers'),
      },
      {
        id: 'route-analysis',
        label: 'Lane Analytics',
        description: 'Traffic volumes, carriers, and seasonality insights',
        icon: TrendingUp,
        gradient: brandGradients[1].gradient,
        glowColor: brandGradients[1].glow,
        shadowClass: brandGradients[1].shadow,
        action: () => router.push('/analytics/routes'),
      },
      {
        id: 'port-congestion',
        label: 'Port Intelligence',
        description: 'Real-time terminal congestion and delay tracking',
        icon: Ship,
        gradient: brandGradients[2].gradient,
        glowColor: brandGradients[2].glow,
        shadowClass: brandGradients[2].shadow,
        action: () => router.push('/ports/congestion'),
      },
      {
        id: 'rate-benchmark',
        label: 'Rate Benchmarking',
        description: 'Freight rate analysis by trade lane and mode',
        icon: FileText,
        gradient: brandGradients[3].gradient,
        glowColor: brandGradients[3].glow,
        shadowClass: brandGradients[3].shadow,
        action: () => router.push('/analytics/rates'),
      },
    ],
    chamber: [
      {
        id: 'member-export-readiness',
        label: 'Export Readiness',
        description: 'Score and rank members by trade capability',
        icon: Users,
        gradient: brandGradients[0].gradient,
        glowColor: brandGradients[0].glow,
        shadowClass: brandGradients[0].shadow,
        action: () => router.push('/members/readiness'),
      },
      {
        id: 'trade-mission',
        label: 'Mission Planning',
        description: 'Data-driven trade mission candidate selection',
        icon: Ship,
        gradient: brandGradients[1].gradient,
        glowColor: brandGradients[1].glow,
        shadowClass: brandGradients[1].shadow,
        action: () => router.push('/missions/create'),
      },
      {
        id: 'export-report',
        label: 'Report Builder',
        description: 'Generate sector and market intelligence reports',
        icon: FileText,
        gradient: brandGradients[2].gradient,
        glowColor: brandGradients[2].glow,
        shadowClass: brandGradients[2].shadow,
        action: () => router.push('/reports/builder'),
      },
      {
        id: 'member-search',
        label: 'Member Analytics',
        description: 'Track member trade activity and performance',
        icon: Search,
        gradient: brandGradients[3].gradient,
        glowColor: brandGradients[3].glow,
        shadowClass: brandGradients[3].shadow,
        action: () => router.push('/members/search'),
      },
    ],
    government: [
      {
        id: 'anomaly-alerts',
        label: 'Anomaly Detection',
        description: 'AI-flagged suspicious transaction patterns',
        icon: Shield,
        gradient: brandGradients[0].gradient,
        glowColor: brandGradients[0].glow,
        shadowClass: brandGradients[0].shadow,
        action: () => router.push('/anomalies'),
      },
      {
        id: 'sector-monitor',
        label: 'Sector Monitoring',
        description: 'Strategic sector trade flow analysis',
        icon: TrendingUp,
        gradient: brandGradients[1].gradient,
        glowColor: brandGradients[1].glow,
        shadowClass: brandGradients[1].shadow,
        action: () => router.push('/sectors'),
      },
      {
        id: 'policy-simulator',
        label: 'Policy Modeling',
        description: 'Simulate tariff and regulatory impact scenarios',
        icon: FileText,
        gradient: brandGradients[2].gradient,
        glowColor: brandGradients[2].glow,
        shadowClass: brandGradients[2].shadow,
        action: () => router.push('/policy/simulator'),
      },
      {
        id: 'company-investigation',
        label: 'Entity Investigation',
        description: 'Deep entity profiles and network mapping',
        icon: Search,
        gradient: brandGradients[3].gradient,
        glowColor: brandGradients[3].glow,
        shadowClass: brandGradients[3].shadow,
        action: () => router.push('/investigations'),
      },
    ],
  };

  const templates = templatesByRole[role] || templatesByRole.exporter;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {templates.map((template, index) => (
        <button
          key={template.id}
          onClick={template.action}
          className="group relative p-1 text-left rounded-2xl transition-all duration-300 hover:scale-[1.02] animate-slide-up"
          style={{ animationDelay: `${index * 75}ms` }}
        >
          {/* Gradient background glow on hover */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
            style={{ background: template.glowColor }}
          />

          {/* Glass card - dark version */}
          <div className="relative glass rounded-2xl p-5 h-full border border-gray-700/50 group-hover:border-[#00ACC1]/40 transition-all duration-300">
            {/* Icon with brand gradient background */}
            <div className="flex items-start justify-between mb-4">
              <div className={`relative p-3 rounded-xl bg-gradient-to-br ${template.gradient} shadow-lg ${template.shadowClass}`}>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                <template.icon className="relative h-5 w-5 text-white" />
              </div>

              {/* Arrow indicator */}
              <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-[#26C6DA] group-hover:translate-x-1 transition-all duration-300" />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-semibold text-gray-200 group-hover:text-[#26C6DA] transition-colors mb-1">
                {template.label}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {template.description}
              </p>
            </div>

            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
              <div className="absolute -inset-full top-0 h-full w-1/2 rotate-12 transform bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shimmer" />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
