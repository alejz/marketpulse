'use client'

import { useState } from 'react'

interface Campaign {
  id: number
  name: string
  platform: string
  status: 'active' | 'paused' | 'completed'
  budget: string
  spent: string
  reach: string
  clicks: number
  startDate: string
  endDate: string
}

const campaigns: Campaign[] = [
  { id: 1, name: 'Yeni Ürün Lansmanı', platform: 'Instagram', status: 'active', budget: '$500', spent: '$234', reach: '45K', clicks: 1234, startDate: '15 Mar', endDate: '30 Mar' },
  { id: 2, name: 'Bahar İndirimi', platform: 'Facebook', status: 'active', budget: '$300', spent: '$189', reach: '28K', clicks: 856, startDate: '10 Mar', endDate: '25 Mar' },
  { id: 3, name: 'Marka Bilinirliği', platform: 'LinkedIn', status: 'paused', budget: '$200', spent: '$45', reach: '12K', clicks: 234, startDate: '01 Mar', endDate: '15 Mar' },
  { id: 4, name: 'Kış Sonu Fırsatları', platform: 'Instagram', status: 'completed', budget: '$400', spent: '$400', reach: '62K', clicks: 2100, startDate: '01 Şub', endDate: '28 Şub' },
]

const campaignTypes = [
  { id: 'product', label: 'Ürün Lansmanı', icon: '📦' },
  { id: 'promotion', label: 'Kampanya/İndirim', icon: '🏷️' },
  { id: 'brand', label: 'Marka Bilinirliği', icon: '🌟' },
  { id: 'traffic', label: 'Trafik', icon: '🚗' },
  { id: 'lead', label: 'Leads/Müşteri', icon: '👥' },
]

export default function CampaignsPage() {
  const [showCreate, setShowCreate] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kampanyalar</h1>
          <p className="text-gray-500">Reklam kampanyalarınızı oluşturun ve yönetin</p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
        >
          + Yeni Kampanya
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-sm text-gray-500">Aktif Kampanyalar</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Harcama</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">$868</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Erişim</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">147K</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Tıklama</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">4.4K</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900">Aktif Kampanyalar</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Kampanya</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Platform</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Durum</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Bütçe</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Harcama</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Erişim</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Tıklama</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Tarih</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <span className="font-medium text-gray-900">{campaign.name}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm">{campaign.platform === 'Instagram' ? '📸' : campaign.platform === 'Facebook' ? '📘' : '💼'}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    campaign.status === 'active' ? 'bg-green-100 text-green-700' :
                    campaign.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {campaign.status === 'active' ? 'Aktif' : 
                     campaign.status === 'paused' ? 'Duraklatıldı' : 'Tamamlandı'}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{campaign.budget}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{campaign.spent}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{campaign.reach}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{campaign.clicks}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{campaign.startDate} - {campaign.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Kampanya Oluşturucu</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kampanya Tipi</label>
              <div className="grid grid-cols-3 gap-2">
                {campaignTypes.map((type) => (
                  <button
                    key={type.id}
                    className="p-3 border border-gray-200 rounded-lg hover:border-blue-500 flex flex-col items-center gap-1"
                  >
                    <span>{type.icon}</span>
                    <span className="text-xs">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hedef Kitle</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option>Tüm kullanıcılar</option>
                <option>18-35 Tech ilgi</option>
                <option>İş profesyonelleri</option>
                <option>Özel segment</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bütçe</label>
              <div className="grid grid-cols-3 gap-2">
                {['$100', '$250', '$500', '$1000', 'Özel'].map((amount) => (
                  <button key={amount} className="px-3 py-2 border border-gray-200 rounded-lg hover:border-blue-500 text-sm">
                    {amount}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Görsel Şablonları</h3>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-blue-500">
                <span className="text-2xl">🎨</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-400 hover:text-blue-600">
            + Şablon Yükle
          </button>
        </div>
      </div>

      {showCreate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Yeni Kampanya Oluştur</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kampanya Adı</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Örn: Yaz İndirimi 2024" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Başlangıç</label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bitiş</label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowCreate(false)} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">
                İptal
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg">
                Oluştur
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
