'use client'

import { useState } from 'react'

interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  sales: number
  revenue: number
  status: 'active' | 'passive' | 'out'
  image: string
  demandScore: number
}

const sampleProducts: Product[] = [
  { id: '1', name: 'Premium Hoodie', category: 'Giyim', price: 899, stock: 45, sales: 128, revenue: 115072, status: 'active', image: '👕', demandScore: 92 },
  { id: '2', name: 'Wireless Earbuds', category: 'Elektronik', price: 1499, stock: 23, sales: 89, revenue: 133411, status: 'active', image: '🎧', demandScore: 88 },
  { id: '3', name: 'Smart Watch', category: 'Elektronik', price: 2499, stock: 12, sales: 56, revenue: 139944, status: 'active', image: '⌚', demandScore: 95 },
  { id: '4', name: 'Running Shoes', category: 'Spor', price: 1299, stock: 67, sales: 234, revenue: 303966, status: 'active', image: '👟', demandScore: 78 },
  { id: '5', name: 'Yoga Mat', category: 'Spor', price: 299, stock: 0, sales: 89, revenue: 26611, status: 'out', image: '🧘', demandScore: 65 },
]

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(sampleProducts)
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const totalRevenue = products.reduce((sum, p) => sum + p.revenue, 0)
  const totalSales = products.reduce((sum, p) => sum + p.sales, 0)
  const avgDemand = Math.round(products.reduce((sum, p) => sum + p.demandScore, 0) / products.length)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">📦 Ürünler</h1>
          <p className="text-gray-500">Ürün portföyünüz ve talep analizi</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
        >
          + Ürün Ekle
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Ürün</p>
          <p className="text-2xl font-bold text-gray-900">{products.length}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Satış</p>
          <p className="text-2xl font-bold text-gray-900">{totalSales}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Toplam Gelir</p>
          <p className="text-2xl font-bold text-green-600">₺{totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-500">Ort. Talep Skoru</p>
          <p className="text-2xl font-bold text-amber-600">{avgDemand}%</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Ürün</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Kategori</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Fiyat</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Stok</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Satış</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Gelir</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Talep</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Durum</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr 
                key={product.id} 
                className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{product.image}</span>
                    <span className="font-medium text-gray-900">{product.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{product.category}</td>
                <td className="px-4 py-3 text-sm font-medium">₺{product.price}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={product.stock === 0 ? 'text-red-600' : product.stock < 20 ? 'text-amber-600' : 'text-green-600'}>
                    {product.stock} adet
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{product.sales}</td>
                <td className="px-4 py-3 text-sm font-medium text-green-600">₺{product.revenue.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          product.demandScore >= 80 ? 'bg-green-500' : 
                          product.demandScore >= 60 ? 'bg-amber-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${product.demandScore}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium">{product.demandScore}%</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    product.status === 'active' ? 'bg-green-100 text-green-700' :
                    product.status === 'out' ? 'bg-red-100 text-red-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {product.status === 'active' ? 'Aktif' : product.status === 'out' ? 'Tükendi' : 'Pasif'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{selectedProduct.image}</span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedProduct.name}</h2>
                  <p className="text-gray-500">{selectedProduct.category}</p>
                </div>
              </div>
              <button onClick={() => setSelectedProduct(null)} className="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-sm text-gray-500">Fiyat</p>
                <p className="text-xl font-bold">₺{selectedProduct.price}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-sm text-gray-500">Stok</p>
                <p className="text-xl font-bold">{selectedProduct.stock}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-sm text-gray-500">Talep</p>
                <p className="text-xl font-bold text-amber-600">{selectedProduct.demandScore}%</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                🧠 AI Talep Analizi Yap
              </button>
              <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                📝 İçerik Üret
              </button>
              <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                🎯 Kampanya Oluştur
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
