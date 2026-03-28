# 🚀 Sekhar Behera — 3D Portfolio


![Tech Stack](https://img.shields.io/badge/Next.js-13-black) ![Three.js](https://img.shields.io/badge/Three.js-0.157-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3-cyan)

## ✨ Features — Exact Match to Shivam's Style

| Feature | Implementation |
|---------|---------------|
| 🌟 Stars background | `maath` random sphere + Three.js Points |
| 🎯 Type animation hero | `react-type-animation` cycling 5 roles |
| 🃏 Tilt service cards | `react-parallax-tilt` on About cards |
| 🔮 3D skill balls | `@react-three/drei` Decal + icosahedron per tech icon |
| 📅 Vertical timeline | `react-vertical-timeline-component` for experience |
| 🌍 3D Earth contact | Three.js sphere with auto-rotate in Contact |
| 🌙 Dark / Light theme | Class-based toggle, persisted in localStorage |
| 🔲 Project modal | Click cards → animated full-detail modal |
| 📱 Responsive | Mobile burger menu + full responsive layout |

## 🛠 Tech Stack

```
Next.js 13  ·  React 18  ·  Three.js  ·  React Three Fiber
Drei  ·  Framer Motion  ·  Tailwind CSS  ·  maath
react-parallax-tilt  ·  react-type-animation
react-vertical-timeline-component
```

## 🚀 Quick Start

```bash
# 1. Install
npm install

# 2. Run dev
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build && npm start
```

## 🌐 Deploy to Vercel (free, 1 click)

```bash
# Push to GitHub, then:
# vercel.com → New Project → Import → Deploy ✓
```

Or drag & drop the build folder to [netlify.com/drop](https://netlify.com/drop).

## 📁 Structure

```
├── components/
│   ├── canvas/
│   │   ├── Stars.jsx      ← maath stars background
│   │   ├── Ball.jsx       ← 3D skill icon balls
│   │   └── Earth.jsx      ← 3D Earth in contact
│   ├── Navbar.jsx         ← Fixed nav + theme toggle
│   ├── Hero.jsx           ← TypeAnimation + scroll indicator
│   ├── About.jsx          ← Tilt service cards + overview
│   ├── Experience.jsx     ← Vertical timeline + certifications
│   ├── Skills.jsx         ← Tab bar + 3D Ball grid
│   ├── Projects.jsx       ← Tilt cards + click modal
│   ├── Education.jsx      ← Education cards
│   └── Contact.jsx        ← Form + 3D Earth
├── constants/
│   └── index.js           ← ✏️  ALL your data lives here
├── hoc/
│   └── SectionWrapper.jsx ← Framer Motion section HOC
├── utils/
│   └── motion.js          ← Animation variants
└── styles/
    └── globals.css        ← Tailwind + custom CSS
```

## ✏️ Customize Your Data

Edit **`constants/index.js`** only:
- Add project `live_link` to enable Live Demo button
- Update experience bullets
- Add/remove tech icons
- Update certifications

## 📧 Enable Real Contact Form (EmailJS)

1. Sign up at [emailjs.com](https://emailjs.com) (free)
2. Get Service ID, Template ID, Public Key
3. `npm install @emailjs/browser`
4. In `Contact.jsx` replace the simulate block with:
```js
import emailjs from "@emailjs/browser";
await emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", formRef.current, "PUBLIC_KEY");
```

---

Made with ❤️ · **Sekhar Behera** · Bhubaneswar, India
