'use client'

import { useState } from 'react'

interface DolapProduct {
  id: string
  name: string
  price: number
  category: string
  status: 'active' | 'pending' | 'sold'
  views: number
  likes: number
}

const sampleDolapProducts: DolapProduct[] = [
  { id: '1', name: 'Apple AirPods Pro', price: 4999, category: 'Elektronik', status: 'active', views: 1250, likes: 89 },
  { id: '2', name: 'Samsung Galaxy Watch', price: 7499, category: 'Elektronik', status: 'active', views: 890, likes: 45 },
  { id: '3', name: 'Nike Air Max', price: 2999, category: 'Spor', status: 'sold', views: 2100, likes: 156 },
  { id: '4', name: 'Sony WH-1000XM5', price: 8999, category: 'Elektronik', status: 'active', views: 567, likes: 34 },
  { id: '5', name: 'Adidas Hoodie', price: 1299, category: 'Giyim', status: 'pending', views: 0, likes: 0 },
]

export default function DolapPage() {
  const [products, setProducts] = useState<DolapProduct[]>(sampleDolapProducts)
  const [isConnected, setIsConnected] = useState(true)
  const [syncStatus, setSyncStatus] = useState('connected')

  const stats = {
    totalProducts: products.length,
    activeListings: products.filter(p => p.status === 'active').length,
    totalViews: products.reduce((sum, p) => sum + p.views, 0),
    totalLikes: products.reduce((sum, p) => sum + p.likes, 0),
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">🛍️ Dolap Entegrasyonu</h1>
          <p className="text-gray-500">Dolap mağazanızı otonom olarak yönetin</p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isConnected ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span className="text-sm font-medium">{isConnected ? 'Bağlı' : 'Bağlantı Kesildi'}</span>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
            🔄 Senkronize Et
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Ürün</p>
          <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Aktif İlan</p>
          <p className="text-2xl font-bold text-green-600">{stats.activeListings}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Görüntüleme</p>
          <p className="text-2xl font-bold text-blue-600">{stats.totalViews.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Beğeni</p>
          <p className="text-2xl font-bold text-pink-600">{stats.totalLikes}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Ürünler</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg">Yeni Ürün Ekle</button>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg">Toplu İşlem</button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Ürün</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Fiyat</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Kategori</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Görüntüleme</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Beğeni</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Durum</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{product.name}</td>
                <td className="px-4 py-3 font-medium">₺{product.price.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{product.category}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{product.views.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{product.likes}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    product.status === 'active' ? 'bg-green-100 text-green-700' :
                    product.status === 'sold' ? 'bg-gray-100 text-gray-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {product.status === 'active' ? 'Aktif' : product.status === 'sold' ? 'Satıldı' : 'Bekliyor'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">🤖 AI Otomasyon Özellikleri</h3>
          <div className="space-y-3">
            {[
              { name: 'Otomatik Fiyat Güncelleme', desc: 'Rakip fiyatlarına göre dinamik fiyatlama', enabled: true },
              { name: 'Akıllı Açıklama', desc: 'AI ile ürün açıklaması üretme', enabled: true },
              { name: 'Otomatik Yenileme', desc: 'İlanları otomatik yenileme', enabled: false },
              { name: 'Mesaj Yanıtlama', desc: 'Müşteri mesajlarına otomatik yanıt', enabled: true },
              { name: 'Stok Takibi', desc: 'Stok azalınca uyarı', enabled: true },
            ].map((feature, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{feature.name}</p>
                  <p className="text-xs text-gray-500">{feature.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={feature.enabled} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">📊 Performans Önerileri</h3>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="font-medium text-blue-800">💡 AI Önerisi</p>
              <p className="text-sm text-blue-700 mt-1">Nike Air Max ürünü için fiyat %10 düşürülürse satış hızı %40 artsın</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <p className="font-medium text-green-800">📈 Trend</p>
              <p className="text-sm text-green-700 mt-1">Elektronik kategorisinde son 7 günde %45 artış var</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
              <p className="font-medium text-amber-800">⏰ Zamanlama</p>
              <p className="text-sm text-amber-700 mt-1">Akşam 20:00-22:00 arası paylaşımlar 2x daha fazla görüntülenme alıyor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
