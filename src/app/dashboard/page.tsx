'use client'

import { useState } from 'react'
import Link from 'next/link'

interface StatCard {
  label: string
  value: string
  change: string
  positive: boolean
}

interface Activity {
  id: number
  platform: string
  action: string
  time: string
  agent?: string
}

const stats: StatCard[] = [
  { label: 'Toplam Gelir', value: '₺723K', change: '+23%', positive: true },
  { label: 'Aktif Ürün', value: '24', change: '+5', positive: true },
  { label: 'Müşteri', value: '145', change: '+18', positive: true },
  { label: 'AI Agent', value: '14', change: 'Aktif', positive: true },
]

const recentActivity: Activity[] = [
  { id: 1, platform: 'Demand Creation', action: 'Yeni trend kavramı oluşturuldu', time: '5 dakika önce', agent: '💡' },
  { id: 2, platform: 'Sales Brain', action: 'Müşteri sorusu otomatik yanıtlandı', time: '15 dakika önce', agent: '💬' },
  { id: 3, platform: 'Predictive', action: 'Cumartesi için tahmin yapıldı', time: '1 saat önce', agent: '🔮' },
  { id: 4, platform: 'Goal-Driven', action: 'Fiyat optimizasyonu önerildi', time: '2 saat önce', agent: '🎯' },
  { id: 5, platform: 'Experiment Lab', action: 'Yeni A/B testi başlatıldı', time: '3 saat önce', agent: '🧪' },
]

const quickActions = [
  { name: 'Talep Yarat', desc: 'Ürüne hikâye ekle', icon: '💡', href: '/dashboard/ai-agents', color: 'from-amber-500 to-orange-600' },
  { name: 'Satış Yap', desc: 'Müşteriyle konuş', icon: '💬', href: '/dashboard/ai-agents', color: 'from-orange-500 to-amber-600' },
  { name: 'Karar Ver', desc: 'Otonom karar al', icon: '🧭', href: '/dashboard/ai-agents', color: 'from-violet-500 to-purple-600' },
  { name: 'Tahmin Et', desc: 'Geleceği gör', icon: '🔮', href: '/dashboard/ai-agents', color: 'from-teal-500 to-green-600' },
]

const connectedAccounts = [
  { platform: 'Instagram', status: 'connected', posts: 124, icon: '📸' },
  { platform: 'Dolap', status: 'connected', posts: 89, icon: '🛍️' },
  { platform: 'Trendyol', status: 'connected', posts: 45, icon: '📦' },
  { platform: 'TikTok', status: 'connected', posts: 67, icon: '🎵' },
  { platform: 'Website', status: 'connected', posts: 0, icon: '🌐' },
]

export default function DashboardPage() {
  const [agentRunning, setAgentRunning] = useState(true)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">🧠 AI Marketing Agent</h1>
          <p className="text-gray-500">Otonom pazarlama engineniz çalışıyor</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Tüm Agentler Aktif</span>
          </div>
          <button
            onClick={() => setAgentRunning(!agentRunning)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              agentRunning
                ? 'bg-green-100 text-green-700 border border-green-300'
                : 'bg-gray-100 text-gray-700 border border-gray-300'
            }`}
          >
            {agentRunning ? '🟢 Aktif' : '🔴 Pasif'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            <p className={`text-sm mt-2 ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {quickActions.map((action, i) => (
          <Link
            key={i}
            href={action.href}
            className={`bg-gradient-to-br ${action.color} rounded-xl p-5 text-white hover:opacity-90 transition-opacity`}
          >
            <div className="text-3xl mb-2">{action.icon}</div>
            <h3 className="font-bold">{action.name}</h3>
            <p className="text-white/80 text-sm mt-1">{action.desc}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">🤖 Son Agent Aktiviteleri</h2>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{activity.agent}</span>
                  <div>
                    <p className="font-medium text-gray-900">{activity.platform}</p>
                    <p className="text-sm text-gray-500">{activity.action}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Bağlı Platformlar</h2>
          <div className="space-y-3">
            {connectedAccounts.map((account, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{account.icon}</span>
                  <span className="font-medium text-gray-900">{account.platform}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">{account.posts} ürün</span>
                  <span className={`w-2 h-2 rounded-full ${
                    account.status === 'connected' ? 'bg-green-500' : 'bg-gray-300'
                  }`}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">🚀 Otonom Pazarlama Modu</h2>
            <p className="text-indigo-100 mt-1">
              Agentler sürekli çalışıyor: Talep yaratır, satış yapar, karar verir
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard/ai-agents" className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50">
              Tüm Agentleri Gör
            </Link>
            <Link href="/dashboard/products" className="px-4 py-2 bg-indigo-700 text-white rounded-lg font-medium border border-indigo-500 hover:bg-indigo-800">
              Ürünleri İncele
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">🎯 Goal-Driven Son Karar</h3>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="font-medium text-green-800">Fiyat optimizasyonu önerildi</p>
            <p className="text-sm text-green-600 mt-1">Beklenen ROI: +%15</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">2 saat önce</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">🔮 Predictive Tahmin</h3>
          <div className="p-4 bg-teal-50 rounded-lg">
            <p className="font-medium text-teal-800">Cumartesi %40 satış artışı</p>
            <p className="text-sm text-teal-600 mt-1">Güven: %78</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">Perşembe kampanya başlat</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">🧪 Experiment Durumu</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Video Review</span>
              <span className="text-green-600">+%50</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>AI Content</span>
              <span className="text-amber-600">%20</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Trust Badges</span>
              <span className="text-green-600">+%8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
