export interface Product {
  id: string
  name: string
  description: string
  category: string
  price: number
  images: string[]
  tags: string[]
}

export interface DemandConcept {
  conceptName: string
  emotionalTrigger: string
  contentAngle: string
  microTrend: string
  story: string
  hook: string
  hashtags: string[]
}

export interface MarketGap {
  missing: string
  frustration: string
  underserved: string
  opportunity: string
  productIdea: string
}

export interface FunnelStep {
  stage: string
  content: string
  goal: string
}

export interface Persona {
  type: string
  name: string
  voice: string
  message: string
  content: string
}

export interface Prediction {
  prediction: string
  probability: number
  risk: string
  opportunity: string
  action: string
}

export interface Experiment {
  id: string
  type: string
  name: string
  description: string
  expectedOutcome: string
  status: string
}

export interface GoalDrivenAction {
  action: string
  reason: string
  expectedROI: number
  priority: number
}

export interface VisualAnalysis {
  premium: string[]
  cheap: string[]
  improvements: string[]
  targetCustomer: string
  photoIdeas: string[]
}

export interface SalesResponse {
  intent: 'buying' | 'curious' | 'hesitant' | 'complaint'
  response: string
  objectionRemoved: string
  nextStep: string
}

export interface StoreOptimizations {
  title: string
  description: string
  price: number
  clarity: string
  trust: string
  urgency: string
}

export interface Decision {
  action: string
  reason: string
  confidence: number
}

export interface BrandIdentity {
  voice: string
  style: string
  emotions: string[]
  tagline: string
  contentPillars: string[]
}

export interface TimeStrategy {
  morning: string[]
  afternoon: string[]
  evening: string[]
  night: string[]
}

export interface CustomerLead {
  platform: string
  content: string
  hook: string
  timing: string
}

