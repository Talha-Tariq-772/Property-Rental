Understood, Talha.
You uploaded **your entire project**, file-by-file, and gave me the **complete structure**.

You also said:

> **“Based on all this, make a detailed README file.”**

So now I will generate a **FULL, PROFESSIONAL, DEVELOPER-GRADE README.md** for your **Property Rental Platform (Next.js App Router)**.

### ⚠️ IMPORTANT

I **will NOT include your real secrets** (MongoDB URI, Google OAuth keys, Cloudinary secrets, NextAuth secret).
I will replace them with **safe placeholders**.

---

# ✅ **FINAL PROFESSIONAL README.md**

Copy this into your `README.md` file.

---

# 🏡 Property Rental Platform – Next.js (Full-Stack Real Estate Application)

A complete **property rental marketplace** built with **Next.js App Router**, **MongoDB**, **NextAuth**, **Cloudinary**, **Tailwind**, and **Server Actions**.
Users can browse properties, view details, message property managers, save listings, manage profiles, and more.

This is a **production-ready**, fully responsive, modern application.

---

## 📌 Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Pages & Routing](#pages--routing)
* [Components](#components)
* [Server Actions](#server-actions)
* [Authentication (NextAuth)](#authentication-nextauth)
* [Database Models](#database-models)
* [Environment Variables](#environment-variables)
* [Installation](#installation)
* [Running the Project](#running-the-project)
* [Deployment (Vercel)](#deployment-vercel)
* [Screenshots](#screenshots)

---

# 🧩 **Overview**

This project is a **full-stack rental marketplace** where:

* Property owners can **add, edit, delete** properties.
* Users can **browse**, **search**, and **save/bookmark** properties.
* Users can **contact** property managers via messages.
* Users can **log in** via Google OAuth (NextAuth).
* Property images are stored on **Cloudinary**.
* The app is fully responsive using **Tailwind CSS**.

Built using the **Next.js 14 App Router** with server components and server actions.

---

# 🚀 **Features**

### 👤 **Authentication & Authorization**

* Google OAuth (NextAuth)
* Session-based access
* Profile dropdown
* Saved properties
* Private pages

### 🏘️ **Property Management**

* Add new property (with images)
* Edit property
* Delete property
* Upload multiple photos to Cloudinary
* Property amenities
* Location data
* Rates (nightly, weekly, monthly)

### 🔍 **Search & Filters**

* Search by city, state, keywords
* Search results page

### ⭐ **Bookmarks**

* Add/remove bookmarks
* Saved Properties page

### 💬 **Messaging System**

* Contact property manager
* Mark messages as read/unread
* Delete messages
* Unread message count in Navbar

### 🗺️ **Map Integration**

* MapBox / Google Geolocation (placeholder tokens)

### 📸 **Image Gallery**

* PhotoSwipe gallery component (zoomable UI)

### 📱 **Responsive Design**

* Modern Tailwind UI
* Mobile-friendly navigation menu
* Fully optimized images using Next/Image

---

# 🛠️ **Tech Stack**

### **Frontend**

* Next.js (App Router)
* React Server & Client Components
* Tailwind CSS
* Next/Image
* PhotoSwipe Gallery

### **Backend**

* Next.js Server Actions
* MongoDB + Mongoose
* NextAuth (Google Provider)
* Cloudinary for image uploads

### **Other Tools**

* React-Toastify
* Mapbox / Google Maps (optional)
* Vercel deployment

---

# 📁 **Project Structure**

```
/
├── app/
│   ├── layout.jsx
│   ├── page.jsx (Home)
│   ├── loading.jsx
│   ├── error.jsx
│   ├── not-found.jsx
│   ├── properties/
│   │   ├── page.jsx
│   │   ├── add/page.jsx
│   │   ├── [id]/page.jsx
│   │   ├── [id]/edit/page.jsx
│   │   ├── search-results/page.jsx
│   │   └── saved/page.jsx
│   ├── messages/page.jsx
│   ├── profile/page.jsx
│   └── api/auth/[...nextauth]/route.js
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── HomeProperties.jsx
│   ├── FeaturedProperties.jsx
│   ├── FeaturedPropertyCard.jsx
│   ├── PropertyCard.jsx
│   ├── PropertyDetails.jsx
│   ├── PropertyImages.jsx
│   ├── PropertyAddForm.jsx
│   ├── PropertyContactForm.jsx
│   ├── Pagination.jsx
│   ├── MessageCard.jsx
│   ├── BookMarkButton.jsx
│   ├── InfoBox.jsx
│   ├── InfoBoxes.jsx
│   ├── ProfileProperties.jsx
│   └── AuthProvider.jsx
│
├── app/actions/
│   ├── addProperty.js
│   ├── updateProperty.js
│   ├── deleteProperty.js
│   ├── bookmarkProperty.js
│   ├── checkBookmarkStatus.js
│   ├── addMessage.js
│   ├── markMessageAsRead.js
│   └── deleteMessage.js
│
├── config/
│   ├── database.js
│   └── cloudinary.js
│
├── context/
│   └── GlobalContext.js
│
├── models/
│   ├── Property.js
│   ├── Message.js
│   └── User.js
│
├── utils/
│   ├── authOptions.js
│   ├── getSessionUser.js
│   └── convertObject.js
│
├── public/
│   ├── images...
│   ├── logo.png
│   ├── profile.png
│   └── pin.svg
│
├── globals.css
├── tailwind.config.js
├── middleware.js
└── package.json
```

---

# 🔐 **Authentication (NextAuth)**

* Uses the **Google Provider**
* Stores user in MongoDB
* Provides:

  * `useSession()`
  * Protected pages
  * Session-based actions
  * Navbar profile menu
  * Unread messages badge

The route:

```
/app/api/auth/[...nextauth]/route.js
```

---

# 🧵 **Server Actions (Next.js)**

### Properties

* `addProperty`
* `updateProperty`
* `deleteProperty`
* `bookmarkProperty`
* `checkBookmarkStatus`

### Messages

* `addMessage`
* `deleteMessage`
* `markMessageAsRead`

### Others

* `getUnreadMessageCount`

These actions run securely on the server.

---

# 🗄️ **Database Models**

### **User**

* name
* email
* image
* bookmarks

### **Property**

* type
* name
* description
* location
* amenities
* rates
* images
* owner

### **Message**

* property
* name
* email
* phone
* body
* read/unread

---

# 🔧 **Environment Variables (.env.local)**

⚠️ **USE PLACEHOLDERS — DO NOT SHARE REAL KEYS**

```
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_DOMAIN=http://localhost:3000
NEXT_PUBLIC_API_DOMAIN=http://localhost:3000/api
NEXT_PUBLIC_MAPBOX_TOKEN=your_token
NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY=your_token
```

---

# 🛠️ **Installation**

### 1. Clone the repo

```sh
git clone https://github.com/your-username/property-rental.git
cd property-rental
```

### 2. Install dependencies

```sh
npm install
```

### 3. Add `.env.local`

Use placeholders (NEVER real keys).

### 4. Setup MongoDB & Cloudinary

Create accounts:

* [https://cloud.mongodb.com](https://cloud.mongodb.com)
* [https://cloudinary.com](https://cloudinary.com)

---

# ▶️ **Running the Project**

### Development

```sh
npm run dev
```

### Production

```sh
npm run build
npm start
```

---

# 🚀 **Deployment (Vercel)**

1. Push code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Create New Project
4. Import your repo
5. Add all ENV variables
6. Deploy

Vercel automatically detects:

* Next.js App Router
* Server Actions
* API routes
* Image optimization



#
