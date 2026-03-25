'use client'

import { useState } from 'react'

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
}

const stats: StatCard[] = [
  { label: 'Toplam Takipçi', value: '12.4K', change: '+12%', positive: true },
  { label: 'Etkileşim Oranı', value: '4.2%', change: '+0.8%', positive: true },
  { label: 'Bu Ay Paylaşım', value: '48', change: '+5', positive: true },
  { label: 'Reklam Harcaması', value: '$234', change: '-5%', positive: false },
]

const recentActivity: Activity[] = [
  { id: 1, platform: 'Instagram', action: 'Yeni gönderi paylaşıldı', time: '2 saat önce' },
  { id: 2, platform: 'Twitter', action: 'AI içerik üretildi', time: '4 saat önce' },
  { id: 3, platform: 'LinkedIn', action: 'Kampanya başlatıldı', time: '6 saat önce' },
  { id: 4, platform: 'Facebook', action: 'Reklam performansı güncellendi', time: '8 saat önce' },
]

const connectedAccounts = [
  { platform: 'Instagram', status: 'connected', posts: 124 },
  { platform: 'Twitter', status: 'connected', posts: 89 },
  { platform: 'LinkedIn', status: 'connected', posts: 45 },
  { platform: 'Facebook', status: 'connected', posts: 67 },
  { platform: 'TikTok', status: 'disconnected', posts: 0 },
]

export default function DashboardPage() {
  const [agentRunning, setAgentRunning] = useState(true)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Hoş geldiniz! Agentınız çalışıyor.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">Agent Durumu:</span>
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

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Bağlı Hesaplar</h2>
          <div className="space-y-3">
            {connectedAccounts.map((account, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">
                    {account.platform === 'Instagram' && '📸'}
                    {account.platform === 'Twitter' && '🐦'}
                    {account.platform === 'LinkedIn' && '💼'}
                    {account.platform === 'Facebook' && '📘'}
                    {account.platform === 'TikTok' && '🎵'}
                  </span>
                  <span className="font-medium text-gray-900">{account.platform}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">{account.posts} gönderi</span>
                  <span className={`w-2 h-2 rounded-full ${
                    account.status === 'connected' ? 'bg-green-500' : 'bg-gray-300'
                  }`}></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Son Aktiviteler</h2>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{activity.platform}</p>
                  <p className="text-sm text-gray-500">{activity.action}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">AI Agent Kontrol Paneli</h2>
            <p className="text-blue-100 mt-1">
              Agentınızı otonom olarak çalıştırın ve sosyal medya hesaplarınızı yönetin.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50">
              Hızlı İçerik Üret
            </button>
            <button className="px-4 py-2 bg-blue-700 text-white rounded-lg font-medium border border-blue-500 hover:bg-blue-800">
              Planlı Paylaşımlar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
