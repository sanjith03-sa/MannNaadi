# KrishiNet Edge — Community Intelligence for Every Farm

**KrishiNet Edge** is a responsive web platform for rural agricultural intelligence that combines low-cost ESP32 IoT soil sensors, AI-powered local-language advisories, hyperlocal farmer feeds, peer verification, and KVK expert escalation.

---

## 🌾 Key Features

1. **Brand & Visual Identity**:
   - Custom SVG leaf emblem with integrated water droplet, radiating network signal waves, and sensor node circuit dots.
   - Deep leaf green (`#166534`), harvest yellow (`#FACC15`), and soil earth tones designed for outdoor readability.

2. **Farmer Dashboard**:
   - **Farm Health Score** circular gauge (0–100) with dynamic status badges (Healthy, Watch, Alert, Critical).
   - Real-time soil metrics: **Soil Moisture (VWC %)**, **Soil pH**, **Root-Zone Temperature (°C)**, and **NPK Nutrients (mg/kg)**.
   - **7-Day Historical Trend Charts**: Interactive SVG graphs with threshold lines.
   - **AI Advisory Card**: Context-grounded recommendations with 1-tap **Voice Playback** (Web Speech API) and follow-up Q&A.
   - **Interactive ESP32 Simulator**: Buttons to simulate dry drops (22%) or optimal recovery (42%) with instant UI reaction.

3. **Hyperlocal Community Feed**:
   - Village cluster posts for Kondapur, Ramannapet, and Warangal.
   - Peer consensus counters: **Confirm** and **Dispute** actions.
   - Expert verification badges and agronomist review notes.
   - Interactive comment threads and social share capabilities.
   - Observation creation modal with photo attachments and auto-generated AI summaries.

4. **Pest Radar & Outbreak Heatmap**:
   - Geospatial radar cluster map with color-coded risk pins (Pink Bollworm, Early Blight, Whitefly).
   - Detail sidebar with field photo evidence and AI preventive protocols.
   - Filters for crops (Cotton, Tomato, Rice, Groundnut) and timeframes (Today, 7 days, 30 days).

5. **AI Advisory Assistant (Voice & Multimodal)**:
   - Voice input with live soundwave animation and native speech recognition.
   - Multimodal crop leaf analysis with sample photos (Early Blight, Bollworm, Leaf Curl).
   - Structured 5-point responses: Short advisory, likely causes, immediate non-chemical actions, warning signs, and confidence levels.
   - Safety disclaimers preventing chemical overdoses without expert consultation.

6. **Expert Agronomist Portal (KVK Workbench)**:
   - Priority escalation queue sorted by risk level.
   - Side-by-side inspection of sensor logs, farmer reports, and AI draft advisories.
   - 1-click **"Approve & Publish to Village Feed"** workflow.

7. **Admin & IoT Telemetry Command Center**:
   - 10 ESP32 sensor fleet matrix with battery %, signal RSSI, and last sync timestamps.
   - Live **MQTT Telemetry Simulator** to publish test sensor packets.

8. **Multilingual & Accessibility**:
   - Prominent language switcher supporting **English**, **हिन्दी (Hindi)**, **తెలుగు (Telugu)**, and **मराठी (Marathi)**.
   - Mobile-first responsive layout with floating bottom navigation for 360px–430px screens.

---

## 🚀 Running Locally

The application is already built and running on the local development server:

```bash
# Start development server
npm run dev -- --port 3000

# Build production bundle
npm run build
```

Open **http://localhost:3000/** in your browser.
