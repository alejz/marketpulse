'use client'

import { useState } from 'react'

interface Ad {
  id: number
  name: string
  platform: string
  type: string
  status: 'active' | 'paused' | 'draft'
  impressions: string
  clicks: string
  ctr: string
  cost: string
}

const ads: Ad[] = [
  { id: 1, name: 'Banner - Ana Sayfa', platform: 'Google', type: 'Display', status: 'active', impressions: '120K', clicks: '2.4K', ctr: '2.0%', cost: '$45' },
  { id: 2, name: 'Story - Hedef Kitle', platform: 'Instagram', type: 'Story', status: 'active', impressions: '45K', clicks: '1.8K', ctr: '4.0%', cost: '$32' },
  { id: 3, name: 'Search - Teknoloji', platform: 'Google', type: 'Search', status: 'paused', impressions: '28K', clicks: '890', ctr: '3.2%', cost: '$28' },
  { id: 4, name: 'Feed - Yeni Ürün', platform: 'Facebook', type: 'Feed', status: 'active', impressions: '67K', clicks: '1.2K', ctr: '1.8%', cost: '$55' },
  { id: 5, name: 'Reels - Viral', platform: 'Instagram', type: 'Reels', status: 'draft', impressions: '0', clicks: '0', ctr: '0%', cost: '$0' },
]

const platforms = [
  { name: 'Google Ads', icon: '🔍', color: 'from-blue-500 to-red-500' },
  { name: 'Meta Ads', icon: '📘', color: 'from-blue-600 to-blue-800' },
  { name: 'LinkedIn Ads', icon: '💼', color: 'from-blue-700 to-blue-900' },
  { name: 'TikTok Ads', icon: '🎵', color: 'from-black to-pink-500' },
  { name: 'Twitter Ads', icon: '🐦', color: 'from-blue-400 to-blue-600' },
]

export default function AdsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('all')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reklam Yönetimi</h1>
          <p className="text-gray-500">Tüm platformlarda reklamlarınızı yönetin</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          + Yeni Reklam
        </button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setSelectedPlatform('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            selectedPlatform === 'all' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border'
          }`}
        >
          Tümü
        </button>
        {platforms.map((p) => (
          <button
            key={p.name}
            onClick={() => setSelectedPlatform(p.name)}
            className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
              selectedPlatform === p.name ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border'
            }`}
          >
            <span>{p.icon}</span>
            <span>{p.name}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <p className="text-xs text-gray-500">Toplam Harcama</p>
          <p className="text-xl font-bold text-gray-900">$160</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <p className="text-xs text-gray-500">Gösterim</p>
          <p className="text-xl font-bold text-gray-900">260K</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <p className="text-xs text-gray-500">Tıklama</p>
          <p className="text-xl font-bold text-gray-900">6.3K</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <p className="text-xs text-gray-500">CTR</p>
          <p className="text-xl font-bold text-gray-900">2.4%</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <p className="text-xs text-gray-500">Tıklama Başına</p>
          <p className="text-xl font-bold text-gray-900">$0.025</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Reklamlar</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">Aktif (3)</button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">Duraklatılmış (1)</button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">Taslak (1)</button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Reklam</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Platform</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Tip</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Durum</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Gösterim</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Tıklama</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">CTR</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Maliyet</th>
            </tr>
          </thead>
          <tbody>
            {ads.map((ad) => (
              <tr key={ad.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{ad.name}</td>
                <td className="px-4 py-3">
                  <span className="text-lg">
                    {ad.platform === 'Google' ? '🔍' : ad.platform === 'Instagram' ? '📸' : '📘'}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{ad.type}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    ad.status === 'active' ? 'bg-green-100 text-green-700' :
                    ad.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {ad.status === 'active' ? 'Aktif' : ad.status === 'paused' ? 'Duraklatılmış' : 'Taslak'}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{ad.impressions}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{ad.clicks}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{ad.ctr}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{ad.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Reklam Performansı</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-600">Instagram</span>
                <span className="font-medium">85%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-pink-500 to-purple-600 w-[85%]"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-600">Google</span>
                <span className="font-medium">70%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-red-500 w-[70%]"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-600">Facebook</span>
                <span className="font-medium">60%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Otomatik Optimizasyon</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-green-800">Akıllı Bütçe Dağılımı</p>
                <p className="text-sm text-green-600">En iyi performans platformuna otomatik yönlendirme</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-green-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-blue-800">A/B Test Automation</p>
                <p className="text-sm text-blue-600">Otomatik varyant testi ve kazanan seçimi</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-blue-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="font-medium text-purple-800">Zamanlama Optimizasyonu</p>
                <p className="text-sm text-purple-600">En iyi saatlerde otomatik yayın</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
