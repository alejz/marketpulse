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

const demoOutputs: Record<string, any> = {
  content: {
    topic: 'Yeni Telefon Tanıtımı',
    platform: 'Instagram',
    result: {
      caption: `📱 Yeni teknoloji kapınızda!

Son model akıllı telefonlarımızı incelediniz mi? 

✨ 200MP Kamera
⚡ 5000mAh Pil  
🔥 En güçlü işlemci

Hemen keşfet, farkı yaşa! 👆

#Teknoloji #YeniÜrün #AkıllıTelefon #Gadget #TechNews`,
      hashtags: ['#Teknoloji', '#YeniÜrün', '#AkıllıTelefon', '#Gadget', '#TechNews']
    }
  },
  visual: {
    topic: 'Bahar İndirimi Kampanyası',
    result: {
      concept: 'Baharın Renkleri',
      style: 'Modern ve canlı',
      colors: 'Turkuaz, Pembe, Sarı',
      suggestions: [
        'Minimal çiçek arka planı',
        'Ürünü ortada tutan kompozisyon',
        'Pastel tonlarda metin'
      ]
    }
  },
  competitor: {
    competitor: '@rakipmarka',
    result: {
      followers: '45.2K',
      engagement: '4.8%',
      strategy: 'Günlük paylaşım, eğlenceli içerik, influencer işbirlikleri',
      weaknesses: ['Yavaş yanıt süresi', 'Kamera kalitesi düşük'],
      opportunities: ['Özel kampanya başlat', 'Canlı yayın yap']
    }
  },
  ad: {
    product: 'Online Kurs',
    platform: 'Google Ads',
    result: {
      headlines: [
        'Kendi işini kurmak ister misin?',
        'E-ticaret eğitimi',
        'Sıfırdan e-ticaret'
      ],
      descriptions: [
        'Uzman eğitmenlerden öğren',
        '120+ video, 50+ saat içerik',
        'Hemen başla, hayallerini gerçekleştir'
      ]
    }
  },
  reply: {
    message: 'Bu ürün ne zaman gelir?',
    result: {
      intent: 'Soru',
      response: 'Merhaba! Ürünümüz 2-3 iş günü içinde kargoda olacak. Siparişinizi onayladık, takip numaranızı atıyoruz. Başka sorularınız varsa yardımcı olmaktan mutluluk duyarız! 😊',
      tone: 'Samimi ve bilgilendirici'
    }
  },
  trend: {
    category: 'Teknoloji',
    result: {
      trending: [
        { topic: '#YapayZeka', volume: '+340%', action: 'İçerik üret' },
        { topic: '#AkıllıEv', volume: '+180%', action: 'Kampanya başlat' },
        { topic: '#Sürdürülebilir', volume: '+95%', action: 'Takip et' }
      ],
      prediction: 'Yapay zeka konulu içerikler önümüzdeki hafta %50+ etkileşim alacak'
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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">🤖 AI Araçları - Demo</h1>
        <p className="text-gray-500">Araçlara tıklayarak AI&apos;nın ne ürettiğini gör</p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-3 gap-4">
        {tools.map(tool => (
          <button
            key={tool.id}
            onClick={() => handleToolClick(tool.id)}
            className={`bg-white rounded-xl p-6 border-2 text-left transition-all hover:shadow-lg ${
              selectedTool === tool.id ? 'border-blue-500 shadow-lg' : 'border-gray-200'
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
      {selectedTool && (
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
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600 mb-2">Konu:</p>
                      <p className="font-medium">{demoOutputs.content.topic}</p>
                      <p className="text-sm text-blue-500 mt-1">Platform: {demoOutputs.content.platform}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-2">Üretilen İçerik:</p>
                      <p className="whitespace-pre-line text-gray-800">{demoOutputs.content.result.caption}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {demoOutputs.content.result.hashtags.map((tag: string) => (
                          <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Tool */}
                {selectedTool === 'visual' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-600 mb-2">Konu:</p>
                      <p className="font-medium">{demoOutputs.visual.topic}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Konsept</p>
                        <p className="font-medium">{demoOutputs.visual.result.concept}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Stil</p>
                        <p className="font-medium">{demoOutputs.visual.result.style}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Renkler</p>
                        <p className="font-medium">{demoOutputs.visual.result.colors}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-500 mb-2">Öneriler:</p>
                      <ul className="space-y-1">
                        {demoOutputs.visual.result.suggestions.map((s: string, i: number) => (
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
                      <p className="font-medium">{demoOutputs.competitor.competitor}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg text-center">
                        <p className="text-sm text-gray-500">Takipçi</p>
                        <p className="text-xl font-bold">{demoOutputs.competitor.result.followers}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg text-center">
                        <p className="text-sm text-gray-500">Etkileşim</p>
                        <p className="text-xl font-bold text-green-600">{demoOutputs.competitor.result.engagement}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg text-center">
                        <p className="text-sm text-gray-500">Strateji</p>
                        <p className="text-sm font-medium">Günlük paylaşım</p>
                      </div>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-600 mb-2">Zayıflıklar:</p>
                      <ul className="space-y-1">
                        {demoOutputs.competitor.result.weaknesses.map((w: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-red-700">
                            <span>⚠️</span> {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600 mb-2">Fırsatlar:</p>
                      <ul className="space-y-1">
                        {demoOutputs.competitor.result.opportunities.map((o: string, i: number) => (
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
                      <p className="font-medium">{demoOutputs.ad.product}</p>
                      <p className="text-sm text-green-500 mt-1">Platform: {demoOutputs.ad.platform}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Başlıklar:</p>
                      <div className="space-y-2">
                        {demoOutputs.ad.result.headlines.map((h: string, i: number) => (
                          <div key={i} className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                            <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">{i + 1}</span>
                            <span className="font-medium">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Açıklamalar:</p>
                      <div className="space-y-2">
                        {demoOutputs.ad.result.descriptions.map((d: string, i: number) => (
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
                      <p className="font-medium text-lg">{demoOutputs.reply.message}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-green-600">Tespit Edilen:</p>
                        <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">{demoOutputs.reply.result.intent}</span>
                      </div>
                      <p className="text-gray-500 text-sm mb-2">Üretilen Yanıt:</p>
                      <p className="text-gray-800 text-lg">{demoOutputs.reply.result.response}</p>
                      <p className="text-xs text-gray-500 mt-2">Ton: {demoOutputs.reply.result.tone}</p>
                    </div>
                  </div>
                )}

                {/* Trend Tool */}
                {selectedTool === 'trend' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600 mb-2">Kategori:</p>
                      <p className="font-medium">{demoOutputs.trend.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Trend Konular:</p>
                      <div className="space-y-2">
                        {demoOutputs.trend.result.trending.map((t: any, i: number) => (
                          <div key={i} className="p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                            <div>
                              <p className="font-bold text-lg">{t.topic}</p>
                              <p className="text-green-600 text-sm"> Hacim: {t.volume}</p>
                            </div>
                            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                              {t.action}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-600 mb-2">AI Tahmini:</p>
                      <p className="text-purple-800">{demoOutputs.trend.result.prediction}</p>
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
