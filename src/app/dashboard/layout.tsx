import Link from 'next/link'
import { ReactNode } from 'react'

const navItems = [
  { href: '/dashboard', label: 'Ana Sayfa', icon: '📊' },
  { href: '/dashboard/platforms', label: 'Platformlar', icon: '🌐' },
  { href: '/dashboard/ai-agents', label: 'AI Agents', icon: '🧠' },
  { href: '/dashboard/products', label: 'Ürünler', icon: '📦' },
  { href: '/dashboard/customers', label: 'Müşteriler', icon: '👥' },
  { href: '/dashboard/accounts', label: 'Hesaplar', icon: '📱' },
  { href: '/dashboard/content', label: 'İçerik', icon: '✍️' },
  { href: '/dashboard/media', label: 'Medya', icon: '🖼️' },
  { href: '/dashboard/campaigns', label: 'Kampanyalar', icon: '🎯' },
  { href: '/dashboard/ads', label: 'Reklamlar', icon: '📢' },
  { href: '/dashboard/analytics', label: 'Analitik', icon: '📈' },
  { href: '/dashboard/settings', label: 'Ayarlar', icon: '⚙️' },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900">🤖 Otonom Pazarlama</h1>
          <p className="text-sm text-gray-500">AI Marketing Agent</p>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-green-700">Agent Aktif</span>
            </div>
            <p className="text-xs text-green-600 mt-1">Otomatik paylaşım açık</p>
          </div>
        </div>
      </aside>
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  )
}
