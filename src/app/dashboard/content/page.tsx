'use client'

import { useState } from 'react'

interface ContentPiece {
  id: number
  platform: string
  content: string
  generatedAt: string
  status: 'draft' | 'scheduled' | 'published'
}

const contentTypes = [
  { id: 'post', label: 'Gönderi', icon: '📝' },
  { id: 'story', label: 'Hikaye', icon: '⏱️' },
  { id: 'reel', label: 'Reel/Video', icon: '🎬' },
  { id: 'thread', label: 'Thread', icon: '🧵' },
  { id: 'caption', label: 'Caption', icon: '📋' },
]

const platforms = ['Instagram', 'Twitter', 'LinkedIn', 'Facebook', 'TikTok']

const sampleContent: ContentPiece[] = [
  { id: 1, platform: 'Instagram', content: 'Yeni teknoloji ürünümüz tanıtıldı! 🚀 #TechNews #Innovation', generatedAt: '2 saat önce', status: 'published' },
  { id: 2, platform: 'Twitter', content: '5 ila 10 yıl içinde yapay zeka, hayatımızın ayrılmaz bir parçası olacak. İşte detaylar... 🧵', generatedAt: '5 saat önce', status: 'scheduled' },
  { id: 3, platform: 'LinkedIn', content: 'Şirketimiz, sektörde lider konumunu pekiştiren yeni bir ortaklık duyuruyor. Detaylar yazımızda...', generatedAt: '1 gün önce', status: 'draft' },
]

export default function ContentPage() {
  const [selectedType, setSelectedType] = useState('post')
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('profesyonel')
  const [generatedContent, setGeneratedContent] = useState<ContentPiece[]>(sampleContent)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">İçerik Üretimi</h1>
        <p className="text-gray-500">AI ile içerik üretin ve otomatik paylaşın</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Yeni İçerik Üret</h2>
            
            <div className="flex gap-2 mb-4">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    selectedType === type.id
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{type.icon}</span>
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Konu / Ürün</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Örn: Yeni smartphone lansmanı, teknoloji trendleri..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ton</label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="profesyonel">Profesyonel</option>
                    <option value="eğlenceli">Eğlenceli</option>
                    <option value="ciddi">Ciddi</option>
                    <option value="samimi">Samimi</option>
                    <option value="teknik">Teknik</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    {platforms.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating || !topic}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span> Üretiliyor...
                  </span>
                ) : (
                  '🤖 AI ile İçerik Üret'
                )}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Üretilen İçerikler</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg">Tümü</button>
                <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">Taslak</button>
                <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">Planlı</button>
                <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">Paylaşılan</button>
              </div>
            </div>

            <div className="space-y-4">
              {generatedContent.map((content) => (
                <div key={content.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        content.status === 'published' ? 'bg-green-100 text-green-700' :
                        content.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {content.status === 'published' ? 'Paylaşıldı' : 
                         content.status === 'scheduled' ? 'Planlı' : 'Taslak'}
                      </span>
                      <span className="text-sm text-gray-500">{content.platform}</span>
                    </div>
                    <span className="text-xs text-gray-400">{content.generatedAt}</span>
                  </div>
                  <p className="text-gray-700">{content.content}</p>
                  <div className="flex gap-2 mt-3">
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-100">
                      Düzenle
                    </button>
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-100">
                      Platforma Gönder
                    </button>
                    <button className="px-3 py-1 text-sm text-blue-600 hover:underline">
                      Planla
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">AI Ayarları</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">AI Model</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>GPT-4 Turbo</option>
                  <option>Claude 3</option>
                  <option>Gemini Pro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Maksimum Uzunluk</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>150 karakter</option>
                  <option selected>300 karakter</option>
                  <option>500 karakter</option>
                  <option>Sınırsız</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Hashtag Eklesin mi?</label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Otomatik hashtag ekle</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
            <h3 className="font-semibold text-gray-900 mb-2">💡 AI Prompt Şablonları</h3>
            <p className="text-sm text-gray-600 mb-4">Hazır şablonlarla hızlı içerik üretin</p>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm bg-white rounded-lg border hover:border-purple-300">
                🛍️ Ürün tanıtımı
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-white rounded-lg border hover:border-purple-300">
                📰 Teknoloji haberi
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-white rounded-lg border hover:border-purple-300">
                🎁 Kampanya duyurusu
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-white rounded-lg border hover:border-purple-300">
                💬 Müşteri sorusu yanıtı
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
