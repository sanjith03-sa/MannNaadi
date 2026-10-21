# KrishiNet Edge — Website Build Specification for Gemini

## 1. Project Overview

Build **KrishiNet Edge**, a responsive web platform for a rural agricultural intelligence network.  
It combines IoT soil-sensor data, AI-generated local-language advisories, farmer community posts, peer verification, and expert escalation.

The website should be usable by:
- Farmers
- Village-level community members
- Agricultural experts / KVK officers
- Cooperatives and administrators

The design must be mobile-first, simple, low-bandwidth friendly, and accessible to users with limited digital literacy.

## 2. Core Product Goal

Create a trusted **“Farm Signal Network”** where:

1. IoT sensors detect soil and crop stress.
2. AI explains the issue in simple local language.
3. Nearby farmers confirm or dispute the observation.
4. Experts validate high-risk alerts.
5. The community learns and acts together.

The platform must never present AI advice as a final authority for high-risk actions such as pesticide dosage, crop destruction, or major fertilizer purchases.

## 3. Recommended Tech Stack

| Layer | Technology |
|---|---|
| Frontend website | Next.js + React + TypeScript |
| Styling | Tailwind CSS |
| UI components | shadcn/ui or Material UI |
| Maps | Leaflet or Google Maps |
| Charts | Recharts or Chart.js |
| Backend | Next.js API routes or FastAPI |
| Database | PostgreSQL or Firebase Firestore |
| Authentication | Firebase Auth / phone OTP |
| Real-time updates | WebSockets or Firebase Realtime listeners |
| File storage | Firebase Storage / Cloud Storage |
| AI advisory | Gemini API |
| Voice | Web Speech API for MVP; Gemini multimodal input for images |
| Notifications | Firebase Cloud Messaging or in-app alerts |

For a hackathon, Firebase + Next.js is acceptable because it enables rapid authentication, database, storage, and deployment.

## 4. Design Principles

- Use large buttons, clear icons, and minimal text.
- Support English plus at least one Indian regional language.
- Use voice input and audio playback where possible.
- Prioritize mobile screens between 360px and 430px width.
- Ensure the app works on slow networks.
- Use color and icons—not only text—to communicate status.
- Keep sensor charts optional; farmers should see simple status cards first.
- Clearly separate:
  - Sensor data
  - AI recommendation
  - Farmer confirmation
  - Expert verification

## 5. Brand and Visual Direction

### Theme

- **Primary color:** Deep leaf green `#166534`
- **Secondary color:** Harvest yellow `#FACC15`
- **Accent color:** Soil brown `#92400E`
- **Alert red:** `#DC2626`
- **Safe green:** `#16A34A`
- **Warning amber:** `#F59E0B`
- **Background:** Warm off-white `#FAFAF7`
- **Card background:** White `#FFFFFF`
- **Text color:** Dark charcoal `#1F2937`

### Typography

- Headings: `Poppins` or `Plus Jakarta Sans`
- Body: `Inter`
- Local-language fallback: `Noto Sans Devanagari`, `Noto Sans Telugu`, or relevant regional font

### Visual style

- Rounded corners: `16px`
- Soft shadows
- Large touch targets: minimum `48px`
- Simple agricultural illustrations
- Clear status badges: Healthy, Watch, Alert, Critical
- Avoid dense dashboards on farmer-facing screens

## 6. Logo Direction

Create a simple, memorable logo called **KrishiNet Edge**.

### Logo concept

A circular leaf-and-network emblem:

- A green leaf in the center.
- Thin network lines radiating outward like signal waves.
- A small soil/moisture droplet integrated into the leaf stem.
- Optional circuit-node dots at the ends of the network lines.

### Logo text

- Main word: **KrishiNet**
- Sub-word: **EDGE**
- Tagline: **“Community Intelligence for Every Farm”**

### Logo variations

- Full logo: icon + wordmark
- Icon-only logo: for app icon and favicon
- Monochrome version: for print and low-bandwidth use
- Dark-mode version: light leaf on dark background

## 7. Website Pages

### 7.1 Landing Page

Purpose: Explain the product to judges, partners, farmers, and investors.

Sections:

1. Hero section  
   - Headline: “Turn soil signals into community action.”
   - Subheading: “KrishiNet Edge combines low-cost IoT sensors, AI advisories, and farmer knowledge to protect crops before losses happen.”
   - CTA buttons: “Farmer Login” and “See Live Demo”

2. Problem section  
   - Delayed pest detection
   - Poor access to localized advice
   - Language and literacy barriers
   - Lack of trust in generic AI advice

3. Solution section  
   - IoT soil-scan node
   - AI advisory engine
   - Hyperlocal farmer feed
   - Peer verification
   - Expert escalation

