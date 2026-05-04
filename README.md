# 🧱 Tile Gallery

A modern, fully responsive tile gallery web application where users can explore, search, and discover a huge collection of aesthetic tiles online without visiting physical stores. This platform is designed to simplify tile browsing and purchasing while providing detailed product information and personalized user features.

---

## 🌐 Live Website

🔗 **Live URL:** https://tile-gallery-azure.vercel.app/

---

## 🎯 Project Purpose

The main goal of **Tile Gallery** is to make tile shopping easier and more accessible by allowing users to browse a wide range of tile collections online. Users can view detailed information for each tile, manage their profiles, and enjoy a seamless experience across all devices.

---

## ✨ Key Features

### 🔐 Authentication System

* User Registration with:

  * Name
  * Email
  * Photo URL
  * Password
* User Login with:

  * Email
  * Password
* Google Social Login Integration
* Secure authentication using BetterAuth
* Protected private routes

### 🏠 Home Page

* Attractive Hero Banner
* Marquee/Scrolling promotional text
* Featured Tiles Section
* Responsive modern UI

### 🖼️ All Tiles Page

* Search functionality for tiles by title
* Large collection of tiles
* Tile cards with thumbnail previews
* Direct navigation to tile details

### 🔍 Tile Details Page

* High-resolution tile preview
* Full tile information:

  * Title
  * Description
  * Category
  * Price
  * Dimensions
  * Material
  * Stock availability
  * Tags

### 👤 My Profile Page

* User profile information display
* Profile image
* Name update feature
* Image URL update feature

### 📱 Fully Responsive Design

* Mobile
* Tablet
* Desktop

---

## 🛠️ Technologies Used

### 🚀 Core Framework

* Next.js (App Router)
* React
* React DOM

### 🎨 UI & Styling

* Tailwind CSS
* DaisyUI
* HeroUI
* Framer Motion
* SwiperJS
* Lucide React Icons
* React Icons

### 🔒 Authentication & Database

* BetterAuth
* BetterAuth MongoDB Adapter
* MongoDB

### 🔔 Notifications

* React Toastify

### 🧹 Development Tools

* ESLint
* PostCSS

---

## 📦 NPM Packages & Their Uses

| Package                    | Purpose                    |
| -------------------------- | -------------------------- |
| next                       | Full-stack React framework |
| react                      | Frontend UI library        |
| react-dom                  | React rendering            |
| tailwindcss                | Utility-first CSS          |
| daisyui                    | Tailwind component library |
| @heroui/react              | Beautiful UI components    |
| better-auth                | Authentication system      |
| @better-auth/mongo-adapter | MongoDB integration        |
| mongodb                    | Database                   |
| framer-motion              | Animations                 |
| swiper                     | Sliders/carousels          |
| react-icons                | Icons                      |
| lucide-react               | Modern icon set            |
| react-toastify             | Toast notifications        |

---

## 🔑 Environment Variables

To keep sensitive data secure, the following environment variables are used:

```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
MONGODB_URI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### 📌 Purpose:

* **BETTER_AUTH_SECRET:** Authentication security secret
* **BETTER_AUTH_URL:** Base authentication URL
* **MONGODB_URI:** MongoDB database connection string
* **GOOGLE_CLIENT_ID:** Google login integration
* **GOOGLE_CLIENT_SECRET:** Google authentication secret

---

## 🖼️ Website Page Screenshots

### 🏠 Home Page

![Home Page Screenshot](YOUR_HOME_PAGE_IMAGE_LINK_HERE)

### 🖼️ All Tiles Page

![All Tiles Page Screenshot](YOUR_ALL_TILES_PAGE_IMAGE_LINK_HERE)

### 👤 My Profile Page

![My Profile Page Screenshot](YOUR_PROFILE_PAGE_IMAGE_LINK_HERE)

### 🔐 Login Page

![Login Page Screenshot](YOUR_LOGIN_PAGE_IMAGE_LINK_HERE)

### 📝 Register Page

![Register Page Screenshot](YOUR_REGISTER_PAGE_IMAGE_LINK_HERE)

### 🔍 Tile Details Page

![Tile Details Page Screenshot](YOUR_TILE_DETAILS_PAGE_IMAGE_LINK_HERE)

---

## 🚦 Route Summary

### 🌍 Public Routes:

* `/`
* `/all-tiles`
* `/login`
* `/register`

### 🔒 Private Routes:

* `/tile/[id]`
* `/my-profile`

---

## 📂 Deployment

* Hosted on **Vercel**
* SPA route reload protection configured
* Secure environment variable management

---

## 📌 Additional Requirements Completed

* Minimum 10 meaningful GitHub commits
* Unique UI design
* Responsive design
* Secure authentication
* Custom footer
* Search functionality
* Profile management
* Error handling
* Loading states
* Not-found page

---

## 👨‍💻 Developer Notes

This project was built as part of Assignment Category **A8 - Apple** following all required specifications and challenge requirements.

---

# ⭐ Thank You For Visiting Tile Gallery!
