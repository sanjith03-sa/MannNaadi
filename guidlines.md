# KrishiNet Edge — Business, Brand, and UI/UX Design Document

## 1. Business Idea

**KrishiNet Edge** is a community-owned agricultural intelligence platform for rural farming communities.

It combines:

- Low-cost ESP32-based soil-sensor nodes
- AI-powered crop and soil advisories
- Hyperlocal farmer social feed
- Peer verification of field observations
- Expert validation for high-risk alerts
- Voice-first, local-language interaction

The platform helps farmers detect soil stress, pests, and crop-health issues earlier, while building trust through community confirmation and expert review.

## 2. Problem Statement

Smallholder farmers often face:

- Delayed detection of irrigation stress, pests, and disease
- Generic advice that ignores local soil, crop, and weather conditions
- Language and literacy barriers
- Limited access to agricultural experts
- Low trust in standalone AI apps
- Fragmented knowledge within villages

Existing AI advisory tools can provide multilingual support, but trust, local relevance, and human validation remain major adoption barriers. [web:20][web:22][web:25]

## 3. Solution

KrishiNet Edge creates a **village-level Farm Signal Network**.

Each sensor node becomes a community data point. When multiple nearby farms show similar patterns—falling moisture, abnormal pH, pest sightings, or crop stress—the platform generates a village-level early-warning signal.

### Core value proposition

> **Sensors detect. AI explains. Farmers verify. Experts validate. Communities act together.**

## 4. Target Users

| User | Need |
|---|---|
| Smallholder farmers | Simple, timely, trustworthy crop advice |
| Progressive farmers | Share experience and build local reputation |
| Women farmers | Voice-first, accessible, community-safe onboarding |
| KVK officers / agronomists | Prioritized alerts and scalable advisory reach |
| Farmer producer organizations | Aggregate demand and coordinate action |
| Cooperatives / NGOs | Monitor regional crop risk and support farmers |
| Agri-input dealers | Demand signals for seeds, bio-inputs, and equipment |

## 5. Business Model

### Revenue streams

1. **Hardware kit sales**
   - Basic kit: soil moisture + temperature
   - Advanced kit: moisture + pH + NPK + weather sensor
   - Sold through cooperatives, FPOs, NGOs, and government programs

2. **Subscription plans**
   - Free tier: basic readings and community feed
   - Farmer Pro: advanced AI advisory, voice assistant, crop history
   - Cooperative plan: multi-farm dashboard and regional analytics

3. **B2B / institutional licensing**
   - KVKs, state agriculture departments, NGOs, and FPOs
   - Regional crop-risk dashboards and alert APIs

4. **Marketplace commissions**
   - Verified suppliers for seeds, biofertilizers, drip irrigation, and pest-control inputs
   - Group purchasing based on aggregated village demand

5. **Data insights**
   - Anonymized, consent-based regional crop-health and soil trends
   - Sold only in aggregate form to insurers, researchers, and agri-businesses

### Pricing direction

| Plan | Target user | Features |
|---|---|---|
| Free | Individual farmer | Basic dashboard, community feed, limited alerts |
| Farmer Pro | Progressive farmer | AI voice advisory, crop-photo analysis, historical trends |
| Village Plan | FPO / cooperative | Multiple farms, regional alerts, expert dashboard |
| Institutional Plan | Government / NGO | District-level analytics, API access, program reporting |

## 6. Competitive Positioning

| Existing solution | Limitation | KrishiNet Edge advantage |
|---|---|---|
| Generic AI chatbots | Often lack hyperlocal field context | Uses sensor, location, crop, weather, and community data |
| Weather apps | Do not show farm-level soil condition | Combines weather with live soil readings |
| IoT dashboards | Focus on data, not community action | Converts data into social, verified alerts |
| Extension services | Limited expert-to-farmer ratio | Digital triage plus expert escalation |
| Farmer WhatsApp groups | Useful but unstructured | Structured feed with verification and AI summaries |

## 7. Go-to-Market Strategy

### Phase 1: Village pilot

- Select 2–3 villages with active FPOs, cooperatives, or KVK connections.
- Deploy 10–20 sensor kits.
- Onboard 50–100 farmers.
- Focus on one or two major crops.
- Recruit local “Krishi Mentors” as community champions.

### Phase 2: Community growth

- Encourage farmers to share photos, voice notes, and confirmations.
- Publish weekly village crop-health summaries.
- Reward useful contributors with recognition and early access to features.
- Add women-focused onboarding sessions and trusted local ambassadors.

### Phase 3: Institutional expansion

- Partner with KVKs, agriculture universities, NGOs, and state programs.
- Offer expert dashboards and regional risk analytics.
- Integrate with government advisory programs where possible.

## 8. Key Metrics

| Metric | Meaning |
|---|---|
| Active sensor nodes | Hardware adoption |
| Daily active farmers | Platform engagement |
| Alerts acknowledged | Whether farmers see warnings |
| Confirmation rate | Community trust and participation |
| Expert resolution time | Quality of escalation |
| Reported crop-loss avoidance | Impact indicator |
| Retention after 30 days | Long-term usefulness |
| Cost per active farm | Unit economics |

## 9. Risks and Mitigation

| Risk | Mitigation |
|---|---|
| Inaccurate low-cost NPK readings | Present trends, not exact fertilizer prescriptions |
| Farmers distrust AI | Peer confirmation and expert verification |
| Poor internet connectivity | Offline caching, SMS/IVR fallback, mesh/LoRa option |
| Language mismatch | Local-language UI, voice interface, regional content review |
| Digital exclusion of women | Women-only onboarding and trusted local ambassadors |
| Misinformation in feed | Moderation, dispute reporting, expert badges |
| Hardware theft or damage | Low-cost replaceable nodes, community ownership model |

