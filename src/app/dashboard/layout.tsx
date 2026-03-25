import Link from 'next/link'
import { ReactNode } from 'react'

const navItems = [
  { href: '/dashboard', label: 'Gösterge', icon: '📊' },
  { href: '/dashboard/customers', label: 'Müşteriler', icon: '👥' },
  { href: '/dashboard/projects', label: 'Projeler', icon: '📁' },
  { href: '/dashboard/content', label: 'İçerik', icon: '✍️' },
  { href: '/dashboard/ads', label: 'Reklamlar', icon: '📢' },
  { href: '/dashboard/analytics', label: 'Analitik', icon: '📈' },
  { href: '/dashboard/ai-tools', label: 'AI Araçlar', icon: '🤖' },
  { href: '/dashboard/settings', label: 'Ayarlar', icon: '⚙️' },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="fixed left-0 top-0 h-full w-56 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MarketPulse
          </h1>
          <p className="text-xs text-gray-400">Pazarlama Otomasyonu</p>
        </div>
        <nav className="p-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-blue-700">AI Aktif</span>
            </div>
          </div>
        </div>
      </aside>
      <main className="ml-56 p-6">
        {children}
      </main>
    </div>
  )
}
