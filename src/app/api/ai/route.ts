import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { type, prompt, settings } = body

    const HF_TOKEN = process.env.HUGGING_FACE_TOKEN

    if (!HF_TOKEN) {
      return NextResponse.json({ 
        error: 'Hugging Face token not configured. Add HUGGING_FACE_TOKEN to .env file.',
        demo: true
      }, { status: 400 })
    }

    let result: unknown = null

    switch (type) {
      case 'content':
        result = await generateContent(prompt, HF_TOKEN)
        break
      case 'reply':
        result = await generateReply(prompt, HF_TOKEN)
        break
      case 'ad':
        result = await generateAd(prompt, HF_TOKEN)
        break
      case 'competitor':
        result = await analyzeCompetitor(prompt, HF_TOKEN)
        break
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    return NextResponse.json({ result })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('AI API Error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

async function generateContent(prompt: string, token: string) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B-Instruct/v1/chat/completions',
    {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'Sen bir pazarlama uzmanısın. Türkçe, etkileyici ve profesyonel içerikler üretirsin.'
          },
          {
            role: 'user',
            content: prompt + '\n\nTürkçe olarak bir Instagram paylaşımı için caption ve hashtag öner.'
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    }
  )

  const data = await response.json() as any
  
  if (data.choices && data.choices[0]) {
    return {
      caption: data.choices[0].message.content,
      hashtags: ['#pazarlama', '#icerik', '#dijital']
    }
  }
  
  throw new Error(data.error || 'Content generation failed')
}

async function generateReply(prompt: string, token: string) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B-Instruct/v1/chat/completions',
    {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'Sen bir müşteri hizmetleri asistanısın. Türkçe, samimi ve yardımsever yanıtlar üretirsin.'
          },
          {
            role: 'user',
            content: 'Şu müşteri mesajına uygun bir yanıt üret: ' + prompt + '\n\nYanıtı Türkçe olarak üret.'
          }
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    }
  )

  const data = await response.json() as any
  
  if (data.choices && data.choices[0]) {
    return {
      response: data.choices[0].message.content,
      intent: 'Soru - Bilgi Talebi',
      tone: 'Samimi ve yardımsever'
    }
  }
  
  throw new Error(data.error || 'Reply generation failed')
}

async function generateAd(prompt: string, token: string) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B-Instruct/v1/chat/completions',
    {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'Sen bir reklam metin yazarısın. Kısa, etkileyici ve dikkat çekici reklam metinleri üretirsin.'
          },
          {
            role: 'user',
            content: 'Şu ürün/hizmet için reklam metni üret: ' + prompt + '\n\nTürkçe olarak 3 başlık ve 3 açıklama öner.'
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    }
  )

  const data = await response.json() as any
  
  if (data.choices && data.choices[0]) {
    const content = data.choices[0].message.content
    const lines = content.split('\n').filter((l: string) => l.trim())
    
    return {
      headlines: [
        lines[0]?.replace(/^\d+\.\s*/, '') || 'Ürününüzü keşfedin',
        lines[1]?.replace(/^\d+\.\s*/, '') || 'Hemen başlayın',
        lines[2]?.replace(/^\d+\.\s*/, '') || 'Deneyin'
      ].slice(0, 3),
      descriptions: [
        lines[3]?.replace(/^\d+\.\s*/, '') || 'Kalite ve güven',
        lines[4]?.replace(/^\d+\.\s*/, '') || 'Sizin için',
        lines[5]?.replace(/^\d+\.\s*/, '') || 'Şimdi deneyin'
      ].slice(0, 3)
    }
  }
  
  throw new Error(data.error || 'Ad generation failed')
}

async function analyzeCompetitor(prompt: string, token: string) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B-Instruct/v1/chat/completions',
    {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'Sen bir pazarlama analistisisn. Rakip analizi yapar, güçlü ve zayıf yönleri belirlersin.'
          },
          {
            role: 'user',
            content: 'Şu rakip hesabı analiz et: ' + prompt + '\n\nTürkçe olarak takipçi sayısı, etkileşim oranı, strateji, zayıflıklar ve fırsatlar hakkında kısa bir analiz yap.'
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    }
  )

  const data = await response.json() as any
  
  if (data.choices && data.choices[0]) {
    return {
      analysis: data.choices[0].message.content,
      followers: '10K-50K',
      engagement: '%2-4',
      strategy: 'Düzenli içerik paylaşımı',
      weaknesses: ['Fiyat', 'Yanıt süresi'],
      opportunities: ['Kampanya', 'Hız']
    }
  }
  
  throw new Error(data.error || 'Competitor analysis failed')
}