export const AGENT_PROMPTS = {
  demandCreation: (product: Product) => `
You are a demand creation strategist.

Product: ${product.name}
Description: ${product.description}
Category: ${product.category}
Current Tags: ${product.tags.join(', ')}

Your task:
1. Create a new desire around this product
2. Invent a trend or concept that makes people feel they NEED this
3. Think creatively about emotional triggers

Output as JSON:
{
  "conceptName": "creative name for the trend",
  "emotionalTrigger": "what feeling does this create",
  "contentAngle": "how should we talk about this",
  "microTrend": "short trend name",
  "story": "the narrative behind the product",
  "hook": "attention-grabbing opening",
  "hashtags": ["relevant hashtags"]
}
`,

  marketGap: (competitors: string[], complaints: string[]) => `
You are a market gap analyst.

Competitors: ${competitors.join(', ')}
Customer Complaints: ${complaints.join(', ')}

Analyze and find:
1. What people are missing in the market
2. What frustrates customers
3. What is underserved

Output as JSON:
{
  "missing": "what's missing",
  "frustration": "customer pain point",
  "underserved": "underserved segment",
  "opportunity": "market opportunity",
  "productIdea": "new product suggestion"
}
`,

  funnel: (product: Product) => `
You are a funnel strategist.

Product: ${product.name}

Create a 3-step funnel:

Step 1 - FREE VALUE (Hook):
Create content that provides value for free and captures attention

Step 2 - TRUST BUILDING:
Create content that builds trust without asking for sale

Step 3 - CONVERSION:
Create the sales approach

Output as JSON:
{
  "steps": [
    {"stage": "hook", "content": "...", "goal": "capture attention"},
    {"stage": "trust", "content": "...", "goal": "build trust"},
    {"stage": "conversion", "content": "...", "goal": "make sale"}
  ]
}
`,

  persona: (product: Product) => `
You are a multi-persona marketing system.

Product: ${product.name}

Create 3 different marketing messages for 3 personas:

1. EXPERT: Professional, informative
2. TRENDY INFLUENCER: Cool, lifestyle-focused
3. SATISFIED CUSTOMER: Authentic experience

Output as JSON:
{
  "personas": [
    {"type": "expert", "name": "...", "voice": "...", "message": "...", "content": "..."},
    {"type": "influencer", "name": "...", "voice": "...", "message": "...", "content": "..."},
    {"type": "customer", "name": "...", "voice": "...", "message": "...", "content": "..."}
  ]
}
`,

  predictive: (currentData: any) => `
You are a predictive AI.

Current Performance Data: ${JSON.stringify(currentData)}

Predict:
1. What will likely happen in next 2-7 days
2. What are the risks
3. What are the opportunities

Then suggest preemptive actions.

Output as JSON:
{
  "prediction": "what will happen",
  "probability": 0-100,
  "risk": "risk description",
  "opportunity": "opportunity description",
  "action": "suggested action"
}
`,

  experiment: (product: Product) => `
You are an experimentation engine.

Product: ${product.name}

Generate:
- 3 risky experiments (new approaches)
- 2 safe optimizations (improvements to what works)

Output as JSON:
{
  "experiments": [
    {"id": "1", "type": "risky", "name": "...", "description": "...", "expectedOutcome": "...", "status": "testing"},
    {"id": "2", "type": "risky", "name": "...", "description": "...", "expectedOutcome": "...", "status": "testing"},
    {"id": "3", "type": "risky", "name": "...", "description": "...", "expectedOutcome": "...", "status": "testing"},
    {"id": "4", "type": "safe", "name": "...", "description": "...", "expectedOutcome": "...", "status": "testing"},
    {"id": "5", "type": "safe", "name": "...", "description": "...", "expectedOutcome": "...", "status": "testing"}
  ]
}
`,

  goalDriven: (goal: string, data: any) => `
You are an autonomous e-commerce agent.

Primary Goal: ${goal}

Current Data: ${JSON.stringify(data)}

Continuously ask: "What is the highest ROI action I can take right now?"

Generate 3 priority actions with expected ROI.

Output as JSON:
{
  "actions": [
    {"action": "...", "reason": "...", "expectedROI": 0-100, "priority": 1},
    {"action": "...", "reason": "...", "expectedROI": 0-100, "priority": 2},
    {"action": "...", "reason": "...", "expectedROI": 0-100, "priority": 3}
  ]
}
`,

  visualAnalysis: (imageUrl: string, product: Product) => `
You are a product visual analyst.

Product: ${product.name}

Analyze the product image for:
- What feels premium vs cheap
- What should be improved visually
- What kind of customer would be attracted

Output as JSON:
{
  "premium": ["what looks premium"],
  "cheap": ["what looks cheap"],
  "improvements": ["what to improve"],
  "targetCustomer": "customer profile",
  "photoIdeas": ["photo suggestions"]
}
`,

  salesResponse: (message: string, product: Product) => `
You are a sales expert.

Customer Message: ${message}
Product: ${product.name}

Your task:
1. Understand intent (buying? curious? hesitant?)
2. Respond persuasively
3. Remove objections
4. Move toward purchase

Style: Natural, confident, not pushy

Output as JSON:
{
  "intent": "buying/curious/hesitant/complaint",
  "response": "your response",
  "objectionRemoved": "what objection you addressed",
  "nextStep": "what to do next"
}
`,

  storeOptimizer: (data: any) => `
You are an e-commerce optimizer.

Store Data: ${JSON.stringify(data)}

Your task:
1. Identify why conversion is low or high
2. Suggest improvements
3. Rewrite listing to increase sales

Focus on: Clarity, Trust, Urgency

Output as JSON:
{
  "title": "improved title",
  "description": "improved description",
  "price": "suggested price",
  "clarity": "clarity improvements",
  "trust": "trust improvements",
  "urgency": "urgency improvements"
}
`,

  decision: (data: any) => `
You are a decision-making AI.

Given sales, traffic, and profit data: ${JSON.stringify(data)}

Decide:
- Scale (continue what's working)
- Stop (something's wrong)
- Modify (adjust and continue)

Output as JSON:
{
  "action": "scale/stop/modify",
  "reason": "why this decision",
  "confidence": 0-100
}
`,

  brandIdentity: (brandGoal: string) => `
You are a brand builder.

Brand Goal: ${brandGoal}

Create:
- Brand voice (how it speaks)
- Content style
- Emotional identity
- Tagline
- Content pillars

Output as JSON:
{
  "voice": "brand voice description",
  "style": "content style",
  "emotions": ["emotional triggers"],
  "tagline": "brand tagline",
  "contentPillars": ["main content topics"]
}
`,

  timeStrategy: (product: Product) => `
You are a time intelligence system.

Product: ${product.name}

Analyze and create time-specific strategies:
- Morning (6-12)
- Afternoon (12-18)
- Evening (18-22)
- Night (22-6)

What content and offers work best at each time?

Output as JSON:
{
  "morning": ["strategies for morning"],
  "afternoon": ["strategies for afternoon"],
  "evening": ["strategies for evening"],
  "night": ["strategies for night"]
}
`,

  leadGenerator: (product: Product) => `
You are a customer acquisition agent.

Goal: Bring potential buyers to the store

Product: ${product.name}

Generate:
- 3 viral content ideas
- Short-form post suggestions
- Where to post (platform + timing)

Focus: Attention → Curiosity → Conversion

Output as JSON:
{
  "viralIdeas": [
    {"platform": "...", "content": "...", "hook": "...", "timing": "..."},
    {"platform": "...", "content": "...", "hook": "...", "timing": "..."},
    {"platform": "...", "content": "...", "hook": "...", "timing": "..."}
  ]
}
`
}
