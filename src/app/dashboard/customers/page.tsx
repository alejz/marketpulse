'use client'

import { useState } from 'react'

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  totalSpent: number
  orderCount: number
  lastOrder: string
  status: 'active' | 'vip' | 'new' | 'risk'
  platform: string
}

const sampleCustomers: Customer[] = [
  { id: '1', name: 'Ahmet Yılmaz', email: 'ahmet@email.com', phone: '0532 123 4567', totalSpent: 15400, orderCount: 8, lastOrder: '2 gün önce', status: 'vip', platform: 'Instagram' },
  { id: '2', name: 'Ayşe Demir', email: 'ayse@email.com', phone: '0533 234 5678', totalSpent: 8900, orderCount: 4, lastOrder: '1 hafta önce', status: 'active', platform: 'Dolap' },
  { id: '3', name: 'Mehmet Kaya', email: 'mehmet@email.com', phone: '0542 345 6789', totalSpent: 2300, orderCount: 1, lastOrder: 'Bugün', status: 'new', platform: 'Website' },
  { id: '4', name: 'Fatma Şahin', email: 'fatma@email.com', phone: '0535 456 7890', totalSpent: 4200, orderCount: 2, lastOrder: '1 ay önce', status: 'risk', platform: 'Instagram' },
  { id: '5', name: 'Ali Özkan', email: 'ali@email.com', phone: '0531 567 8901', totalSpent: 11200, orderCount: 6, lastOrder: '3 gün önce', status: 'vip', platform: 'Dolap' },
]

export default function CustomersPage() {
  const [customers] = useState<Customer[]>(sampleCustomers)
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const [search, setSearch] = useState('')

  const filteredCustomers = customers.filter(c => {
    if (filter !== 'all' && c.status !== filter) return false
    if (search && !c.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const stats = {
    total: customers.length,
    vip: customers.filter(c => c.status === 'vip').length,
    revenue: customers.reduce((sum, c) => sum + c.totalSpent, 0),
    avgOrder: Math.round(customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">👥 Müşteriler</h1>
          <p className="text-gray-500">Müşteri yönetimi ve satış analizi</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Müşteri</p>
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200">
          <p className="text-sm text-amber-700">VIP Müşteri</p>
          <p className="text-2xl font-bold text-amber-700">{stats.vip}</p>
          <p className="text-xs text-amber-600">{Math.round(stats.vip/stats.total*100)}%</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Gelir</p>
          <p className="text-2xl font-bold text-green-600">₺{stats.revenue.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Ort. Sipariş</p>
          <p className="text-2xl font-bold text-gray-900">₺{stats.avgOrder.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Müşteri ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg w-64"
        />
        <div className="flex gap-2">
          {['all', 'vip', 'active', 'new', 'risk'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filter === status
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 border hover:bg-gray-50'
              }`}
            >
              {status === 'all' ? 'Tümü' : status === 'vip' ? 'VIP' : status === 'new' ? 'Yeni' : status === 'risk' ? 'Risk' : 'Aktif'}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Müşteri</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">İletişim</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Toplam Harcama</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Sipariş</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Son Sipariş</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Platform</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Durum</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => (
              <tr 
                key={customer.id} 
                className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedCustomer(customer)}
              >
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium text-gray-900">{customer.name}</p>
                    <p className="text-xs text-gray-500">{customer.email}</p>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{customer.phone}</td>
                <td className="px-4 py-3 text-sm font-medium text-green-600">₺{customer.totalSpent.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{customer.orderCount}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{customer.lastOrder}</td>
                <td className="px-4 py-3">
                  <span className="text-lg">{customer.platform === 'Instagram' ? '📸' : customer.platform === 'Dolap' ? '🛍️' : '🌐'}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    customer.status === 'vip' ? 'bg-amber-100 text-amber-700' :
                    customer.status === 'active' ? 'bg-green-100 text-green-700' :
                    customer.status === 'new' ? 'bg-blue-100 text-blue-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {customer.status === 'vip' ? 'VIP' : customer.status === 'new' ? 'Yeni' : customer.status === 'risk' ? 'Risk' : 'Aktif'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCustomer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{selectedCustomer.name}</h2>
                <p className="text-gray-500">{selectedCustomer.email}</p>
              </div>
              <button onClick={() => setSelectedCustomer(null)} className="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-sm text-gray-500">Toplam Harcama</p>
                <p className="text-xl font-bold text-green-600">₺{selectedCustomer.totalSpent.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-sm text-gray-500">Sipariş Sayısı</p>
                <p className="text-xl font-bold">{selectedCustomer.orderCount}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-sm text-gray-500">Son Sipariş</p>
                <p className="text-xl font-bold">{selectedCustomer.lastOrder}</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
                💬 Özel Teklif Gönder
              </button>
              <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                📝 Kişiselleştirilmiş İçerik Gönder
              </button>
              <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                🎁 VIP Paketi Oluştur
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
