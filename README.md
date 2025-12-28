# 🌸 Mamacita - Super App for Pregnancy & Motherhood

An all-in-one platform empowering mothers through their pregnancy journey and beyond.

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)

## 🎯 Overview

Mamacita is a comprehensive platform designed to support pregnant women and mothers with:

- **Weekly Pregnancy Tracking** - Personalized week-by-week content (weeks 1-40)
- **Learning Platform** - Classes and video content from verified professionals
- **Community** - Safe, moderated groups for peer support
- **Events** - Online and in-person workshops, webinars, and meetups
- **Marketplace** *(Phase 2)* - Products and services for mothers and babies

### UX Principles

- Emotional safety
- Low cognitive load
- Human, warm language
- Trust-first design
- Non-clinical tone

## 🏗️ Architecture

### Domain-Driven Design

The app is organized into 6 core domains:

1. **User Domain** - Authentication, profiles, roles
2. **Pregnancy Domain** - Tracking, weekly content, milestones
3. **Community Domain** - Groups, posts, moderation
4. **Learning Domain** - Classes, videos, instructors
5. **Events Domain** - Workshops, registrations, calendar
6. **Commerce Domain** *(Phase 2)* - Marketplace, payments

### Monorepo Structure

```
mamacita/
├── backend/     # Node.js + Express REST API
├── mobile/      # React Native + Expo app
├── admin/       # Next.js admin dashboard
├── cms/         # Strapi headless CMS
└── shared/      # Shared types & utilities
```

## 💻 Tech Stack

### Mobile App
- **Framework**: React Native + Expo (JavaScript)
- **Navigation**: Expo Router (file-based)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Forms**: React Hook Form
- **Data Fetching**: Axios + React Query
- **Media**: Expo AV

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js (JavaScript)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **File Storage**: Cloudinary
- **Email**: SendGrid

### Admin Panel
- **Framework**: Next.js (JavaScript)
- **Styling**: NativeWind (consistency with mobile)
- **Authentication**: Separate admin auth + 2FA

### CMS
- **Platform**: Strapi (headless CMS)
- **Content**: Weekly pregnancy content (weeks 1-40)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+
- Expo CLI
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/mamacita.git
   cd mamacita
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Backend
   cp backend/.env.example backend/.env

   # Mobile
   cp mobile/.env.example mobile/.env

   # Admin
   cp admin/.env.example admin/.env

   # CMS
   cp cms/.env.example cms/.env
   ```

4. **Set up database**
   ```bash
   cd backend
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start development servers**
   ```bash
   # Terminal 1 - Backend API
   npm run dev:backend

   # Terminal 2 - Mobile app
   npm run dev:mobile

   # Terminal 3 - Admin panel
   npm run dev:admin

   # Terminal 4 - CMS
   npm run dev:cms
   ```

## 📂 Project Structure

### Backend (`/backend`)
```
backend/
├── src/
│   ├── domains/          # Domain modules
│   │   ├── auth/
│   │   ├── users/
│   │   ├── pregnancy/
│   │   ├── community/
│   │   ├── classes/
│   │   └── events/
│   ├── middleware/       # Express middleware
│   ├── utils/            # Utility functions
│   └── server.js         # Entry point
├── prisma/
│   ├── schema.prisma     # Database schema
│   ├── migrations/       # DB migrations
│   └── seed.js           # Seed data
└── package.json
```

### Mobile (`/mobile`)
```
mobile/
├── app/                  # Expo Router (file-based routing)
│   ├── (auth)/          # Auth flow
│   ├── (tabs)/          # Main app tabs
│   │   ├── index.js     # Home (pregnancy tracking)
│   │   ├── classes/
│   │   ├── community/
│   │   ├── events/
│   │   └── profile/
│   └── _layout.js
├── components/          # Reusable components
├── hooks/               # Custom React hooks
├── services/            # API calls
└── package.json
```

### Admin (`/admin`)
```
admin/
├── app/                 # Next.js App Router
│   ├── dashboard/
│   ├── users/
│   ├── moderation/
│   ├── classes/
│   ├── events/
│   └── settings/
├── components/
└── package.json
```

## 🛠️ Development

### Running Tests
```bash
npm run test:all
```

### Linting
```bash
npm run lint:all
```

### Database Migrations
```bash
cd backend
npx prisma migrate dev --name description_of_change
```

### Building for Production
```bash
npm run build:all
```

## 🚢 Deployment

### Backend API
- **Hosting**: Railway / Render / DigitalOcean
- **Database**: Managed PostgreSQL
- **Environment**: Production (.env)

### Mobile App
- **iOS**: App Store (via Expo EAS)
- **Android**: Google Play Store (via Expo EAS)
- **OTA Updates**: Expo Updates

### Admin Panel
- **Hosting**: Vercel
- **Domain**: admin.mamacita.com

### CMS
- **Hosting**: Railway / Render
- **Domain**: cms.mamacita.com

## 📊 Roadmap

### MVP (Current)
- ✅ Pregnancy tracking
- ✅ Community groups & posts
- ✅ Free classes & videos
- ✅ Free events
- ✅ Basic admin panel

### Phase 2 (Q2 2025)
- Stripe payments
- Paid classes & events
- Marketplace (products & services)
- Direct messages
- WebSockets (real-time)

### Phase 3 (Q4 2025)
- AI recommendations
- Live streaming
- Premium subscriptions
- International expansion

## 📄 License

Proprietary - All rights reserved

## 👥 Team

- **Product**: [Your Name]
- **Development**: [Team]
- **Design**: [Designer]

---

Made with 💜 for mothers everywhere
