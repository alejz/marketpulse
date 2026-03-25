import Link from 'next/link'
import { ReactNode } from 'react'

const navItems = [
  { href: '/dashboard', label: 'Ana Sayfa', icon: '🏠' },
  { href: '/dashboard/products', label: 'Ürünler', icon: '📦' },
  { href: '/dashboard/customers', label: 'Müşteriler', icon: '👥' },
  { href: '/dashboard/platforms', label: 'Platformlar', icon: '🌐' },
  { href: '/dashboard/content', label: 'İçerik', icon: '✍️' },
  { href: '/dashboard/ads', label: 'Reklamlar', icon: '📢' },
  { href: '/dashboard/analytics', label: 'Analitik', icon: '📈' },
  { href: '/dashboard/ai-agents', label: 'AI Agents', icon: '🧠' },
  { href: '/dashboard/settings', label: 'Ayarlar', icon: '⚙️' },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="fixed left-0 top-0 h-full w-56 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-900">🤖 Otonom Pazarlama</h1>
          <p className="text-xs text-gray-500">v1.0</p>
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
          <div className="bg-green-50 border border-green-200 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-green-700">Agent Aktif</span>
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