4. How it works  
   - Sensor reads field data
   - AI creates an advisory
   - Nearby farmers validate
   - Expert reviews high-risk alerts
   - Community receives early warning

5. Features grid  
   - Soil health monitoring
   - Pest radar
   - Voice-first advisory
   - Community confirmation
   - Weather-aware irrigation alerts
   - Expert escalation

6. Demo preview  
   - Show a mock mobile dashboard and community feed.

7. Trust and safety  
   - “AI advises. Farmers verify. Experts validate.”

8. Footer  
   - Contact, privacy, terms, pilot-program links.

### 7.2 Farmer Dashboard

Purpose: Give the farmer an immediate understanding of field health.

Cards:

- Farm Health Score
- Soil moisture
- Soil pH
- Temperature
- NPK status
- Active alerts
- Last sensor update
- Crop and field location

Chart section:

- Moisture trend: last 7 days
- pH trend: last 7 days
- Temperature trend: last 7 days
- Optional NPK trend

AI advisory card:

- Advisory text
- Risk badge
- Confidence indicator
- Voice-play button
- “Ask a follow-up question” input
- “This helped” / “This did not help” feedback buttons

### 7.3 Community Feed

Purpose: Enable hyperlocal farmer knowledge sharing.

Post types:

- Sensor alert post
- Farmer observation post
- Crop-photo post
- Expert response post
- Weather advisory post

Each post must include:

- Farmer name or anonymous label
- Village / approximate location
- Crop type
- Timestamp
- Image or voice note if available
- AI summary
- Confirmation count
- Dispute count
- Expert verification badge if available

Actions:

- Confirm
- Dispute
- Comment
- Share
- Report incorrect information

### 7.4 Pest Radar

Purpose: Show emerging crop-health risks.

Features:

- Map with clustered pest/disease reports
- Crop filter
- Time filter: today, 7 days, 30 days
- Risk level by area
- Photo evidence gallery
- AI-generated regional risk summary

### 7.5 AI Advisory Assistant

Purpose: Let farmers ask questions naturally.

Input methods:

- Typed question
- Voice question
- Crop photo upload
- Selected field/sensor context

Output format:

- Simple answer
- Possible causes
- Immediate inspection steps
- When to contact an expert
- Confidence level
- Source context: sensor data, weather, farmer reports

Example prompt structure for Gemini:

```text
You are KrishiNet Edge, a cautious agricultural advisory assistant for smallholder farmers.

Use the following context:
- Crop: {crop}
- Growth stage: {growth_stage}
- Location: {village}, {district}
- Soil moisture: {moisture}
- Soil pH: {ph}
- Temperature: {temperature}
- NPK readings: {npk}
- Weather forecast: {weather}
- Farmer report: {farmer_report}
- Nearby community confirmations: {community_confirmations}

Respond in {language}.
Use simple words suitable for a farmer.
Do not prescribe exact pesticide or fertilizer quantities.
If the issue is high-risk or unclear, advise the farmer to contact a local agricultural expert.
Return:
1. Short advisory
2. Likely causes
3. Immediate actions
4. Warning signs
5. Confidence level
```

### 7.6 Expert Dashboard

Purpose: Let agricultural experts review and validate alerts.

Features:

- Alert queue sorted by severity
- Map of active alerts
- Farmer reports and photos
- AI-generated draft response
- Edit and approve response
- Mark alert as resolved
- Publish expert advice to community feed

### 7.7 Admin Dashboard

Purpose: Monitor the platform and devices.

Features:

- Registered farmers
- Active sensor nodes
- Device battery and connectivity status
- Alerts created and resolved
- Feed engagement metrics
- Regional crop-risk heat map
- User management
- Content moderation tools

## 8. Data Models

### User

```json
{
  "user_id": "string",
  "name": "string",
  "phone": "string",
  "role": "farmer | expert | admin",
  "language": "string",
  "village": "string",
  "district": "string",
  "crops": ["cotton", "tomato"]
}
```

### Farm

```json
{
  "farm_id": "string",
  "owner_id": "string",
  "crop": "string",
  "area_acres": 2.5,
  "latitude": 17.385,
  "longitude": 78.486,
  "soil_type": "black soil",
  "sowing_date": "2026-06-15"
}
```

### Sensor Reading

```json
{
  "reading_id": "string",
  "device_id": "string",
  "farm_id": "string",
  "timestamp": "ISO timestamp",
  "soil_moisture": 31,
  "soil_ph": 6.4,
  "temperature": 29,
  "nitrogen": 42,
  "phosphorus": 18,
  "potassium": 65,
  "battery": 82
}
```

