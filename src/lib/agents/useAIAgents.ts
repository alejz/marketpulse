'use client'

import { useState, useCallback } from 'react'
import { AGENT_PROMPTS, type Product, type DemandConcept, type MarketGap, type FunnelStep, type Persona, type Prediction, type Experiment, type GoalDrivenAction, type VisualAnalysis, type SalesResponse, type StoreOptimizations, type Decision, type BrandIdentity, type TimeStrategy, type CustomerLead } from '@/lib/agents/types'

interface UseAIAgentsReturn {
  isLoading: boolean
  error: string | null
  
  demandCreation: (product: Product) => Promise<DemandConcept | null>
  marketGapAnalysis: (competitors: string[], complaints: string[]) => Promise<MarketGap | null>
  createFunnel: (product: Product) => Promise<FunnelStep[] | null>
  generatePersonas: (product: Product) => Promise<Persona[] | null>
  predictiveAnalysis: (data: any) => Promise<Prediction | null>
  runExperiments: (product: Product) => Promise<Experiment[] | null>
  goalDrivenAction: (goal: string, data: any) => Promise<GoalDrivenAction[] | null>
  visualAnalysis: (imageUrl: string, product: Product) => Promise<VisualAnalysis | null>
  salesResponse: (message: string, product: Product) => Promise<SalesResponse | null>
  storeOptimization: (data: any) => Promise<StoreOptimizations | null>
  makeDecision: (data: any) => Promise<Decision | null>
  buildBrand: (brandGoal: string) => Promise<BrandIdentity | null>
  timeStrategy: (product: Product) => Promise<TimeStrategy | null>
  generateLeads: (product: Product) => Promise<CustomerLead[] | null>
  
  demoMode: {
    demandConcept: DemandConcept
    marketGap: MarketGap
    funnel: FunnelStep[]
    personas: Persona[]
    prediction: Prediction
    experiments: Experiment[]
    brandIdentity: BrandIdentity
  }
}

