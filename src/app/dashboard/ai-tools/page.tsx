'use client'

import { useState } from 'react'

const tools = [
  { id: 'content', name: 'İçerik Üretici', icon: '✍️', desc: 'Instagram, LinkedIn için içerik üret' },
  { id: 'visual', name: 'Görsel Üretici', icon: '🎨', desc: 'Kampanya görselleri üret' },
  { id: 'competitor', name: 'Rakip Analizi', icon: '📊', desc: 'Rakip hesapları analiz et' },
  { id: 'ad', name: 'Reklam Metni', icon: '📢', desc: 'Google, Meta için reklam metni' },
  { id: 'reply', name: 'Müşteri Yanıtı', icon: '💬', desc: 'Mesajlara otomatik yanıt' },
  { id: 'trend', name: 'Trend Takibi', icon: '📈', desc: 'Güncel trendleri takip et' },
]

const guitarDemo: Record<string, any> = {
  content: {
    product: 'Yamaha Akustik Gitar',
    platform: 'Instagram',
    result: {
      caption: `🎸 Müziğin sesini duy!

Bu gitar elinize aldığınız an farkı hissedeceksiniz. 

✨ Premium ses kalitesi
🪵 Masif ağaç gövde  
🎵 Rahat tutuş sapı

Her nota, her akor... Mükemmel sound seni bekliyor.

👉 Hemen dene, farkı yaşa!

#Gitar #AkustikGitar #Müzik #Yamaha #YeniBaşlayanlar #MüzikEğitimi #GitarDersi #MusicGuitar #AcousticGuitar #GuitarLife`,
      hashtags: ['#Gitar', '#AkustikGitar', '#Müzik', '#Yamaha', '#YeniBaşlayanlar']
    }
  },
  visual: {
    product: 'Yamaha Akustik Gitar',
    campaign: 'Yaz Müzik Okulu',
    result: {
      concept: 'Vintage Sıcaklık',
      style: 'Vintage, sıcak, doğal',
      colors: 'Kahverengi, Krem, Altın tonları',
      suggestions: [
        'Soft focus ile arka plan',
        'Gitar tellerine yakın çekim',
        'Müzik notası efektleri'
      ]
    }
  },
  competitor: {
    competitor: '@rakipgitarstore',
    result: {
      followers: '32.5K',
      engagement: '3.2%',
      strategy: 'Haftada 3 paylaşım, eğitim içerikleri',
      weaknesses: ['Yüksek fiyat', 'Yavaş yanıt süresi'],
      opportunities: ['Düşük fiyat kampanyası', 'Hızlı yanıt sistemi']
    }
  },
  ad: {
    product: 'Gitar Kursu',
    platform: 'Google Ads',
    result: {
      headlines: [
        'Gitar öğrenmek ister misin?',
        '7 günde temel gitar',
        'Online gitar dersi'
      ],
      descriptions: [
        'Usta eğitmenlerden birebir ders',
        '50+ video, sınırsız erişim',
        'Başlangıç seti hediye'
      ]
    }
  },
  reply: {
    message: 'Bu gitar yeni başlayanlar için uygun mu?',
    result: {
      intent: 'Soru - Yeni Başlayan',
      response: 'Merhaba! Evet, bu gitar yeni başlayanlar için ideal. İnce sapı ve yumuşak teller sayesinde parmaklarınız acımaz. Ayrıca tüm başlangıççılar için ücretsiz ders videosu paketi hediye! 🎁 Başka sorularınız varsa yardımcı olmaktan mutluluk duyarız! 🎸',
      tone: 'Samimi ve bilgilendirici'
    }
  },
  trend: {
    category: 'Müzik/Eğitim',
    result: {
      trending: [
        { topic: '#GitarDersi', volume: '+245%', action: 'İçerik üret' },
        { topic: '#OnlineMüzik', volume: '+180%', action: 'Takip et' },
        { topic: '#YeniBaşlayan', volume: '+95%', action: 'Kampanya başlat' }
      ],
      prediction: 'Gitar dersi konulu içerikler önümüzdeki hafta %40+ etkileşim alacak'
    }
  }
}

