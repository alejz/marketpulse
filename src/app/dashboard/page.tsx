'use client'

import { useState } from 'react'
import Link from 'next/link'

const recentProducts = [
  { name: 'Apple AirPods Pro', price: '₺4.999', status: 'Aktif', views: 1250 },
  { name: 'Samsung Galaxy Watch', price: '₺7.499', status: 'Aktif', views: 890 },
  { name: 'Nike Air Max', price: '₺2.999', status: 'Satıldı', views: 2100 },
]

const platformStats = [
  { name: 'Dolap', icon: '🛍️', products: 24, revenue: '₺125K' },
  { name: 'Trendyol', icon: '📦', products: 0, revenue: 'Bağlanmadı' },
  { name: 'Instagram', icon: '📸', revenue: '₺45K' },
]

export default function DashboardPage() {
  const [agentRunning, setAgentRunning] = useState(true)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hoş geldin! 👋</h1>
          <p className="text-gray-500">Bugün 5 yeni sipariş, 3 yeni mesaj var</p>
        </div>
        <button
          onClick={() => setAgentRunning(!agentRunning)}
          className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
            agentRunning ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${agentRunning ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></span>
          {agentRunning ? 'Agent Aktif' : 'Agent Durduruldu'}
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Gelir</p>
          <p className="text-2xl font-bold text-green-600">₺723.004</p>
          <p className="text-xs text-green-600 mt-1">↑ %23 bu ay</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Sipariş</p>
          <p className="text-2xl font-bold text-gray-900">596</p>
          <p className="text-xs text-green-600 mt-1">↑ %18 bu ay</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Aktif Ürün</p>
          <p className="text-2xl font-bold text-gray-900">24</p>
          <p className="text-xs text-gray-500 mt-1">Tüm platformlarda</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Müşteri</p>
          <p className="text-2xl font-bold text-gray-900">145</p>
          <p className="text-xs text-green-600 mt-1">+12 bu ay</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
        <h2 className="font-semibold mb-4">Hızlı İşlemler</h2>
        <div className="grid grid-cols-4 gap-3">
          <Link href="/dashboard/products" className="bg-blue-600 hover:bg-blue-700 rounded-lg p-4 text-center transition-opacity">
            <span className="text-2xl block mb-1">➕</span>
            <span className="text-sm font-medium">Yeni Ürün</span>
          </Link>
          <Link href="/dashboard/content" className="bg-purple-600 hover:bg-purple-700 rounded-lg p-4 text-center transition-opacity">
            <span className="text-2xl block mb-1">✍️</span>
            <span className="text-sm font-medium">İçerik Üret</span>
          </Link>
          <Link href="/dashboard/campaigns" className="bg-green-600 hover:bg-green-700 rounded-lg p-4 text-center transition-opacity">
            <span className="text-2xl block mb-1">🚀</span>
            <span className="text-sm font-medium">Kampanya</span>
          </Link>
          <Link href="/dashboard/ads" className="bg-orange-600 hover:bg-orange-700 rounded-lg p-4 text-center transition-opacity">
            <span className="text-2xl block mb-1">📢</span>
            <span className="text-sm font-medium">Reklam Ver</span>
          </Link>
        </div>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-2 gap-6">
        {/* Son Ürünler */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Son Ürünler</h3>
            <Link href="/dashboard/products" className="text-sm text-blue-600 hover:underline">Tümünü gör →</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentProducts.map((product, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.views.toLocaleString()} görüntüleme</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{product.price}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    product.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>{product.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platformlar */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Platformlar</h3>
            <Link href="/dashboard/platforms" className="text-sm text-blue-600 hover:underline">Yönet →</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {platformStats.map((platform, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{platform.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900">{platform.name}</p>
                    <p className="text-sm text-gray-500">{platform.products ? `${platform.products} ürün` : ''}</p>
                  </div>
                </div>
                <p className="font-bold text-green-600">{platform.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Öneriler */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="font-semibold text-gray-900 mb-4">🤖 AI Öneriler</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="font-medium text-blue-800">Fiyat Optimizasyonu</p>
            <p className="text-sm text-blue-700 mt-1">Nike Air Max için %10 indirim öneriliyor</p>
            <p className="text-xs text-blue-600 mt-2">Beklenen: +%40 satış</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <p className="font-medium text-green-800">Kampanya Fırsatı</p>
            <p className="text-sm text-green-700 mt-1">Cumartesi günü %20 indirim yapın</p>
            <p className="text-xs text-green-600 mt-2">AI Tahmin: %78 güven</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <p className="font-medium text-purple-800">İçerik Önerisi</p>
            <p className="text-sm text-purple-700 mt-1">Yaz Sporları konulu post paylaşın</p>
            <p className="text-xs text-purple-600 mt-2">Tahmin: +%25 etkileşim</p>
          </div>
        </div>
      </div>
    </div>
  )
}
