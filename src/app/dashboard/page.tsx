'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Project {
  id: string
  name: string
  customer: string
  status: 'active' | 'paused' | 'completed'
  platform: string
  revenue: string
  posts: number
  adsSpend: string
}

const projects: Project[] = [
  { id: '1', name: 'TeknoTech Mağazası', customer: 'Ahmet Yılmaz', status: 'active', platform: 'Instagram + Trendyol', revenue: '₺45.000', posts: 24, adsSpend: '₺5.000' },
  { id: '2', name: 'ModaButik', customer: 'Ayşe Demir', status: 'active', platform: 'Instagram + Dolap', revenue: '₺28.000', posts: 18, adsSpend: '₺3.200' },
  { id: '3', name: 'Ev Dekorasyon', customer: 'Mehmet Kaya', status: 'paused', platform: 'Instagram', revenue: '₺12.000', posts: 8, adsSpend: '₺1.500' },
  { id: '4', name: 'Spor Dünyası', customer: 'Fatma Şahin', status: 'active', platform: 'TikTok + Instagram', revenue: '₺67.000', posts: 32, adsSpend: '₺8.500' },
]

const stats = {
  totalCustomers: 12,
  activeProjects: 8,
  totalRevenue: '₺523.000',
  monthlySpend: '₺45.000',
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hoş geldin! 👋</h1>
          <p className="text-gray-500">Bugün 3 yeni içerik üretildi, 2 kampanya başlatıldı</p>
        </div>
        <Link href="/dashboard/projects" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          + Yeni Proje
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Müşteri</p>
          <p className="text-2xl font-bold text-gray-900">{stats.totalCustomers}</p>
          <p className="text-xs text-green-600 mt-1">↑ 2 bu ay</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Aktif Proje</p>
          <p className="text-2xl font-bold text-blue-600">{stats.activeProjects}</p>
          <p className="text-xs text-gray-500 mt-1">Çalışmaya devam</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Gelir</p>
          <p className="text-2xl font-bold text-green-600">{stats.totalRevenue}</p>
          <p className="text-xs text-green-600 mt-1">↑ %23 bu ay</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Reklam Harcaması</p>
          <p className="text-2xl font-bold text-orange-600">{stats.monthlySpend}</p>
          <p className="text-xs text-gray-500 mt-1">Bu ay</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-3">
        <Link href="/dashboard/ai-tools" className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white hover:opacity-90 transition-opacity">
          <span className="text-2xl block mb-1">🤖</span>
          <span className="text-sm font-medium">AI İçerik Üret</span>
        </Link>
        <Link href="/dashboard/ads" className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white hover:opacity-90 transition-opacity">
          <span className="text-2xl block mb-1">📢</span>
          <span className="text-sm font-medium">Reklam Kur</span>
        </Link>
        <Link href="/dashboard/content" className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white hover:opacity-90 transition-opacity">
          <span className="text-2xl block mb-1">✍️</span>
          <span className="text-sm font-medium">İçerik Planla</span>
        </Link>
        <Link href="/dashboard/analytics" className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white hover:opacity-90 transition-opacity">
          <span className="text-2xl block mb-1">📊</span>
          <span className="text-sm font-medium">Rapor İndir</span>
        </Link>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Aktif Projeler</h3>
          <Link href="/dashboard/projects" className="text-sm text-blue-600 hover:underline">Tümünü gör →</Link>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Proje</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Müşteri</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Platform</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Gelir</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Reklam</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Durum</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <p className="font-medium text-gray-900">{project.name}</p>
                  <p className="text-xs text-gray-500">{project.posts} post</p>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{project.customer}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{project.platform}</td>
                <td className="px-4 py-3 text-sm font-medium text-green-600">{project.revenue}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{project.adsSpend}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'active' ? 'bg-green-100 text-green-700' :
                    project.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {project.status === 'active' ? 'Aktif' : project.status === 'paused' ? 'Duraklatıldı' : 'Tamamlandı'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