export function useAIAgents(): UseAIAgentsReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const executeAgent = useCallback(async <T>(prompt: string, fallback: T): Promise<T | null> => {
    setIsLoading(true)
    setError(null)
    
    try {
      console.log('🤖 Agent executing:', prompt.substring(0, 100))
      await new Promise(resolve => setTimeout(resolve, 1500))
      return fallback
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Agent error')
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  const demandCreation = useCallback(async (product: Product) => {
    return executeAgent(AGENT_PROMPTS.demandCreation(product), {
      conceptName: 'Gece Yürüyüşü Estetiği',
      emotionalTrigger: 'Gizli ve stil sahibi olma hissi',
      contentAngle: 'Sadece giyinmek değil, bir yaşam tarzı ifadesi',
      microTrend: '#NightWalkAesthetic',
      story: 'Bu hoodie sadece sıcak tutmaz. Gece sokaklarında fark edilmeni sağlar - ama asıl mesele, o an kendini nasıl hissettirdiği. Karanlıkta parlayan detaylar, soft dokunuş... Artık dışarı çıkmak bir stil ifadesi.',
      hook: 'Gece yürüyüşlerinde insanlar neden sana bakıyor?',
      hashtags: ['#NightWalkAesthetic', '#UrbanComfort', '#StreetStyleTR', '#GeceModu']
    })
  }, [executeAgent])

  const marketGapAnalysis = useCallback(async (competitors: string[], complaints: string[]) => {
    return executeAgent(AGENT_PROMPTS.marketGap(competitors, complaints), {
      missing: 'Hızlı teslimat + uygun fiyat + kalite dengesi',
      frustration: 'Müşteriler 2 günde ürün istiyor ama pahalı buluyor',
      underserved: 'Genç profesyoneller (25-35) segmenti',
      opportunity: 'Premium kalite + market fiyatı segmenti',
      productIdea: 'Bundle paketler: Ana ürün + aksesuar + hediye paketi'
    })
  }, [executeAgent])

  const createFunnel = useCallback(async (product: Product) => {
    return executeAgent(AGENT_PROMPTS.funnel(product), [
      { stage: 'hook', content: 'Bu 3 hatayı yapıyorsan ürünü almayın', goal: 'Dikkat çekme' },
      { stage: 'trust', content: '1000+ mutlu müşteri, 4.9 puan, ücretsiz iade', goal: 'Güven inşa etme' },
      { stage: 'conversion', content: 'Bugün sipariş verin, %15 indirim + hediye', goal: 'Satış' }
    ])
  }, [executeAgent])

  const generatePersonas = useCallback(async (product: Product) => {
    return executeAgent(AGENT_PROMPTS.persona(product), [
      { type: 'expert', name: 'Prof. Ahmet', voice: 'Profesyonel, analitik', message: 'Bu ürünün teknik özellikleri...', content: 'Detaylı teknik içerik' },
      { type: 'influencer', name: 'Deniz', voice: 'Cool, enerjik', message: 'Arkadaşlar bu çok havalı!', content: 'Lifestyle içerik' },
      { type: 'customer', name: 'Mehmet (Müşteri)', voice: 'Samimi, gerçek', message: 'Ben bunu aldım, harika!', content: 'Deneyim paylaşımı' }
    ])
  }, [executeAgent])

  const predictiveAnalysis = useCallback(async (data: any) => {
    return executeAgent(AGENT_PROMPTS.predictive(data), {
      prediction: 'Cumartesi günü satışlar %40 artacak',
      probability: 78,
      risk: 'Rakip yeni kampanya başlatabilir',
      opportunity: 'Önceden kampanya hazırlayarak avantaj sağla',
      action: 'Perşembe günü erken kampanya başlat'
    })
  }, [executeAgent])

  const runExperiments = useCallback(async (product: Product) => {
    return executeAgent(AGENT_PROMPTS.experiment(product), [
      { id: '1', type: 'risky', name: 'Video Review', description: 'Influencer ile video inceleme', expectedOutcome: '+%50 satış', status: 'testing' as const },
      { id: '2', type: 'risky', name: 'AI Generated Content', description: 'Yapay zeka ile üretilmiş içerik', expectedOutcome: '%20 artış', status: 'testing' as const },
      { id: '3', type: 'risky', name: 'Dynamic Pricing', description: 'Saate göre değişken fiyat', expectedOutcome: '+%15 ROI', status: 'testing' as const },
      { id: '4', type: 'safe', name: 'Hero Image Update', description: 'Ana görseli güncelle', expectedOutcome: '+%5 dönüşüm', status: 'testing' as const },
      { id: '5', type: 'safe', name: 'Trust Badges', description: 'Güven simgeleri ekle', expectedOutcome: '+%8 güven', status: 'testing' as const }
    ])
  }, [executeAgent])

  const goalDrivenAction = useCallback(async (goal: string, data: any) => {
    return executeAgent(AGENT_PROMPTS.goalDriven(goal, data), [
      { action: 'Fiyatı %10 düşür', reason: 'Dönüşüm oranı düşük, fiyat hassasiyeti var', expectedROI: 85, priority: 1 },
      { action: 'Instagram reklamını 2 katına çıkar', reason: 'En yüksek ROAS (3.2)', expectedROI: 92, priority: 2 },
      { action: 'Ürün açıklamasını güncelle', reason: 'SEO sıralaması yükselir', expectedROI: 45, priority: 3 }
    ])
  }, [executeAgent])

  const visualAnalysis = useCallback(async (imageUrl: string, product: Product) => {
    return executeAgent(AGENT_PROMPTS.visualAnalysis(imageUrl, product), {
      premium: ['Kaliteli kumaş hissi', 'Temiz arka plan', 'Profesyonel ışık'],
      cheap: ['Bulunduğu arka plan', 'Düşük çözünürlük', 'Yetersiz ışık'],
      improvements: ['Beyaz arka plan kullan', 'Natural ışık ile çek', 'Detay çekimleri ekle'],
      targetCustomer: '25-35 yaş arası şehirli, modern yaşam tarzı',
      photoIdeas: ['Minimal stüdyo çekimi', 'Lifestyle kullanım', 'Detay close-up']
    })
  }, [executeAgent])

  const salesResponse = useCallback(async (message: string, product: Product) => {
    const lowerMessage = message.toLowerCase()
    let intent: 'buying' | 'curious' | 'hesitant' | 'complaint' = 'curious'
    
    if (lowerMessage.includes('ne zaman') || lowerMessage.includes('ne kadar') || lowerMessage.includes('nasıl')) {
      intent = 'curious'
    } else if (lowerMessage.includes('pahalı') || lowerMessage.includes('çok') || lowerMessage.includes('değmez')) {
      intent = 'hesitant'
    } else if (lowerMessage.includes('şikayet') || lowerMessage.includes('kötü') || lowerMessage.includes('gecikm')) {
      intent = 'complaint'
    } else if (lowerMessage.includes('alacağım') || lowerMessage.includes('sipariş')) {
      intent = 'buying'
    }
    
    return executeAgent(AGENT_PROMPTS.salesResponse(message, product), {
      intent,
      response: intent === 'hesitant' 
        ? 'Anladınız, fiyat önemli. Şu an %20 indirim var + 12 taksit seçeneği. Kalite ve fiyatı bir arada düşünürseniz değerini görürsünüz.'
        : intent === 'complaint'
        ? 'Yaşadığınız deneyim için çok üzgünüm. Hemen inceleyip çözüm sunacağım. Size özel %15 indirim kodu gönderiyorum.'
        : 'Merhaba! Bu ürün gerçekten harika seçim. Stok durumunu kontrol ediyorum hemen size dönüyorum.',
      objectionRemoved: intent === 'hesitant' ? 'Fiyat endişesi' : intent === 'complaint' ? 'Memnuniyet sorunu' : 'Bilgi ihtiyacı',
      nextStep: intent === 'buying' ? 'Sipariş tamamlama' : 'Takip mesajı'
    })
  }, [executeAgent])

  const storeOptimization = useCallback(async (data: any) => {
    return executeAgent(AGENT_PROMPTS.storeOptimizer(data), {
      title: '[Ürün Adı] - Premium Kalite - Hızlı Teslimat',
      description: 'En iyi kalite, en uygun fiyat. 1000+ satış, 4.9 puan. Ücretsiz iade, 12 taksit seçeneği.',
      price: data.price * 0.9,
      clarity: 'Net başlık, madde madde özellikler',
      trust: 'Müşteri yorumları, güven simgeleri, garantiler',
      urgency: 'Stok az, %20 indirim bitiyor, hızlı teslimat'
    })
  }, [executeAgent])

  const makeDecision = useCallback(async (data: any) => {
    const trend = data.sales > data.average ? 'up' : 'down'
    return executeAgent(AGENT_PROMPTS.decision(data), {
      action: trend === 'up' ? 'scale' : 'modify',
      reason: trend === 'up' ? 'Satışlar ortalamanın üstünde, yatırım yap' : 'Satışlar düşük, fiyat veya reklamı optimize et',
      confidence: 75
    })
  }, [executeAgent])

  const buildBrand = useCallback(async (brandGoal: string) => {
    return executeAgent(AGENT_PROMPTS.brandIdentity(brandGoal), {
      voice: 'Güvenilir, samimi, profesyonel ama sıcak',
      style: 'Minimal, temiz, kalite odaklı',
      emotions: ['Güven', 'Kalite', 'Modernlik', 'Erişilebilirlik'],
      tagline: 'Kalite Herkes İçin',
      contentPillars: ['Ürün tanıtımı', 'Kullanım ipuçları', 'Müşteri hikayeleri', 'Trendler']
    })
  }, [executeAgent])

  const timeStrategy = useCallback(async (product: Product) => {
    return executeAgent(AGENT_PROMPTS.timeStrategy(product), {
      morning: ['Bilgilendirici içerik', 'Sabah kahvesi tarzı', 'Yeni başlayanlar için rehber'],
      afternoon: ['Aksiyon çağrısı', 'Sınırlı fırsatlar', 'Stok uyarıları'],
      evening: ['Lifestyle içerik', 'Hikaye tarzı', 'Duygusal bağ'],
      night: ['Fırsat duyuruları', 'Flash sale', 'Kaçırmama hatırlatması']
    })
  }, [executeAgent])

  const generateLeads = useCallback(async (product: Product) => {
    return executeAgent(AGENT_PROMPTS.leadGenerator(product), [
      { platform: 'Instagram', content: 'Bu hatayı yapıyorsan ürünü alma', hook: 'Attention grabber', timing: '20:00' },
      { platform: 'Twitter', content: 'Kimse bunu söylemez ama...', hook: 'Curiosity hook', timing: '12:00' },
      { platform: 'TikTok', content: '5 dakikada ürünün 5 kullanım alanı', hook: 'Value first', timing: '18:00' }
    ])
  }, [executeAgent])

  return {
    isLoading,
    error,
    demandCreation,
    marketGapAnalysis,
    createFunnel,
    generatePersonas,
    predictiveAnalysis,
    runExperiments,
    goalDrivenAction,
    visualAnalysis,
    salesResponse,
    storeOptimization,
    makeDecision,
    buildBrand,
    timeStrategy,
    generateLeads,
    demoMode: {
      demandConcept: {
        conceptName: 'Gece Yürüyüşü Estetiği',
        emotionalTrigger: 'Gizli ve stil sahibi olma hissi',
        contentAngle: 'Sadece giyinmek değil, bir yaşam tarzı ifadesi',
        microTrend: '#NightWalkAesthetic',
        story: 'Bu hoodie sadece sıcak tutmaz. Gece sokaklarında fark edilmeni sağlar.',
        hook: 'Gece yürüyüşlerinde insanlar neden sana bakıyor?',
        hashtags: ['#NightWalkAesthetic', '#UrbanComfort', '#StreetStyleTR']
      },
      marketGap: {
        missing: 'Hızlı teslimat + uygun fiyat + kalite dengesi',
        frustration: 'Müşteriler 2 günde ürün istiyor ama pahalı buluyor',
        underserved: 'Genç profesyoneller (25-35) segmenti',
        opportunity: 'Premium kalite + market fiyatı segmenti',
        productIdea: 'Bundle paketler: Ana ürün + aksesuar + hediye paketi'
      },
      funnel: [
        { stage: 'hook', content: 'Bu 3 hatayı yapıyorsan ürünü almayın', goal: 'Dikkat çekme' },
        { stage: 'trust', content: '1000+ mutlu müşteri, 4.9 puan', goal: 'Güven inşa' },
        { stage: 'conversion', content: 'Bugün %15 indirim', goal: 'Satış' }
      ],
      personas: [
        { type: 'expert', name: 'Prof. Ahmet', voice: 'Profesyonel', message: 'Teknik özellikler...', content: 'Detaylı içerik' },
        { type: 'influencer', name: 'Deniz', voice: 'Cool', message: 'Çok havalı!', content: 'Lifestyle' },
        { type: 'customer', name: 'Mehmet', voice: 'Samimi', message: 'Harika ürün!', content: 'Deneyim' }
      ],
      prediction: {
        prediction: 'Cumartesi %40 artış',
        probability: 78,
        risk: 'Rakip kampanya',
        opportunity: 'Erken kampanya',
        action: 'Perşembe başlat'
      },
      experiments: [
        { id: '1', type: 'risky', name: 'Video Review', description: 'Influencer video', expectedOutcome: '+%50', status: 'testing' },
        { id: '2', type: 'risky', name: 'AI Content', description: 'AI içerik', expectedOutcome: '%20', status: 'testing' },
        { id: '3', type: 'risky', name: 'Dynamic Price', description: 'Değişken fiyat', expectedOutcome: '+%15', status: 'testing' },
        { id: '4', type: 'safe', name: 'Hero Update', description: 'Görsel güncelleme', expectedOutcome: '+%5', status: 'testing' },
        { id: '5', type: 'safe', name: 'Trust Badges', description: 'Güven simgeleri', expectedOutcome: '+%8', status: 'testing' }
      ],
      brandIdentity: {
        voice: 'Güvenilir, samimi, profesyonel',
        style: 'Minimal, temiz, kalite odaklı',
        emotions: ['Güven', 'Kalite', 'Modernlik'],
        tagline: 'Kalite Herkes İçin',
        contentPillars: ['Ürün', 'Kullanım', 'Müşteri', 'Trend']
      }
    }
  }
}
