# Active Context: MarketPulse - Pazarlama Ajansı Otomasyon Platformu

## Current State

**Project Status**: ✅ Tamamlandı - Demo Modunda Çalışıyor

MarketPulse - bir pazarlama ajansı için çok müşterili proje yönetimi, AI içerik üretimi ve reklam kampanyası yönetimi SaaS platformu.

## Recently Completed (Bu Oturum)

- [x] **Marka Değişikliği**: MarketPulse adı ve tasarımı oluşturuldu
- [x] **Dashboard (Gösterge)**: 8 menü öğesi ile ana kontrol paneli
- [x] **Müşteriler**: Ajans müşteri yönetimi
- [x] **Projeler**: Müşteri proje takibi
- [x] **İçerik**: AI içerik planlama (blog, sosyal medya, video)
- [x] **Reklamlar**: Kampanya yönetimi (Instagram, Facebook, Google, TikTok)
- [x] **AI Araçlar**: 6 demo aracı (İçerik, Görsel, Rakip, Reklam, Yanıt, Trend)
- [x] **Demo Simulation**: Yamaha Acoustic Guitar ürünü ile AI yetenekleri gösterimi
- [x] **Silinen Klasörler**: dolap, media, accounts, campaigns, ai-agents (artık kullanılmıyor)

## Proje Yapısı (Güncel)

| Sayfa | Dosya | Özellikler |
|-------|-------|------------|
| Gösterge | `/dashboard` | Ana dashboard, hızlı aksiyonlar, istatistikler |
| Müşteriler | `/dashboard/customers` | Ajans müşteri yönetimi |
| Projeler | `/dashboard/projects` | Müşteri proje takibi |
| İçerik | `/dashboard/content` | AI içerik planlama |
| Reklamlar | `/dashboard/ads` | Kampanya yönetimi |
| Analitik | `/dashboard/analytics` | Performans analizi |
| AI Araçlar | `/dashboard/ai-tools` | 6 AI aracı demo |
| Platformlar | `/dashboard/platforms` | Platform bağlantı yönetimi |
| Ayarlar | `/dashboard/settings` | Konfigürasyon |

## 6 AI Araçları (Demo Modu)

| Araç | İşlev | Durum |
|------|-------|-------|
| İçerik Üretici | Blog, sosyal, video script | ✅ Demo |
| Görsel Üretici | AI görsel önerileri | ✅ Demo |
| Rakip Analizi | Piyasa analizi | ✅ Demo |
| Reklam Oluştur | Facebook/Instagram ads | ✅ Demo |
| Yanıt Asistanı | Müşteri mesajları | ✅ Demo |
| Trend Takibi | Trend analizi | ✅ Demo |

## Teknik Özellikler

- **Framework**: Next.js 16 + React 19
- **Styling**: Tailwind CSS 4
- **State Management**: React hooks (useState)
- **Types**: TypeScript with strict mode

## Önemli Notlar

- **Demo Mode**: Platform şu anda demo modunda çalışıyor. Gerçek AI için OpenAI API key gerekli.
- **Platform Entegrasyonları**: Instagram, Trendyol, Hepsiburada API'leri bağlanabilir (API key ile)
- **İş Modeli**: Bu bir SaaS ajans aracı - kullanıcı kendi ürünlerini değil, müşterilerinin projelerini yönetiyor

## Session History

| Tarih | Değişiklik |
|-------|------------|
| 2026-03-25 | MarketPulse projesi başlatıldı |
| 2026-03-25 | Dashboard ve 8 menü oluşturuldu |
| 2026-03-25 | AI Tools 6 demo ile eklendi |
| 2026-03-25 | Müşteriler, Projeler, İçerik, Reklamlar sayfaları eklendi |
| 2026-03-25 | Analitik ve Platform sayfaları mevcut (e-ticaret modelinden ajans modeline) |

## Test Aşaması

Sistem demo modunda çalışıyor. Çalıştırmak için:
```bash
bun dev
```

## Gelecek Geliştirmeler

- [ ] Veritabanı entegrasyonu (Drizzle + SQLite)
- [ ] Gerçek OpenAI API entegrasyonu
- [ ] Gerçek sosyal medya API'leri
- [ ] Real-time notifications
- [ ] Raporlama sistemi (PDF export)
- [ ] Çoklu kullanıcı desteği
