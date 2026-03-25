'use client'

import { useState } from 'react'

interface Content {
  id: string
  project: string
  platform: string
  type: 'post' | 'story' | 'reel' | 'video'
  content: string
  status: 'draft' | 'scheduled' | 'published'
  date: string
}

const contents: Content[] = [
  { id: '1', project: 'TeknoTech', platform: 'Instagram', type: 'post', content: 'Yeni telefon tanıtımı...', status: 'published', date: 'Bugün' },
  { id: '2', project: 'ModaButik', platform: 'Instagram', type: 'reel', content: 'Yaz koleksiyonu...', status: 'scheduled', date: 'Yarın' },
  { id: '3', project: 'Spor Dünyası', platform: 'TikTok', type: 'video', content: 'Egzersiz videosu...', status: 'draft', date: '-' },
]

export default function ContentPage() {
  const [showCreate, setShowCreate] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">✍️ İçerik</h1>
          <p className="text-gray-500">Projeler için içerik üret ve planla</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          + Yeni İçerik
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam İçerik</p>
          <p className="text-2xl font-bold text-gray-900">24</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Yayınlanan</p>
          <p className="text-2xl font-bold text-green-600">18</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Planlanan</p>
          <p className="text-2xl font-bold text-blue-600">4</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Taslak</p>
          <p className="text-2xl font-bold text-gray-400">2</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Son İçerikler</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {contents.map(content => (
            <div key={content.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                  {content.type === 'post' && '📝'}
                  {content.type === 'story' && '⏱️'}
                  {content.type === 'reel' && '🎬'}
                  {content.type === 'video' && '🎥'}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{content.project}</p>
                  <p className="text-sm text-gray-500 truncate max-w-xs">{content.content}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">{content.platform}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  content.status === 'published' ? 'bg-green-100 text-green-700' :
                  content.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {content.status === 'published' ? 'Yayınlandı' : content.status === 'scheduled' ? 'Planlandı' : 'Taslak'}
                </span>
                <span className="text-sm text-gray-400">{content.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showCreate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Yeni İçerik</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Proje</label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option>TeknoTech</option>
                  <option>ModaButik</option>
                  <option>Spor Dünyası</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">İçerik Türü</label>
                <div className="flex gap-2">
                  {['post', 'story', 'reel', 'video'].map(t => (
                    <button key={t} className="flex-1 py-2 border rounded-lg text-sm capitalize">{t}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">İçerik</label>
                <textarea className="w-full px-3 py-2 border rounded-lg h-24" placeholder="İçerik yaz..."></textarea>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowCreate(false)} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg">İptal</button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg">Üret</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
