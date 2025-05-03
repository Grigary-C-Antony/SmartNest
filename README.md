
# 🏠 Smart Home Dashboard

A **real-time smart home controller** built with React, Node.js, and ESP32, designed to monitor and control various home appliances and sensors through a unified, responsive web interface. This platform enables users to view live sensor data, control devices like lights, fans, ACs, and music systems, and manage their smart devices from a single dashboard.

---

## 🔧 Features

* 🌡️ Real-time monitoring of temperature, humidity, and motion
* 💡 Control appliances: lights, fans, ACs, music systems
* 📲 Auto-detect and pair ESP32-based IoT devices
* ➕ Add and delete smart devices dynamically
* 📈 Live data updates via MQTT & WebSockets
* 🎛️ Clean, modular UI built with Tailwind CSS and React
* ☁️ Backend powered by Node.js with scalable architecture
* 🔒 Secure communication and device authentication

---

## 🖼️ UI Preview

![screenshot](https://github.com/Grigary-C-Antony/SmartNest/blob/main/Images/Screenshot%202025-05-04%20030037.png)

---

## 📦 Tech Stack

| Frontend            | Backend            | IoT Layer   | Others                  |
| ------------------- | ------------------ | ----------- | ----------------------- |
| React               | Node.js + Express  | ESP32 (C++) | MQTT (Mosquitto Broker) |
| Tailwind CSS        | WebSockets         | Wi-Fi Comm  | JWT Auth (Optional)     |
| Chart.js / Recharts | MongoDB / Firebase | Sensor Libs | Docker (Optional)       |

---

## 🚀 Getting Started

### Prerequisites

* Node.js >= 16
* MQTT Broker (e.g., Mosquitto)
* ESP32 Board(s) with sensors
* MongoDB (or use Firebase)

### 1. Clone the Repo

```bash
git clone https://github.com/Grigary-C-Antony/SmartNest.git
cd SmartNest
```

### 2. Setup Frontend

```bash
npm i
npm run dev
```


## 📡 Supported Devices

* Temperature & Humidity Sensors (e.g., DHT11, DHT22)
* Motion Sensors (e.g., PIR)
* Relays for Bulbs, Fans, AC
* Music Module / Bluetooth speaker (for basic control)
* Future expansion for smart plugs, locks, and energy monitors

---

## ✨ Future Roadmap

* 🔊 Voice control integration (Google Assistant / Alexa)
* 📱 Mobile App (React Native)
* 🧠 AI-powered energy optimization
* 📦 Docker container support
* 🌐 OTA updates for ESP devices

---

## 🙌 Acknowledgements
UI inspired from [Dribble](https://dribbble.com/shots/24823407-Dashboard-for-a-IoT-Product-Cac) 

---
