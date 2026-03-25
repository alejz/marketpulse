'use client'

import { useState } from 'react'

export default function AnalyticsPage() {
  const [period, setPeriod] = useState('7d')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">📈 Analitik</h1>
          <p className="text-gray-500">Performans ve veri analizi</p>
        </div>
        <div className="flex gap-2">
          {[
            { id: '24h', label: '24 Saat' },
            { id: '7d', label: '7 Gün' },
            { id: '30d', label: '30 Gün' },
            { id: '90d', label: '90 Gün' }
          ].map(p => (
            <button
              key={p.id}
              onClick={() => setPeriod(p.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                period === p.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 border hover:bg-gray-50'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Gelir</p>
          <p className="text-2xl font-bold text-green-600">₺723.004</p>
          <p className="text-sm text-green-600 mt-1">↑ %23 bu hafta</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Sipariş Sayısı</p>
          <p className="text-2xl font-bold text-gray-900">596</p>
          <p className="text-sm text-green-600 mt-1">↑ %18 bu hafta</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Ortalama Sepet</p>
          <p className="text-2xl font-bold text-gray-900">₺1.213</p>
          <p className="text-sm text-green-600 mt-1">↑ %5 bu hafta</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Dönüşüm Oranı</p>
          <p className="text-2xl font-bold text-gray-900">3.2%</p>
          <p className="text-sm text-red-600 mt-1">↓ %0.3 bu hafta</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Gelir Grafiği</h3>
          <div className="h-48 flex items-end gap-2">
            {[65, 45, 78, 52, 89, 43, 72, 58, 84, 62, 75, 90].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-blue-600 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            {['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'].map(m => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Satış Kanalları</h3>
          <div className="space-y-4">
            {[
              { channel: 'Instagram', sales: 245, revenue: 312000, percent: 45 },
              { channel: 'Dolap', sales: 180, revenue: 198000, percent: 32 },
              { channel: 'Website', sales: 120, revenue: 156000, percent: 20 },
              { channel: 'TikTok', sales: 51, revenue: 57004, percent: 3 },
            ].map(c => (
              <div key={c.channel}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{c.channel}</span>
                  <span className="text-gray-500">₺{c.revenue.toLocaleString()} ({c.percent}%)</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${c.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">En Çok Satan Ürünler</h3>
          <div className="space-y-3">
            {[
              { name: 'Running Shoes', sales: 234, revenue: 303966 },
              { name: 'Smart Watch', sales: 56, revenue: 139944 },
              { name: 'Wireless Earbuds', sales: 89, revenue: 133411 },
              { name: 'Premium Hoodie', sales: 128, revenue: 115072 },
            ].map((p, i) => (
              <div key={p.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  <span className="font-medium">{p.name}</span>
                </div>
                <span className="text-green-600 font-medium">₺{p.revenue.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Müşteri Segmentasyonu</h3>
          <div className="space-y-3">
            {[
              { segment: 'VIP (₺10K+)', count: 12, percent: 8, color: 'amber' },
              { segment: 'Aktif (₺5K-10K)', count: 28, percent: 19, color: 'green' },
              { segment: 'Yeni (< 3 sipariş)', count: 45, percent: 31, color: 'blue' },
              { segment: 'Risk (3+ ay yok)', count: 60, percent: 42, color: 'red' },
            ].map(s => (
              <div key={s.segment} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full bg-${s.color}-500`}></span>
                  <span className="text-sm">{s.segment}</span>
                </div>
                <span className="text-sm font-medium">{s.count} ({s.percent}%)</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">AI Tahmin</h3>
          <div className="space-y-4">
            <div className="p-4 bg-teal-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🔮</span>
                <span className="font-medium text-teal-800"> gelecek Hafta</span>
              </div>
              <p className="text-sm text-teal-700">Satışların %34 artması bekleniyor</p>
              <p className="text-xs text-teal-600 mt-1">Güven: %78</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🎯</span>
                <span className="font-medium text-blue-800"> Önerilen</span>
              </div>
              <p className="text-sm text-blue-700">Running Shoes için kampanya başlat</p>
              <p className="text-xs text-blue-600 mt-1">Beklenen ROI: +%45</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">⚠️</span>
                <span className="font-medium text-red-800"> Dikkat</span>
              </div>
              <p className="text-sm text-red-700">60 müşteri risk segmentinde</p>
              <p className="text-xs text-red-600 mt-1">Re-engagement kampanyası önerilir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
