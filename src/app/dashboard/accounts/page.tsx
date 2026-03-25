'use client'

import { useState } from 'react'

interface SocialAccount {
  id: number
  platform: string
  username: string
  followers: string
  status: 'active' | 'paused' | 'error'
  autoPost: boolean
  lastPost: string
  icon: string
}

const initialAccounts: SocialAccount[] = [
  { id: 1, platform: 'Instagram', username: '@techstore', followers: '5.2K', status: 'active', autoPost: true, lastPost: '2 saat önce', icon: '📸' },
  { id: 2, platform: 'Twitter', username: '@techstorenet', followers: '3.1K', status: 'active', autoPost: true, lastPost: '4 saat önce', icon: '🐦' },
  { id: 3, platform: 'LinkedIn', username: 'TechStore Inc.', followers: '2.8K', status: 'active', autoPost: false, lastPost: '1 gün önce', icon: '💼' },
  { id: 4, platform: 'Facebook', username: 'TechStore', followers: '8.4K', status: 'paused', autoPost: false, lastPost: '3 gün önce', icon: '📘' },
  { id: 5, platform: 'TikTok', username: '@techstore', followers: '12.5K', status: 'active', autoPost: true, lastPost: '6 saat önce', icon: '🎵' },
]

const platforms = [
  { name: 'Instagram', icon: '📸', color: 'from-pink-500 to-purple-600' },
  { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-600' },
  { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-800' },
  { name: 'Facebook', icon: '📘', color: 'from-blue-500 to-blue-700' },
  { name: 'TikTok', icon: '🎵', color: 'from-gray-900 to-pink-500' },
  { name: 'YouTube', icon: '▶️', color: 'from-red-600 to-red-700' },
]

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<SocialAccount[]>(initialAccounts)
  const [showAddModal, setShowAddModal] = useState(false)

  const toggleAutoPost = (id: number) => {
    setAccounts(accounts.map(acc => 
      acc.id === id ? { ...acc, autoPost: !acc.autoPost } : acc
    ))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sosyal Medya Hesapları</h1>
          <p className="text-gray-500">Tüm hesaplarınızı buradan yönetin</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
        >
          + Yeni Hesap Ekle
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {accounts.map((account) => (
          <div key={account.id} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{account.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{account.platform}</h3>
                  <p className="text-sm text-gray-500">{account.username}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                account.status === 'active' ? 'bg-green-100 text-green-700' :
                account.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {account.status === 'active' ? 'Aktif' : 
                 account.status === 'paused' ? 'Duraklatıldı' : 'Hata'}
              </span>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Takipçi</span>
                <span className="font-semibold text-gray-900">{account.followers}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-500">Son paylaşım</span>
                <span className="text-gray-900">{account.lastPost}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={account.autoPost}
                  onChange={() => toggleAutoPost(account.id)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600"
                />
                <span className="text-sm text-gray-600">Otomatik paylaşım</span>
              </label>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Düzenle
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Yeni Hesap Ekle</h2>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {platforms.map((platform) => (
                <button
                  key={platform.name}
                  className={`p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors flex flex-col items-center gap-2`}
                >
                  <span className="text-2xl">{platform.icon}</span>
                  <span className="text-sm font-medium">{platform.name}</span>
                </button>
              ))}
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kullanıcı Adı</label>
                <input
                  type="text"
                  placeholder="@hesapadi"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">API Token</label>
                <input
                  type="password"
                  placeholder="Platform API anahtarınız"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
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
