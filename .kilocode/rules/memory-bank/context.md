# Active Context: MarketPulse - Pazarlama Ajansı Otomasyon Platformu

## Current State

**Project Status**: ✅ Tamamlandı - Demo Modunda Çalışıyor + Hugging Face AI Entegrasyonu

MarketPulse - bir pazarlama ajansı için çok müşterili proje yönetimi, AI içerik üretimi ve reklam kampanyası yönetimi SaaS platformu.

## Recently Completed (Bu Oturum)

- [x] **Hugging Face AI Entegrasyonu** - Ücretsiz Llama 3.2 modeli eklendi
- [x] **API Route** - /api/ai endpoint oluşturuldu
- [x] **Settings Güncelleme** - Hugging Face token girişi eklendi
- [x] **AI Tools Güncelleme** - Gerçek API entegrasyonu (fallback ile demo)
- [x] **.env.example** - Token yapılandırma rehberi oluşturuldu
- [x] **Marka Değişikliği**: MarketPulse adı ve tasarımı oluşturuldu
- [x] **Dashboard (Gösterge)**: 8 menü öğesi ile ana kontrol paneli
- [x] **Müşteriler**: Ajans müşteri yönetimi
- [x] **Projeler**: Müşteri proje takibi
- [x] **İçerik**: AI içerik planlama
- [x] **Reklamlar**: Kampanya yönetimi
- [x] **AI Araçlar**: 6 demo aracı
- [x] **Silinen Klasörler**: dolap, media, accounts, campaigns, ai-agents

## Proje Yapısı (Güncel)

| Sayfa | Dosya | Özellikler |
|-------|-------|------------|
| Gösterge | `/dashboard` | Ana dashboard |
| Müşteriler | `/dashboard/customers` | Ajans müşteri yönetimi |
| Projeler | `/dashboard/projects` | Müşteri proje takibi |
| İçerik | `/dashboard/content` | AI içerik planlama |
| Reklamlar | `/dashboard/ads` | Kampanya yönetimi |
| Analitik | `/dashboard/analytics` | Performans analizi |
| AI Araçlar | `/dashboard/ai-tools` | 6 AI aracı + Hugging Face |
| Platformlar | `/dashboard/platforms` | Platform bağlantı yönetimi |
| Ayarlar | `/dashboard/settings` | API anahtarları |

## AI Entegrasyonu

**Kullanılan Model**: Hugging Face Llama 3.2 1B Instruct (Ücretsiz)

**Yapılandırma**:
1. `.env` dosyasına token ekle: `HUGGING_FACE_TOKEN=hf_xxx`
2. AI Tools sayfasında aracı seç
3. API çalışıyorsa gerçek üretim, yoksa demo fallback

**Değiştirme**: OpenAI'ye geçmek için `src/app/api/ai/route.ts` dosyasını güncelle

## Teknik Özellikler

- **Framework**: Next.js 16 + React 19
- **Styling**: Tailwind CSS 4
- **AI**: Hugging Face Inference API (Llama 3.2)

## Session History

| Tarih | Değişiklik |
|-------|------------|
| 2026-03-25 | MarketPulse projesi başlatıldı |
| 2026-03-25 | Hugging Face AI entegrasyonu eklendi |
| 2026-03-25 | AI Tools gerçek API ile çalışıyor |
