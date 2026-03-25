'use client'

import { useState } from 'react'
import { useAIAgents } from '@/lib/agents/useAIAgents'
import Link from 'next/link'

const allAgents = [
  { id: 'demand', name: 'Demand Creation', desc: 'Ürüne hikâye yarat, talep oluştur', icon: '💡', color: 'from-amber-500 to-orange-600', category: 'Marketing' },
  { id: 'gap', name: 'Market Gap Detector', desc: 'Piyasadaki eksiklikleri bul', icon: '🔍', color: 'from-blue-500 to-cyan-600', category: 'Marketing' },
  { id: 'funnel', name: 'Funnel Hacking', desc: 'Hook → Güven → Satış', icon: '🎯', color: 'from-purple-500 to-pink-600', category: 'Marketing' },
  { id: 'persona', name: 'Multi-Persona', desc: 'Farklı kişiliklerle satış', icon: '🎭', color: 'from-indigo-500 to-purple-600', category: 'Marketing' },
  { id: 'predictive', name: 'Predictive Engine', desc: 'Geleceği tahmin et', icon: '🔮', color: 'from-teal-500 to-green-600', category: 'Marketing' },
  { id: 'experiment', name: 'Experiment Lab', desc: 'A/B test otomasyonu', icon: '🧪', color: 'from-red-500 to-pink-600', category: 'Marketing' },
  
  { id: 'goal', name: 'Goal-Driven Agent', desc: 'Kâr hedefli otonom karar', icon: '🎯', color: 'from-green-500 to-emerald-600', category: 'E-commerce' },
  { id: 'visual', name: 'Visual Intelligence', desc: 'Fotoğraf kalite analizi', icon: '👁️', color: 'from-pink-500 to-rose-600', category: 'E-commerce' },
  { id: 'inbound', name: 'Inbound Engine', desc: 'Müşteri çekme', icon: '🧲', color: 'from-cyan-500 to-blue-600', category: 'E-commerce' },
  { id: 'sales', name: 'Sales Brain', desc: 'Müşteriyle konuşma', icon: '💬', color: 'from-orange-500 to-amber-600', category: 'E-commerce' },
  { id: 'optimizer', name: 'Store Optimizer', desc: 'Listing optimizasyonu', icon: '⚙️', color: 'from-slate-500 to-gray-600', category: 'E-commerce' },
  { id: 'decision', name: 'Decision Engine', desc: 'Otomatik karar', icon: '🧭', color: 'from-violet-500 to-purple-600', category: 'E-commerce' },
  
  { id: 'branding', name: 'Self-Branding', desc: 'Marka kimliği oluştur', icon: '✨', color: 'from-yellow-500 to-amber-600', category: 'Intelligence' },
  { id: 'time', name: 'Time Intelligence', desc: 'Zaman bazlı strateji', icon: '⏱️', color: 'from-sky-500 to-blue-600', category: 'Intelligence' },
]

const categories = ['Tümü', 'Marketing', 'E-commerce', 'Intelligence']

