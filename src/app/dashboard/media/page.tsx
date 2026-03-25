'use client'

import { useState } from 'react'

interface MediaItem {
  id: number
  type: 'image' | 'video'
  name: string
  size: string
  uploadedAt: string
  usedIn: number
  thumbnail: string
}

const initialMedia: MediaItem[] = [
  { id: 1, type: 'image', name: 'urun-foto-1.jpg', size: '2.4 MB', uploadedAt: '2 saat önce', usedIn: 3, thumbnail: '🖼️' },
  { id: 2, type: 'image', name: 'urun-foto-2.jpg', size: '1.8 MB', uploadedAt: '5 saat önce', usedIn: 1, thumbnail: '🖼️' },
  { id: 3, type: 'video', name: 'urun-video-1.mp4', size: '45 MB', uploadedAt: '1 gün önce', usedIn: 5, thumbnail: '🎬' },
  { id: 4, type: 'image', name: 'kampanya-banner.jpg', size: '3.2 MB', uploadedAt: '2 gün önce', usedIn: 2, thumbnail: '🖼️' },
  { id: 5, type: 'video', name: 'unboxing.mp4', size: '120 MB', uploadedAt: '3 gün önce', usedIn: 8, thumbnail: '🎬' },
]

export default function MediaPage() {
  const [media, setMedia] = useState<MediaItem[]>(initialMedia)
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all')
  const [showUpload, setShowUpload] = useState(false)

  const filteredMedia = filter === 'all' ? media : media.filter(m => m.type === filter)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Medya Yönetimi</h1>
          <p className="text-gray-500">Fotoğraf ve videolarınızı yükleyin ve yönetin</p>
        </div>
        <button
          onClick={() => setShowUpload(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
        >
          📤 Medya Yükle
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="text-2xl mb-2">📷</div>
          <p className="text-2xl font-bold text-gray-900">156</p>
          <p className="text-sm text-gray-500">Toplam Fotoğraf</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="text-2xl mb-2">🎬</div>
          <p className="text-2xl font-bold text-gray-900">24</p>
          <p className="text-sm text-gray-500">Toplam Video</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="text-2xl mb-2">💾</div>
          <p className="text-2xl font-bold text-gray-900">2.4 GB</p>
          <p className="text-sm text-gray-500">Kullanılan Alan</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="text-2xl mb-2">🎯</div>
          <p className="text-2xl font-bold text-gray-900">45</p>
          <p className="text-sm text-gray-500">Bu Ay Yüklenen</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'all' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Tümü
            </button>
            <button
              onClick={() => setFilter('image')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'image' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📷 Fotoğraflar
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'video' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🎬 Videolar
            </button>
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Medya ara..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <button
            onClick={() => setShowUpload(true)}
            className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 hover:border-blue-400 hover:bg-blue-50 transition-colors"
          >
            <span className="text-3xl">+</span>
            <span className="text-sm text-gray-500">Yükle</span>
          </button>
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="aspect-square rounded-xl bg-gray-100 flex flex-col items-center justify-center gap-1 hover:bg-gray-200 cursor-pointer group relative"
            >
              <span className="text-4xl">{item.thumbnail}</span>
              <span className="text-xs text-gray-500 truncate w-full px-2 text-center">{item.name}</span>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-2">
                <button className="p-2 bg-white rounded-lg text-sm">Görüntüle</button>
                <button className="p-2 bg-white rounded-lg text-sm">Sil</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Görsel Üretimi</h2>
        <p className="text-gray-600 mb-4">Yapay zeka ile kampanya görselleri üretin</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Açıklama</label>
            <textarea
              placeholder="Örn: Modern bir teknoloji mağazası, neon ışıklarla, minimalist tasarım..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg h-24 resize-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stil</label>
            <div className="grid grid-cols-3 gap-2">
              {['Modern', 'Klasik', 'Minimal', 'Futuristic', 'Doğal', 'Corporate'].map((style) => (
                <button key={style} className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:border-blue-500">
                  {style}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <button className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium">
          🎨 AI ile Görsel Üret
        </button>
      </div>

      {showUpload && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Medya Yükle</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
              <span className="text-4xl mb-2 block">📁</span>
              <p className="text-gray-600">Dosyaları sürükleyin veya</p>
              <button className="mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                Dosya Seç
              </button>
              <p className="text-xs text-gray-400 mt-2">JPG, PNG, MP4 - Max 100MB</p>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowUpload(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                İptal
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Yükle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
