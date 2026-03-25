'use client'

import { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')
  
  const tabs = [
    { id: 'general', label: 'Genel', icon: '⚙️' },
    { id: 'ai', label: 'AI Ayarları', icon: '🤖' },
    { id: 'automation', label: 'Otomasyon', icon: '🔄' },
    { id: 'api', label: 'API Bağlantıları', icon: '🔗' },
    { id: 'notifications', label: 'Bildirimler', icon: '🔔' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Ayarlar</h1>
        <p className="text-gray-500">Agentınızı özelleştirin</p>
      </div>

      <div className="flex gap-6">
        <div className="w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex-1">
          {activeTab === 'general' && (
            <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Genel Ayarlar</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Agent Adı</label>
                <input type="text" defaultValue="TechStore Marketing Agent" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Marka İsmi</label>
                <input type="text" defaultValue="TechStore" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Varsayılan Dil</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option>Türkçe</option>
                  <option>English</option>
                  <option>Español</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zaman Dilimi</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option>UTC+3 (İstanbul)</option>
                  <option>UTC+0 (London)</option>
                  <option>UTC-5 (New York)</option>
                </select>
              </div>

              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                Kaydet
              </button>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">AI Yapılandırması</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">İçerik Üretim Modeli</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                    <option>GPT-4 Turbo</option>
                    <option>GPT-3.5 Turbo</option>
                    <option>Claude 3 Opus</option>
                    <option>Claude 3 Sonnet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Görsel Üretim Modeli</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                    <option>DALL-E 3</option>
                    <option>Midjourney</option>
                    <option>Stable Diffusion</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">İçerik Tonu</label>
                <div className="flex gap-2 flex-wrap">
                  {['Profesyonel', 'Eğlenceli', 'Samimi', 'Ciddi', 'Mizahi', 'Eğitici'].map((tone) => (
                    <button key={tone} className="px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-500 text-sm">
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Otomatik Hashtag</label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">İçeriklerde otomatik hashtag kullan</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Maksimum Günlük Paylaşım</label>
                <div className="flex items-center gap-4">
                  <input type="range" min="1" max="20" defaultValue="5" className="flex-1" />
                  <span className="text-sm font-medium w-20">5 gönderi/gün</span>
                </div>
              </div>

              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                Kaydet
              </button>
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Otomasyon Ayarları</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Otonom İçerik Üretimi</p>
                    <p className="text-sm text-gray-500">AI otomatik içerik üretir ve paylaşır</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Otomatik Yanıtla</p>
                    <p className="text-sm text-gray-500">Yorumlara ve mesajlara otomatik yanıt ver</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Trend Takibi</p>
                    <p className="text-sm text-gray-500">Trend konuları otomatik takip et</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Raporlama</p>
                    <p className="text-sm text-gray-500">Haftalık performans raporu gönder</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Paylaım Zamanlaması</label>
                <div className="grid grid-cols-7 gap-2">
                  {['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'].map((day, i) => (
                    <button key={day} className={`py-2 rounded-lg text-sm font-medium ${i < 5 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>
                      {day}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">Hafta içi günlerde otomatik paylaşım aktif</p>
              </div>

              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                Kaydet
              </button>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">API Bağlantıları</h2>
              
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔑</span>
                      <div>
                        <p className="font-medium text-gray-900">OpenAI API</p>
                        <p className="text-sm text-gray-500">İçerik üretimi için</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Bağlı</span>
                  </div>
                  <input type="password" defaultValue="sk-........................" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" readOnly />
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📸</span>
                      <div>
                        <p className="font-medium text-gray-900">Instagram Graph API</p>
                        <p className="text-sm text-gray-500">Instagram hesabı için</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Bağlı</span>
                  </div>
                  <input type="password" defaultValue="IGQV........................" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" readOnly />
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔍</span>
                      <div>
                        <p className="font-medium text-gray-900">Google Ads API</p>
                        <p className="text-sm text-gray-500">Reklam yönetimi için</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Bağlanmadı</span>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    Bağlantı Ekle
                  </button>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🎨</span>
                      <div>
                        <p className="font-medium text-gray-900">DALL-E API</p>
                        <p className="text-sm text-gray-500">Görsel üretimi için</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Bağlı</span>
                  </div>
                  <input type="password" defaultValue="sk-........................" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" readOnly />
                </div>
              </div>

              <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                + Yeni API Ekle
              </button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Bildirim Ayarları</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">E-posta Bildirimleri</p>
                    <p className="text-sm text-gray-500">Önemli durumlarda e-posta gönder</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Haftalık Rapor</p>
                    <p className="text-sm text-gray-500">Her pazartesi özet gönder</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Hata Bildirimleri</p>
                    <p className="text-sm text-gray-500">Sistem hatalarında uyar</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Kampanya Tamamlandı</p>
                    <p className="text-sm text-gray-500">Kampanya sonuçlarını bildir</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bildirim E-postası</label>
                <input type="email" placeholder="email@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>

              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                Kaydet
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