export default function AIToolsPage() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleToolClick = (toolId: string) => {
    setSelectedTool(toolId)
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
    }, 1500)
  }

  const currentDemo = selectedTool ? guitarDemo[selectedTool] : null

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">🤖 AI Araçları - Demo</h1>
        <p className="text-gray-500">Ürün: <span className="font-medium text-purple-600">Yamaha Akustik Gitar</span></p>
      </div>

      {/* Product Info */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center text-3xl">
            🎸
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Yamaha Akustik Gitar</h2>
            <p className="text-sm text-gray-500">Fiyat: ₺4.999 • Kategori: Müzik Aletleri</p>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-3 gap-4">
        {tools.map(tool => (
          <button
            key={tool.id}
            onClick={() => handleToolClick(tool.id)}
            className={`bg-white rounded-xl p-6 border-2 text-left transition-all hover:shadow-lg ${
              selectedTool === tool.id ? 'border-purple-500 shadow-lg' : 'border-gray-200'
            }`}
          >
            <div className="text-3xl mb-3">{tool.icon}</div>
            <h3 className="font-bold text-gray-900">{tool.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{tool.desc}</p>
            <span className="inline-block mt-3 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Demo</span>
          </button>
        ))}
      </div>

      {/* Demo Output */}
      {selectedTool && currentDemo && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-bold text-gray-900">
              {tools.find(t => t.id === selectedTool)?.name} - Sonuç
            </h3>
            <button 
              onClick={() => setSelectedTool(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕ Kapat
            </button>
          </div>

          <div className="p-6">
            {isGenerating ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4 animate-pulse">🤖</div>
                <p className="text-gray-500">AI üretiyor...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Content Tool */}
                {selectedTool === 'content' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-600 mb-2">Ürün:</p>
                      <p className="font-medium">{currentDemo.product}</p>
                      <p className="text-sm text-purple-500 mt-1">Platform: {currentDemo.platform}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-2">Üretilen İçerik:</p>
                      <p className="whitespace-pre-line text-gray-800">{currentDemo.result.caption}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {currentDemo.result.hashtags.map((tag: string) => (
                          <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Tool */}
                {selectedTool === 'visual' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-pink-50 rounded-lg">
                      <p className="text-sm text-pink-600 mb-2">Ürün:</p>
                      <p className="font-medium">{currentDemo.product}</p>
                      <p className="text-sm text-pink-500 mt-1">Kampanya: {currentDemo.campaign}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Konsept</p>
                        <p className="font-medium">{currentDemo.result.concept}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Stil</p>
                        <p className="font-medium">{currentDemo.result.style}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Renkler</p>
                        <p className="font-medium">{currentDemo.result.colors}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-2">Öneriler:</p>
                      <ul className="space-y-1">
                        {currentDemo.result.suggestions.map((s: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <span>•</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Competitor Tool */}
                {selectedTool === 'competitor' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-600 mb-2">Analiz Edilen:</p>
                      <p className="font-medium">{currentDemo.competitor}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg text-center">
                        <p className="text-sm text-gray-500">Takipçi</p>
                        <p className="text-xl font-bold">{currentDemo.result.followers}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg text-center">
                        <p className="text-sm text-gray-500">Etkileşim</p>
                        <p className="text-xl font-bold text-green-600">{currentDemo.result.engagement}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg text-center">
                        <p className="text-sm text-gray-500">Strateji</p>
                        <p className="text-sm font-medium">Haftada 3 paylaşım</p>
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-600 mb-2">Zayıflıklar:</p>
                      <ul className="space-y-1">
                        {currentDemo.result.weaknesses.map((w: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-red-700">
                            <span>⚠️</span> {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600 mb-2">Fırsatlar:</p>
                      <ul className="space-y-1">
                        {currentDemo.result.opportunities.map((o: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-green-700">
                            <span>✨</span> {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Ad Tool */}
                {selectedTool === 'ad' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600 mb-2">Ürün:</p>
                      <p className="font-medium">{currentDemo.product}</p>
                      <p className="text-sm text-green-500 mt-1">Platform: {currentDemo.platform}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Başlıklar:</p>
                      <div className="space-y-2">
                        {currentDemo.result.headlines.map((h: string, i: number) => (
                          <div key={i} className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                            <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">{i + 1}</span>
                            <span className="font-medium">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Açıklamalar:</p>
                      <div className="space-y-2">
                        {currentDemo.result.descriptions.map((d: string, i: number) => (
                          <div key={i} className="p-3 bg-gray-50 rounded-lg text-gray-700">
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Reply Tool */}
                {selectedTool === 'reply' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-600 mb-2">Gelen Mesaj:</p>
                      <p className="font-medium text-lg">{currentDemo.message}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-green-600">Tespit Edilen:</p>
                        <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">{currentDemo.result.intent}</span>
                      </div>
                      <p className="text-gray-500 text-sm mb-2">Üretilen Yanıt:</p>
                      <p className="text-gray-800 text-lg">{currentDemo.result.response}</p>
                      <p className="text-xs text-gray-500 mt-2">Ton: {currentDemo.result.tone}</p>
                    </div>
                  </div>
                )}

                {/* Trend Tool */}
                {selectedTool === 'trend' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600 mb-2">Kategori:</p>
                      <p className="font-medium">{currentDemo.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Trend Konular:</p>
                      <div className="space-y-2">
                        {currentDemo.result.trending.map((t: any, i: number) => (
                          <div key={i} className="p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                            <div>
                              <p className="font-bold text-lg">{t.topic}</p>
                              <p className="text-green-600 text-sm"> Hacim: {t.volume}</p>
                            </div>
                            <button className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm">
                              {t.action}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-600 mb-2">AI Tahmini:</p>
                      <p className="text-purple-800">{currentDemo.result.prediction}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <p className="font-medium text-amber-800">Demo Modunda</p>
            <p className="text-sm text-amber-700 mt-1">
              Bu çıktılar örnek verilerle oluşturulmuştur. OpenAI API key eklediğinizde gerçek AI üretimi yapılır.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
