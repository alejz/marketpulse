'use client'

import { useState } from 'react'

interface Platform {
  id: string
  name: string
  icon: string
  status: 'connected' | 'disconnected' | 'pending'
  products: number
  revenue: string
  category: 'marketplace' | 'social' | 'ads'
  color: string
}

const platforms: Platform[] = [
  { id: 'dolap', name: 'Dolap', icon: '🛍️', status: 'connected', products: 24, revenue: '₺125K', category: 'marketplace', color: 'from-orange-400 to-orange-600' },
  { id: 'trendyol', name: 'Trendyol', icon: '📦', status: 'disconnected', products: 0, revenue: '₺0', category: 'marketplace', color: 'from-red-500 to-orange-500' },
  { id: 'hepsiburada', name: 'Hepsiburada', icon: '🛒', status: 'disconnected', products: 0, revenue: '₺0', category: 'marketplace', color: 'from-blue-500 to-blue-700' },
  { id: 'n11', name: 'N11', icon: '🔢', status: 'disconnected', products: 0, revenue: '₺0', category: 'marketplace', color: 'from-green-500 to-green-700' },
  { id: 'amazon', name: 'Amazon', icon: '📦', status: 'disconnected', products: 0, revenue: '₺0', category: 'marketplace', color: 'from-yellow-500 to-yellow-700' },
  { id: 'instagram', name: 'Instagram', icon: '📸', status: 'connected', products: 0, revenue: '₺45K', category: 'social', color: 'from-pink-500 to-purple-600' },
  { id: 'tiktok', name: 'TikTok', icon: '🎵', status: 'connected', products: 0, revenue: '₺32K', category: 'social', color: 'from-gray-900 to-pink-500' },
  { id: 'twitter', name: 'X (Twitter)', icon: '🐦', status: 'connected', products: 0, revenue: '₺12K', category: 'social', color: 'from-blue-400 to-blue-600' },
  { id: 'google', name: 'Google Ads', icon: '🔍', status: 'disconnected', products: 0, revenue: '₺0', category: 'ads', color: 'from-blue-500 to-red-500' },
  { id: 'meta', name: 'Meta Ads', icon: '📘', status: 'disconnected', products: 0, revenue: '₺0', category: 'ads', color: 'from-blue-600 to-blue-800' },
]

export default function PlatformsPage() {
  const [filter, setFilter] = useState<string>('all')
  const [showConnect, setShowConnect] = useState<string | null>(null)

  const filteredPlatforms = filter === 'all' 
    ? platforms 
    : platforms.filter(p => p.category === filter)

  const stats = {
    marketplaces: platforms.filter(p => p.category === 'marketplace' && p.status === 'connected').length,
    social: platforms.filter(p => p.category === 'social' && p.status === 'connected').length,
    ads: platforms.filter(p => p.category === 'ads' && p.status === 'connected').length,
    totalRevenue: '₺214K'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">🌐 Platform Yönetimi</h1>
        <p className="text-gray-500">Tüm satış kanallarınızı tek yerden yönetin</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Marketplace</p>
          <p className="text-2xl font-bold text-orange-600">{stats.marketplaces}/5</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Sosyal Medya</p>
          <p className="text-2xl font-bold text-pink-600">{stats.social}/3</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Reklam</p>
          <p className="text-2xl font-bold text-blue-600">{stats.ads}/2</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
          <p className="text-sm text-green-700">Toplam Gelir</p>
          <p className="text-2xl font-bold text-green-700">{stats.totalRevenue}</p>
        </div>
      </div>

      <div className="flex gap-2">
        {['all', 'marketplace', 'social', 'ads'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              filter === cat
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border hover:bg-gray-50'
            }`}
          >
            {cat === 'all' ? 'Tümü' : cat === 'marketplace' ? 'Marketplace' : cat === 'social' ? 'Sosyal Medya' : 'Reklam'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredPlatforms.map(platform => (
          <div key={platform.id} className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-2xl`}>
                {platform.icon}
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                platform.status === 'connected' ? 'bg-green-100 text-green-700' :
                platform.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                'bg-gray-100 text-gray-500'
              }`}>
                {platform.status === 'connected' ? 'Bağlı' : platform.status === 'pending' ? 'Bekliyor' : 'Bağlanmadı'}
              </span>
            </div>
            
            <h3 className="font-bold text-gray-900">{platform.name}</h3>
            
            {platform.status === 'connected' ? (
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Ürün</span>
                  <span className="font-medium">{platform.products}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Gelir</span>
                  <span className="font-medium text-green-600">{platform.revenue}</span>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setShowConnect(platform.id)}
                className="mt-4 w-full py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium"
              >
                Bağlan
              </button>
            )}
          </div>
        ))}
      </div>

      {showConnect && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {platforms.find(p => p.id === showConnect)?.name} Bağlantısı
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">API Key / Kullanıcı Adı</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Platformdan aldığınız API anahtarı" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">API Secret</label>
                <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Güvenlik anahtarı" />
              </div>
              <p className="text-xs text-gray-500">
                API bilgilerinizi {platforms.find(p => p.id === showConnect)?.name} satıcı panelinden alabilirsiniz.
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowConnect(null)} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                İptal
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Bağla
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