export default function AIAgentsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)
  const agents = useAIAgents()

  const filteredAgents = selectedCategory === 'Tümü' 
    ? allAgents 
    : allAgents.filter(a => a.category === selectedCategory)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">🧠 AI Agents</h1>
        <p className="text-gray-500">14 otonom agent ile pazarlamanızı devrime hazır</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredAgents.map(agent => (
          <button
            key={agent.id}
            onClick={() => setSelectedAgent(agent.id)}
            className={`bg-gradient-to-br ${agent.color} rounded-xl p-5 text-white text-left hover:opacity-90 transition-opacity`}
          >
            <div className="text-3xl mb-2">{agent.icon}</div>
            <h3 className="font-bold text-lg">{agent.name}</h3>
            <p className="text-white/80 text-sm mt-1">{agent.desc}</p>
            <span className="inline-block mt-3 px-2 py-1 bg-white/20 rounded text-xs">{agent.category}</span>
          </button>
        ))}
      </div>

      {selectedAgent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {allAgents.find(a => a.id === selectedAgent)?.name}
              </h2>
              <button
                onClick={() => setSelectedAgent(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ✕
              </button>
            </div>

            {selectedAgent === 'demand' && (
              <div className="space-y-6">
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="font-bold text-amber-800 mb-4">💡 Demand Creation Engine</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ürün Adı</label>
                      <input type="text" placeholder="Örn: Premium Hoodie" className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                      <select className="w-full px-3 py-2 border rounded-lg">
                        <option>Giyim</option>
                        <option>Elektronik</option>
                        <option>Ev & Yaşam</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ürün Açıklaması</label>
                      <textarea placeholder="Ürününüzü tanıtın..." className="w-full px-3 py-2 border rounded-lg h-24" />
                    </div>
                  </div>
                  <button className="mt-4 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-medium">
                    🚀 Talep Yarat
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4">Örnek Çıktı:</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="text-xs text-gray-500">Concept Name</span>
                      <p className="font-bold text-amber-700">Gece Yürüyüşü Estetiği</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="text-xs text-gray-500">Emotional Trigger</span>
                      <p className="text-gray-800">Gizli ve stil sahibi olma hissi</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="text-xs text-gray-500">Hook</span>
                      <p className="text-gray-800">Gece yürüyüşlerinde insanlar neden sana bakıyor?</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="text-xs text-gray-500">Story</span>
                      <p className="text-gray-800">Bu hoodie sadece sıcak tutmaz. Gece sokaklarında fark edilmeni sağlar...</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="text-xs text-gray-500">Hashtags</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {['#NightWalkAesthetic', '#UrbanComfort', '#StreetStyleTR'].map(tag => (
                          <span key={tag} className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedAgent === 'sales' && (
              <div className="space-y-6">
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="font-bold text-orange-800 mb-4">💬 Sales Brain</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Müşteri Mesajı</label>
                      <textarea placeholder="Müşterinin gönderdiği mesaj..." className="w-full px-3 py-2 border rounded-lg h-24" />
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg font-medium">
                      📝 Yanıt Üret
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4">Örnek Senaryolar:</h4>
                  <div className="space-y-3">
                    {[
                      { intent: '🎯 Satın almak istiyor', msg: 'Bu ürünü almak istiyorum', response: 'Harika seçim! Stok durumunu kontrol ediyorum...' },
                      { intent: '❓ Meraklı', msg: 'Ne zaman teslim edilir?', response: 'Siparişiniz 2-3 iş günü içinde kargoda olacak.' },
                      { intent: '🤔 Tereddüt', msg: 'Biraz pahalı değil mi?', response: 'Anlıyorum. Şu an %20 indirim var + 12 taksit seçeneği.' },
                      { intent: '😤 Şikayet', msg: 'Kargo çok gecikti!', response: 'Yaşadığınız için çok üzgünüm. Hemen inceleyip çözüm sunacağım.' },
                    ].map((scenario, i) => (
                      <div key={i} className="p-4 border rounded-lg">
                        <span className="text-xs font-medium text-gray-500">{scenario.intent}</span>
                        <p className="text-sm text-gray-600 mt-1">Müşteri: {scenario.msg}</p>
                        <p className="text-sm text-orange-700 mt-2 font-medium">→ {scenario.response}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedAgent === 'goal' && (
              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-green-800 mb-4">🎯 Goal-Driven Agent</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Hedef (Günlük Kâr)</label>
                      <input type="text" placeholder="Örn: Günlük 1000 TL kâr" className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium">
                      ⚡ Karar Ver
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4">Örnek Öneriler:</h4>
                  <div className="space-y-3">
                    {[
                      { action: 'Fiyatı %10 düşür', reason: 'Dönüşüm oranı düşük', roi: 85 },
                      { action: 'Reklam bütçesini artır', reason: 'ROAS yüksek (3.2)', roi: 92 },
                      { action: 'Açıklamayı güncelle', reason: 'SEO sıralaması yükselir', roi: 45 },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <div>
                          <p className="font-bold text-green-800">{item.action}</p>
                          <p className="text-sm text-green-600">{item.reason}</p>
                        </div>
                        <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold">{item.roi}% ROI</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedAgent === 'experiment' && (
              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="font-bold text-red-800 mb-4">🧪 Experiment Lab</h3>
                  <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-medium">
                    🚀 Deney Başlat
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-4">🔴 Riskli Deneyler</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Video Review', desc: 'Influencer ile video', expected: '+%50' },
                        { name: 'AI Content', desc: 'Yapay zeka içerik', expected: '+%20' },
                        { name: 'Dynamic Pricing', desc: 'Saate göre fiyat', expected: '+%15' },
                      ].map((exp, i) => (
                        <div key={i} className="p-3 bg-red-50 rounded-lg border border-red-100">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-red-800">{exp.name}</p>
                              <p className="text-xs text-red-600">{exp.desc}</p>
                            </div>
                            <span className="px-2 py-1 bg-red-600 text-white rounded text-xs">{exp.expected}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-4">🟢 Güvenli Optimizasyonlar</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Hero Image', desc: 'Ana görsel güncelleme', expected: '+%5' },
                        { name: 'Trust Badges', desc: 'Güven simgeleri', expected: '+%8' },
                      ].map((exp, i) => (
                        <div key={i} className="p-3 bg-green-50 rounded-lg border border-green-100">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-green-800">{exp.name}</p>
                              <p className="text-xs text-green-600">{exp.desc}</p>
                            </div>
                            <span className="px-2 py-1 bg-green-600 text-white rounded text-xs">{exp.expected}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedAgent === 'predictive' && (
              <div className="space-y-6">
                <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                  <h3 className="font-bold text-teal-800 mb-4">🔮 Predictive Engine</h3>
                  <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-lg font-medium">
                    🔮 Tahmin Et
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4">Örnek Tahmin:</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-teal-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-teal-800 font-medium">Tahmin</span>
                        <span className="px-2 py-1 bg-teal-600 text-white rounded text-xs">%78 doğruluk</span>
                      </div>
                      <p className="text-gray-800 mt-2">Cumartesi günü satışlar %40 artacak</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <span className="text-red-800 font-medium">Risk</span>
                      <p className="text-gray-600 mt-1">Rakip yeni kampanya başlatabilir</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <span className="text-green-800 font-medium">Fırsat</span>
                      <p className="text-gray-600 mt-1">Önceden kampanya hazırlayarak avantaj sağla</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <span className="text-blue-800 font-medium">Önerilen Eylem</span>
                      <p className="text-gray-800 mt-1">Perşembe günü erken kampanya başlat</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedAgent === 'branding' && (
              <div className="space-y-6">
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="font-bold text-yellow-800 mb-4">✨ Self-Branding Agent</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Marka Hedefi</label>
                      <input type="text" placeholder="Örn: Premium teknoloji markası" className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg font-medium">
                      🏗️ Marka Oluştur
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Brand Voice</h4>
                    <p className="text-gray-600">Güvenilir, samimi, profesyonel ama sıcak</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Content Style</h4>
                    <p className="text-gray-600">Minimal, temiz, kalite odaklı</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Tagline</h4>
                    <p className="text-xl font-bold text-yellow-600">Kalite Herkes İçin</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Content Pillars</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Ürün', 'Kullanım', 'Müşteri', 'Trend'].map(p => (
                        <span key={p} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!['demand', 'sales', 'goal', 'experiment', 'predictive', 'branding'].includes(selectedAgent || '') && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-4xl mb-4">🚧</p>
                <p>Bu agent yakında aktif olacak</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
