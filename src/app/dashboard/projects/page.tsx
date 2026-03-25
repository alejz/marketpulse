'use client'

import { useState } from 'react'

interface Project {
  id: string
  name: string
  customer: string
  email: string
  phone: string
  status: 'active' | 'paused' | 'completed'
  platforms: string[]
  startDate: string
  revenue: string
  package: 'basit' | 'profesyonel' | 'tam'
}

const projects: Project[] = [
  { id: '1', name: 'TeknoTech Mağazası', customer: 'Ahmet Yılmaz', email: 'ahmet@teknotech.com', phone: '0532 123 4567', status: 'active', platforms: ['Instagram', 'Trendyol'], startDate: '15 Ocak 2026', revenue: '₺45.000', package: 'tam' },
  { id: '2', name: 'ModaButik', customer: 'Ayşe Demir', email: 'ayse@modaboutik.com', phone: '0533 234 5678', status: 'active', platforms: ['Instagram', 'Dolap'], startDate: '20 Ocak 2026', revenue: '₺28.000', package: 'profesyonel' },
  { id: '3', name: 'Ev Dekorasyon', customer: 'Mehmet Kaya', email: 'mehmet@evdekor.com', phone: '0542 345 6789', status: 'paused', platforms: ['Instagram'], startDate: '10 Şubat 2026', revenue: '₺12.000', package: 'basit' },
  { id: '4', name: 'Spor Dünyası', customer: 'Fatma Şahin', email: 'fatma@spordunyasi.com', phone: '0535 456 7890', status: 'active', platforms: ['TikTok', 'Instagram'], startDate: '05 Ocak 2026', revenue: '₺67.000', package: 'tam' },
  { id: '5', name: 'Kozmetik Shop', customer: 'Zeynep Korkmaz', email: 'zeynep@kozmetik.com', phone: '0531 567 8901', status: 'completed', platforms: ['Instagram'], startDate: '01 Aralık 2025', revenue: '₺15.000', package: 'basit' },
]

export default function ProjectsPage() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.status === filter)

  const stats = {
    total: projects.length,
    active: projects.filter(p => p.status === 'active').length,
    revenue: projects.reduce((sum, p) => sum + parseInt(p.revenue.replace('₺', '').replace('.', '')), 0),
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">📁 Projeler</h1>
          <p className="text-gray-500">Müşteri projelerini yönet</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          + Yeni Proje
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Proje</p>
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Aktif Proje</p>
          <p className="text-2xl font-bold text-green-600">{stats.active}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Gelir</p>
          <p className="text-2xl font-bold text-blue-600">₺{(stats.revenue / 1000).toFixed(0)}K</p>
        </div>
      </div>

      <div className="flex gap-2">
        {['all', 'active', 'paused', 'completed'].map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-lg text-sm font-medium ${filter === f ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border hover:bg-gray-50'}`}>
            {f === 'all' ? 'Tümü' : f === 'active' ? 'Aktif' : f === 'paused' ? 'Duraklatıldı' : 'Tamamlandı'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-gray-900">{project.name}</h3>
                <p className="text-sm text-gray-500">{project.customer}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                project.status === 'active' ? 'bg-green-100 text-green-700' :
                project.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                'bg-gray-100 text-gray-600'
              }`}>
                {project.status === 'active' ? 'Aktif' : project.status === 'paused' ? 'Duraklatıldı' : 'Tamamlandı'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.platforms.map(p => (
                <span key={p} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">{p}</span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500">Gelir</p>
                <p className="font-bold text-green-600">{project.revenue}</p>
              </div>
              <div>
                <p className="text-gray-500">Paket</p>
                <p className="font-medium text-blue-600 capitalize">{project.package}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Yeni Proje Ekle</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Proje Adı</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Örn: TeknoTech Mağazası" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Müşteri Adı</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                <input type="email" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Paket</label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option>Basit</option>
                  <option>Profesyonel</option>
                  <option>Tam</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Platformlar</label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option>Instagram</option>
                  <option>Instagram + Dolap</option>
                  <option>Instagram + Trendyol</option>
                  <option>Tümü</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAddModal(false)} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">İptal</button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Kaydet</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
