'use client'

import { useState } from 'react'

interface Campaign {
  id: string
  name: string
  project: string
  platform: 'Google' | 'Meta' | 'TikTok'
  status: 'active' | 'paused' | 'completed'
  budget: string
  spent: string
  clicks: number
}

const campaigns: Campaign[] = [
  { id: '1', name: 'Yaz İndirimi', project: 'TeknoTech', platform: 'Google', status: 'active', budget: '₺10.000', spent: '₺4.500', clicks: 1250 },
  { id: '2', name: 'Yeni Ürün Tanıtımı', project: 'ModaButik', platform: 'Meta', status: 'active', budget: '₺5.000', spent: '₺2.100', clicks: 680 },
  { id: '3', name: 'Kış Kampanyası', project: 'Spor Dünyası', platform: 'TikTok', status: 'paused', budget: '₺3.000', spent: '₺800', clicks: 240 },
]

export default function AdsPage() {
  const [showCreate, setShowCreate] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">📢 Reklamlar</h1>
          <p className="text-gray-500">Reklam kampanyalarını yönet</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          + Yeni Kampanya
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Aktif Kampanya</p>
          <p className="text-2xl font-bold text-green-600">2</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Bütçe</p>
          <p className="text-2xl font-bold text-gray-900">₺18.000</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Harcanan</p>
          <p className="text-2xl font-bold text-orange-600">₺7.400</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Tıklama</p>
          <p className="text-2xl font-bold text-blue-600">2.170</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Kampanyalar</h3>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Kampanya</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Proje</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Platform</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Bütçe</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Harcanan</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Tıklama</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Durum</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map(campaign => (
              <tr key={campaign.id} className="border-t border-gray-100">
                <td className="px-4 py-3 font-medium text-gray-900">{campaign.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{campaign.project}</td>
                <td className="px-4 py-3">
                  <span className="text-lg">{campaign.platform === 'Google' ? '🔍' : campaign.platform === 'Meta' ? '📘' : '🎵'}</span>
                </td>
                <td className="px-4 py-3 text-sm">{campaign.budget}</td>
                <td className="px-4 py-3 text-sm text-orange-600">{campaign.spent}</td>
                <td className="px-4 py-3 text-sm">{campaign.clicks.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    campaign.status === 'active' ? 'bg-green-100 text-green-700' :
                    campaign.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {campaign.status === 'active' ? 'Aktif' : campaign.status === 'paused' ? 'Duraklatıldı' : 'Tamamlandı'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showCreate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Yeni Kampanya</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kampanya Adı</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Örn: Yaz İndirimi" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Proje</label>
                  <select className="w-full px-3 py-2 border rounded-lg">
                    <option>TeknoTech</option>
                    <option>ModaButik</option>
                    <option>Spor Dünyası</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                  <select className="w-full px-3 py-2 border rounded-lg">
                    <option>Google</option>
                    <option>Meta</option>
                    <option>TikTok</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bütçe</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="₺5.000" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowCreate(false)} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">İptal</button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg">Oluştur</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