## 10. Brand Identity

### Brand name

**KrishiNet Edge**

- **Krishi:** Agriculture
- **Net:** Network of farmers, sensors, and knowledge
- **Edge:** Edge computing, field-level intelligence, and early advantage

### Tagline options

1. **Community Intelligence for Every Farm**
2. **See the Field. Act Together.**
3. **Early Signals. Shared Wisdom.**
4. **Farm Smarter, Together.**
5. **From Soil Signals to Crop Safety.**

Recommended primary tagline:

> **Community Intelligence for Every Farm**

## 11. Logo Concept

### Primary logo

A circular emblem containing:

- A central green leaf
- A water droplet integrated into the leaf stem
- Thin network lines radiating outward
- Small sensor-node dots at the line endpoints

The logo should communicate:

- Agriculture
- Connectivity
- Soil and water
- Community
- Technology

### Logo text

```text
KrishiNet
EDGE
```

### Tagline placement

```text
KrishiNet EDGE
Community Intelligence for Every Farm
```

### Logo color rules

- Leaf: Deep leaf green `#166534`
- Network lines: Medium green `#22C55E`
- Droplet: Sky blue `#0EA5E9`
- Soil accent: Brown `#92400E`
- Background: Warm off-white `#FAFAF7`

### Logo usage

- App icon: leaf-and-network icon only
- Website header: full logo
- Dark mode: light leaf and white text
- Print / low-ink: monochrome version

## 12. UI/UX Design System

### Design philosophy

The interface should feel:

- Simple
- Trustworthy
- Familiar
- Voice-friendly
- Community-driven
- Low-data friendly

Avoid complex technical dashboards on farmer-facing screens. Show simple status first; detailed charts should be optional.

### Color palette

| Use | Color | Hex |
|---|---|---|
| Primary brand | Deep leaf green | `#166534` |
| Secondary brand | Harvest yellow | `#FACC15` |
| Earth accent | Soil brown | `#92400E` |
| Safe status | Green | `#16A34A` |
| Warning status | Amber | `#F59E0B` |
| Critical status | Red | `#DC2626` |
| Background | Warm off-white | `#FAFAF7` |
| Card | White | `#FFFFFF` |
| Main text | Charcoal | `#1F2937` |
| Muted text | Gray | `#6B7280` |

### Typography

| Element | Font | Weight |
|---|---|---|
| Headings | Poppins / Plus Jakarta Sans | 600–700 |
| Body | Inter | 400–500 |
| Buttons | Inter | 600 |
| Regional scripts | Noto Sans family | 400–600 |

### Spacing

- Base spacing unit: `8px`
- Card padding: `16px` on mobile, `24px` on desktop
- Section spacing: `32px` mobile, `64px` desktop
- Border radius: `16px` for cards, `999px` for pills/buttons

### Components

- **Status card:** Icon + metric + trend + short status
- **Alert card:** Risk badge + message + action button
- **Community post card:** Author, crop, location, media, AI summary, confirm/dispute buttons
- **Voice button:** Large microphone button with waveform animation
- **Farm Health Score:** Circular gauge from 0–100
- **Sensor chart:** Simple line chart with clear labels
- **Expert badge:** Verified checkmark with “Expert Verified”
- **Language selector:** Prominent, available on every screen

## 13. Key Screens

### 13.1 Farmer Home

Layout:

1. Greeting and selected farm
2. Farm Health Score
3. Current soil status card
4. Active alert card
5. AI advisory card
6. Quick actions: Ask AI, Upload Photo, Community Feed
7. Recent sensor trend

Example:

```text
Namaste, Ramesh
Cotton Field — Village Kondapur

Farm Health Score: 72/100
Status: Watch

Soil Moisture: 28% — Low
pH: 6.4 — Healthy
Temperature: 31°C

AI Advisory:
Your field may be approaching water stress. Check soil at 5 cm depth.
If dry, irrigate in the early morning or evening.

[Listen] [Ask AI] [Confirm]
```

### 13.2 Community Feed

Each post should look like a simple social-media card.

```text
[Leaf icon] Sensor Alert
Cotton — Kondapur Cluster

Soil moisture dropped from 42% to 28% in 12 hours.
4 nearby farms show a similar pattern.

AI Summary:
Possible early water stress. Check soil moisture and irrigate if dry.

[2 Farmers Confirmed] [Expert Pending]

[Confirm] [Dispute] [Comment]
```

### 13.3 Pest Radar

- Map with colored clusters
- Green: no reports
- Amber: scattered reports
- Red: multiple confirmed reports
- Filters: crop, time period, radius
- Photo evidence carousel
- AI regional summary

### 13.4 Expert Dashboard

- High-priority alert queue
- Map view
- Farmer reports and photos
- AI draft response
- Approve / edit / reject
- Publish verified response

## 14. Accessibility Requirements

- Minimum font size: `16px` for body text
- High-contrast text
- Icons paired with text labels
- Voice input and output
- Simple navigation with no more than 3 taps to core actions
- Support for screen readers
- Large tap targets of at least `48px`
- Avoid relying on color alone to convey alerts

## 15. Success Vision

In one year, KrishiNet Edge should enable a village to:

- Detect moisture stress before visible crop damage
- Identify pest outbreaks through shared farmer observations
- Reduce unnecessary irrigation through weather-aware advisories
- Build a trusted local knowledge network
- Connect farmers to experts only when human judgment is truly needed

The long-term vision is not just a farming app, but a **rural intelligence infrastructure** owned and strengthened by the farming community itself.
