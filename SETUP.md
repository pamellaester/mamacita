# 🚀 Mamacita - Setup Guide

Complete guide to get the Mamacita super app running on your local machine.

## 📋 Prerequisites

Make sure you have the following installed:

- **Node.js** 18+ and npm 9+ ([Download](https://nodejs.org/))
- **PostgreSQL** 14+ ([Download](https://www.postgresql.org/download/))
- **Git** ([Download](https://git-scm.com/downloads))
- **Expo CLI** (will be installed via npm)

### Optional but Recommended:
- **Expo Go** app on your phone ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))
- **Postman** or **Insomnia** for API testing
- **VS Code** with recommended extensions:
  - ESLint
  - Prettier
  - Prisma
  - ES7+ React/Redux/React-Native snippets

---

## 🛠️ Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/mamacita.git
cd mamacita
```

### 2. Install Dependencies

Install all dependencies for all workspaces:

```bash
npm install
```

This will install dependencies for:
- Backend
- Mobile app
- Admin panel
- All shared packages

---

## 🗄️ Database Setup

### 1. Create PostgreSQL Database

```bash
# Login to PostgreSQL
psql postgres

# Create database
CREATE DATABASE mamacita_dev;

# Create user (optional, or use your existing user)
CREATE USER mamacita_user WITH PASSWORD 'your_password';

# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE mamacita_dev TO mamacita_user;

# Exit
\q
```

### 2. Configure Database Connection

```bash
# Copy environment file
cp backend/.env.example backend/.env
```

Edit `backend/.env` and update the `DATABASE_URL`:

```env
DATABASE_URL="postgresql://mamacita_user:your_password@localhost:5432/mamacita_dev?schema=public"
```

### 3. Run Migrations

```bash
cd backend
npx prisma migrate dev --name init
```

This creates all database tables based on the Prisma schema.

### 4. Seed the Database

```bash
npx prisma db seed
```

This creates sample data:
- Admin user: `admin@mamacita.com` / `admin123`
- Sample mothers and collaborators
- Sample classes, events, and groups

### 5. View Database (Optional)

```bash
npx prisma studio
```

Opens Prisma Studio at `http://localhost:5555` to view/edit data.

---

## ⚙️ Backend Configuration

### 1. Update Environment Variables

Edit `backend/.env` and configure:

```env
# JWT Secret (change this!)
JWT_SECRET=your-super-secret-jwt-key-at-least-32-chars-long

# Cloudinary (create free account at cloudinary.com)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# SendGrid (create free account at sendgrid.com)
SENDGRID_API_KEY=your-sendgrid-api-key
FROM_EMAIL=noreply@mamacita.com

# Strapi (will set up later)
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=to-be-generated
```

### 2. Start Backend Server

```bash
# From root directory
npm run dev:backend

# Or from backend directory
cd backend
npm run dev
```

Server starts at: `http://localhost:3000`

### 3. Test the API

```bash
# Health check
curl http://localhost:3000/health

# Should return:
# {"success":true,"message":"Mamacita API is running! 🌸",...}
```

---

## 📱 Mobile App Setup

### 1. Configure Environment

```bash
cp mobile/.env.example mobile/.env
```

Edit `mobile/.env`:

```env
API_URL=http://localhost:3000/api/v1

# For Android emulator, use:
# API_URL=http://10.0.2.2:3000/api/v1

# For physical device on same network, use:
# API_URL=http://YOUR_COMPUTER_IP:3000/api/v1
```

### 2. Start Expo Development Server

```bash
# From root directory
npm run dev:mobile

# Or from mobile directory
cd mobile
npx expo start
```

### 3. Run on Device/Emulator

**Option A: Physical Device (Recommended)**
1. Install Expo Go app on your phone
2. Scan the QR code from terminal
3. App opens in Expo Go

**Option B: iOS Simulator (Mac only)**
```bash
# Press 'i' in the Expo terminal
# Or:
npx expo start --ios
```

**Option C: Android Emulator**
```bash
# Press 'a' in the Expo terminal
# Or:
npx expo start --android
```

---

## 🖥️ Admin Panel Setup

### 1. Configure Environment

```bash
cp admin/.env.example admin/.env
```

Edit `admin/.env`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
ADMIN_SESSION_SECRET=your-super-secret-session-key-at-least-32-chars
```

### 2. Start Admin Panel

```bash
# From root directory
npm run dev:admin

# Or from admin directory
cd admin
npm run dev
```

Admin panel opens at: `http://localhost:3001`

---

## 🎨 Strapi CMS Setup (Optional for MVP)

Strapi will manage the weekly pregnancy content (weeks 1-40).

### 1. Create Strapi Project

```bash
cd cms
npx create-strapi-app@latest . --quickstart --no-run
```

### 2. Start Strapi

```bash
npm run develop
```

Strapi opens at: `http://localhost:1337/admin`

### 3. Create Admin Account

Follow the setup wizard to create your Strapi admin account.

### 4. Create Weekly Content Type

In Strapi admin:

1. Go to **Content-Type Builder**
2. Create new **Collection Type**: `weekly-content`
3. Add fields:
   - `week` (Number, required, unique)
   - `babySize` (Text)
   - `babySizeImage` (Media - Single image)
   - `babyDevelopment` (Rich text)
   - `motherBody` (Rich text)
   - `tips` (Rich text)
   - `checklist` (JSON)
4. Save and restart Strapi

### 5. Generate API Token

1. Go to **Settings** → **API Tokens**
2. Create new token: `backend-sync`
3. Type: `Full access`
4. Copy token

### 6. Update Backend .env

```env
STRAPI_API_TOKEN=your-generated-token
```

---

## 🔄 Running Everything Together

### Quick Start (3 terminals)

**Terminal 1 - Backend:**
```bash
npm run dev:backend
```

**Terminal 2 - Mobile:**
```bash
npm run dev:mobile
```

**Terminal 3 - Admin:**
```bash
npm run dev:admin
```

### With Strapi (4 terminals)

Add a 4th terminal:

**Terminal 4 - CMS:**
```bash
npm run dev:cms
```

---

## ✅ Verify Everything Works

### Backend API
- Health check: `http://localhost:3000/health` ✅
- Sample endpoint: `http://localhost:3000/api/v1/pregnancy/weeks` ✅

### Mobile App
- Opens in Expo Go ✅
- Shows "Mamacita" welcome screen ✅

### Admin Panel
- Opens at `http://localhost:3001` ✅
- Shows admin homepage ✅

### Database
- Can connect via Prisma Studio ✅
- Sample data exists ✅

---

## 🧪 Testing

### Backend API Tests
```bash
cd backend
npm test
```

### Lint All Code
```bash
npm run lint:all
```

### Format Code
```bash
cd backend && npm run format
cd mobile && npm run format
cd admin && npm run format
```

---

## 🐛 Troubleshooting

### Database Connection Error

**Problem:** `Error: P1001: Can't reach database server`

**Solution:**
1. Check PostgreSQL is running: `brew services list` (Mac) or `sudo service postgresql status` (Linux)
2. Verify DATABASE_URL in `.env`
3. Test connection: `psql -d mamacita_dev -U mamacita_user`

### Expo Metro Bundler Issues

**Problem:** Metro bundler won't start or shows errors

**Solution:**
```bash
cd mobile
rm -rf node_modules
npm install
npx expo start --clear
```

### Port Already in Use

**Problem:** `Error: Port 3000 already in use`

**Solution:**
```bash
# Find process using port
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
PORT=3001 npm run dev:backend
```

### Prisma Schema Changes Not Reflecting

**Solution:**
```bash
cd backend
npx prisma generate
npx prisma migrate dev
```

---

## 📚 Next Steps

1. **Read the Architecture Docs** in `/docs/ARCHITECTURE.md`
2. **Review API Documentation** (coming soon)
3. **Check Project Board** for current tasks
4. **Join Development** - See CONTRIBUTING.md

---

## 🆘 Getting Help

- **Documentation:** `/docs` folder
- **Issues:** [GitHub Issues](https://github.com/your-org/mamacita/issues)
- **Discussions:** [GitHub Discussions](https://github.com/your-org/mamacita/discussions)

---

## 🎉 You're Ready!

All systems are go! Start building amazing features for mothers everywhere. 💜

Happy coding! 🚀
