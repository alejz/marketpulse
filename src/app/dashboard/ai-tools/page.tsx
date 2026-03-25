'use client'

import { useState } from 'react'

export default function AIToolsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">🤖 AI Araçları</h1>
        <p className="text-gray-500">Yapay zeka destekli pazarlama araçları</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <button className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left">
          <div className="text-3xl mb-3">✍️</div>
          <h3 className="font-bold text-gray-900">İçerik Üretici</h3>
          <p className="text-sm text-gray-500 mt-1">Instagram, LinkedIn, Twitter için içerik üret</p>
          <span className="inline-block mt-3 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Aktif</span>
        </button>

        <button className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left">
          <div className="text-3xl mb-3">🎨</div>
          <h3 className="font-bold text-gray-900">Görsel Üretici</h3>
          <p className="text-sm text-gray-500 mt-1">Kampanya görselleri ve banner üret</p>
          <span className="inline-block mt-3 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Aktif</span>
        </button>

        <button className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left">
          <div className="text-3xl mb-3">📊</div>
          <h3 className="font-bold text-gray-900">Rakip Analizi</h3>
          <p className="text-sm text-gray-500 mt-1">Rakip hesapları analiz et</p>
          <span className="inline-block mt-3 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Aktif</span>
        </button>

        <button className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left">
          <div className="text-3xl mb-3">📢</div>
          <h3 className="font-bold text-gray-900">Reklam Metni</h3>
          <p className="text-sm text-gray-500 mt-1">Google, Meta için reklam metinleri üret</p>
          <span className="inline-block mt-3 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Aktif</span>
        </button>

        <button className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left">
          <div className="text-3xl mb-3">💬</div>
          <h3 className="font-bold text-gray-900">Müşteri Yanıtı</h3>
          <p className="text-sm text-gray-500 mt-1">Mesajlara otomatik yanıt üret</p>
          <span className="inline-block mt-3 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Aktif</span>
        </button>

        <button className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left">
          <div className="text-3xl mb-3">📈</div>
          <h3 className="font-bold text-gray-900">Trend Takibi</h3>
          <p className="text-sm text-gray-500 mt-1">Güncel trendleri takip et</p>
          <span className="inline-block mt-3 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Aktif</span>
        </button>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">OpenAI Entegrasyonu</h2>
            <p className="text-blue-100 mt-1">API key ayarlayarak tüm AI araçlarını aktifleştir</p>
          </div>
          <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50">
            Ayarlar
          </button>
        </div>
      </div>
    </div>
  )
}
