# Product Context: AI Marketing Agent

## Why This Product Exists

Tam otonom bir dijital pazarlama ve sosyal medya yönetim sistemi. İşletmelerin sosyal medya hesaplarını manuel olarak yönetmek yerine, AI destekli bir agent'a emanet etmesi için.

## Problems It Solves

1. **Zaman Kaybı**: Sosyal medya yönetimi günlük 2-4 saat sürer
2. **Tutarsızlık**: Düzensiz paylaşım, takipçi kaybı
3. **İçerik Üretimi Zorluğu**: Sürekli yeni içerik fikri lazım
4. **Analiz Eksikliği**: Rakip ve trend takibi zor
5. **Ölçeklenememe**: Çoklu platform = çoklu iş yükü

## Hedef Kullanıcılar

- E-ticaret işletmeleri
- Teknoloji ürünü satanlar
- Dijital pazarlamacılar
- Sosyal medya ajansları
- Influencer'lar

## Core Features (Mevcut)

| Özellik | Açıklama |
|---------|----------|
| Dashboard | Tüm metriklerin tek yerden görünümü |
| Hesap Yönetimi | Instagram, Twitter, LinkedIn, Facebook, TikTok |
| İçerik Üretimi | AI destekli içerik oluşturma |
| Medya Yönetimi | Fotoğraf/video yükleme, AI görsel üretimi |
| Kampanyalar | Reklam kampanyası oluşturma ve takip |
| Reklamlar | Çoklu platform reklam yönetimi |
| Ayarlar | AI konfigürasyonu, otomasyon, API bağlantıları |

## Advanced Features (Planlanan)

### 1. Gerçek API Entegrasyonları

**Nereye Ulaşmak İstiyoruz:**
- Agent sadece UI değil, arkada gerçek işlemleri yapan bir sistem olacak
- OpenAI API → Canlı AI içerik üretimi
- Instagram Graph API → Gerçek platformda paylaşım
- Google Ads API → Kampanya oluşturma
- YouTube Data API → Video yönetimi

**API Entegrasyon Matrisi:**

| Platform | API | Yetenek | Öncelik |
|----------|-----|---------|---------|
| OpenAI | GPT-4, DALL-E | İçerik + görsel üretimi | Critical |
| Instagram | Graph API | Paylaşım, insight, yanıtla | Critical |
| Google Ads | Google Ads API | Kampanya oluşturma, yönetim | High |
| YouTube | Data API v3 | Video upload, analytics | High |
| Meta Ads | Marketing API | Facebook/Instagram reklam | High |
| Twitter | Twitter API v2 | Tweet, yanıt, analytics | Medium |
| LinkedIn | Marketing API | Organic + sponsored | Medium |

### 2. Veritabanı Yapısı ve Faydaları

**Veritabanı Olmazsa:**
- Her şey bellekte kalır, yeniden başlayınca silinir
- Tarihsel veri yok, karşılaştırma yapılamaz
- Agent geçmiş eylemleri hatırlamaz
- Raporlama yapılamaz

**Veritabanı ile Elde Edeceğimiz:**

| Tablo | İçerik | Fayda |
|-------|--------|-------|
| Users | Kullanıcı, settings, API keys | Çoklu kullanıcı desteği |
| SocialAccounts | Platform, token, status | Hesap yönetimi |
| Contents | İçerik, status, tarih | İçerik tarihçesi |
| Campaigns | Kampanya verileri | Performans takibi |
| Analytics | Günlük metrikler | Trend analizi |
| Competitors | Rakip verileri | Karşılaştırma |
| Trends | Trend keywordleri | Trend takibi |

### 3. Gelişmiş AI Özellikleri

#### 3.1 Rakip Analizi Sistemi

**Nasıl Çalışacak:**

```
VERİ TOPLAMA → AI ANALİZİ → SONUÇLAR
     ↓              ↓            ↓
Platform API   GPT-4'e      Öneriler
Web Scraping   gönder        Alertler
Public Data    analiz        Benchmark
```

**Toplanan Veriler:**
- Son 20 gönderi ve etkileşim oranları
- Takipçi sayısı ve büyüme oranı
- Posting sıklığı ve zamanları
- En başarılı içerikler
- Hashtag kullanımı
- Engagement rate

**AI'dan Gelen Çıktı:**
1. Rakipin içerik stratejisi ne?
2. Hangi konularda daha aktif?
3. Bizim avantajımız nedir?
4. 3 tane somut öneri

#### 3.2 Trend Takip Sistemi

**Veri Kaynakları:**
- Google Trends
- Twitter API (topic volume)
- YouTube Trending
- Instagram Explore
- Reddit
- News APIs

**Trend Algoritması:**

| Kriter | Ağırlık | Açıklama |
|--------|---------|----------|
| Volume | %30 | Arama hacmi |
| Velocity | %25 | Büyüme hızı |
| Sentiment | %20 | Duygu durumu |
| Recency | %15 | Güncellik |
| Relevance | %10 | Sektörle ilişki |

**Sonuç:**
- Trend score > 70 → Yüksek öncelikli, kullanıcıya alert
- Trend score > 50 → Izlemeye al
- Otomatik içerik önerisi

#### 3.3 Duygu Analizi ve Otomatik Yanıtlama

**Duygu Kategorileri:**
- ✅ Pozitif (beğeni, övgü)
- ❓ Soru
- ⚠️ Negatif (şikayet)
- 😤 Kızgın
- 📣 Öneri

**Yanıt Stratejileri:**

| Duygu | Intent | Yanıt Tipi |
|-------|--------|------------|
| Positive | Genel | Teşekkür + emoji |
| Positive | Recommendation | Teşekkür + paylaşım isteme |
| Neutral | Question | Bilgi verici |
| Negative | Complaint | Özür + çözüm |
| Negative | Feedback | Teşekkür + iyileştirme sözü |

### 4. YouTube Entegrasyonu

**API Yetenekleri:**
- Video Upload
- Video Metadata (başlık, açıklama, etiketler)
- Thumbnail ayarlama
- Playlist oluşturma
- Analytics (izlenme, beğeni, yorum)
- Yorum yanıtlama
- Canlı yayın

## User Flow

1. Kullanıcı hesaplarını bağlar (API keys)
2. Agent otomatik çalışmaya başlar
3. AI içerik üretir, platformlarda paylaşır
4. Rakip ve trend takibi yapar
5. Performans raporları sunar
6. Kullanıcı dashboard'dan takip eder

## Success Metrics

- Agent %80 otomatik çalışır
- İçerik üretimi 0 manuel iş
- Rakip analizi haftalık otomatik
- Trend alertleri anlık
- Raporlama haftalık

## Competition

Rakip ürünler: Hootsuite, Buffer, Sprout Social
Farkımız: Tam AI otomasyonu, rakip analizi, trend takibi