### Community Post

```json
{
  "post_id": "string",
  "author_id": "string",
  "farm_id": "string",
  "type": "sensor_alert | farmer_report | expert_response",
  "crop": "string",
  "location_cluster": "string",
  "text": "string",
  "image_url": "string",
  "ai_summary": "string",
  "risk_level": "low | medium | high",
  "confirmations": 3,
  "disputes": 0,
  "expert_verified": false,
  "created_at": "ISO timestamp"
}
```

## 9. API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register farmer or expert |
| POST | `/api/auth/login` | Login using phone OTP |
| POST | `/api/farms` | Create farm profile |
| POST | `/api/devices` | Register sensor device |
| POST | `/api/sensor-data` | Receive ESP32 reading |
| GET | `/api/farms/{farm_id}/latest` | Get latest field reading |
| GET | `/api/farms/{farm_id}/history` | Get historical readings |
| POST | `/api/advisory` | Generate AI advisory |
| POST | `/api/posts` | Create community post |
| GET | `/api/feed` | Get hyperlocal feed |
| POST | `/api/posts/{post_id}/confirm` | Confirm an alert |
| POST | `/api/posts/{post_id}/dispute` | Dispute an alert |
| POST | `/api/crop-analysis` | Analyze crop photo |
| POST | `/api/escalate` | Escalate to expert |
| GET | `/api/admin/overview` | Admin analytics |

## 10. AI Rules

Gemini must follow these rules:

- Use simple, respectful, farmer-friendly language.
- Respond in the farmer’s selected language.
- Explain uncertainty honestly.
- Never claim a pest or disease diagnosis with certainty from one photo.
- Never prescribe exact chemical pesticide or fertilizer quantities.
- Recommend local expert consultation for high-risk cases.
- Use sensor data and community context before giving advice.
- Prefer preventive and low-risk actions first.
- Clearly label AI-generated content.
- If data is insufficient, ask for one clarifying detail instead of guessing.

## 11. User Flows

### Farmer flow

1. Farmer logs in with phone number.
2. Farmer selects or creates a farm.
3. Farmer links an ESP32 sensor device.
4. Dashboard shows latest soil readings.
5. AI generates an advisory.
6. Farmer listens to or reads the advisory.
7. Farmer can upload a crop photo or ask a question.
8. Farmer posts an observation to the community feed.
9. Nearby farmers confirm or dispute.
10. Expert validates if required.

### Expert flow

1. Expert logs in.
2. Expert sees high-risk or disputed alerts.
3. Expert reviews sensor data, photos, and farmer comments.
4. Expert edits or approves AI draft advice.
5. Expert publishes the verified response.
6. Farmers receive the expert-verified update.

## 12. MVP Build Order

Build in this sequence:

1. Set up Next.js project with Tailwind CSS.
2. Create global theme, fonts, colors, and reusable UI components.
3. Build landing page.
4. Build authentication with phone number or demo login.
5. Create farm and device onboarding screens.
6. Build farmer dashboard with mock sensor data.
7. Add sensor charts and Farm Health Score.
8. Integrate Gemini API for advisory generation.
9. Build community feed with mock posts.
10. Add confirm/dispute actions.
11. Add crop-photo upload and AI analysis.
12. Build expert dashboard.
13. Add notifications and escalation flow.
14. Connect ESP32 or simulated sensor-data generator.
15. Polish mobile UI, loading states, empty states, and error states.

## 13. Demo Data Requirements

Create realistic demo data for:

- 10 sensor devices
- 3 villages
- 4 crops: cotton, tomato, rice, groundnut
- 20 farmers
- 15 community posts
- 5 active alerts
- 2 expert-verified alerts
- 7 days of sensor history

Example demo alert:

```text
Soil moisture has dropped from 42% to 28% in the last 12 hours.

Nearby farms: 4 of 6 show a similar decline.

AI advisory:
Your cotton field may be approaching water stress. Check soil at 5 cm depth.
If it feels dry, irrigate during early morning or evening. Rain is not expected in the next 24 hours.

Community status:
2 farmers confirmed dry soil.
1 farmer reported adequate moisture.

Risk level: Medium
```

## 14. Acceptance Criteria

The website is complete when:

- A farmer can register and create a farm.
- A sensor reading can be submitted and displayed.
- The dashboard shows current readings and historical charts.
- Gemini generates a simple advisory from sensor data.
- A farmer can post an observation with a photo.
- Nearby posts appear in a hyperlocal feed.
- Farmers can confirm or dispute posts.
- High-risk alerts can be escalated to an expert.
- Experts can publish verified responses.
- The UI is mobile-first and accessible.
- AI advice includes appropriate safety disclaimers.
