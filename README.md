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

- User Registration with:
  - Name
  - Email
  - Photo URL
  - Password
- User Login with:
  - Email
  - Password
- Google Social Login Integration
- Secure authentication using BetterAuth
- Protected private routes
- Secure session management
- Persistent user login state

### 🏠 Home Page

- Attractive Hero Banner
- Marquee/Scrolling promotional text
- Featured Tiles Section
- Popular categories showcase
- Modern responsive layout
- Smooth animations for better UX

### 🖼️ All Tiles Page

- Search functionality for tiles by title
- Large collection of tiles
- Responsive tile cards
- Tile thumbnail previews
- Category-based browsing
- Quick navigation to tile details

### 🔍 Tile Details Page

- High-resolution tile preview
- Full tile information:
  - Title
  - Description
  - Category
  - Price
  - Dimensions
  - Material
  - Stock availability
  - Tags
- User-friendly design
- Dynamic route protection

### 👤 My Profile Page

- User profile information display
- Profile image
- User name
- Email information
- Easy profile management
- Personalized dashboard feel

### ✏️ Edit Profile Page

- Update user name
- Update profile image URL
- Save profile changes securely
- Real-time user data update
- Improved user customization

### 📱 Fully Responsive Design

- Mobile optimized
- Tablet optimized
- Desktop optimized
- Cross-browser compatibility

### ⚡ Additional Functionalities

- Toast notifications
- Loading spinners
- Error handling
- Custom 404 page
- Protected routes
- Smooth page transitions

---

## 🛠️ Technologies Used

### 🚀 Core Framework

- Next.js (App Router)
- React
- React DOM

### 🎨 UI & Styling

- Tailwind CSS
- DaisyUI
- HeroUI
- Framer Motion
- SwiperJS
- Lucide React Icons
- React Icons

### 🔒 Authentication & Database

- BetterAuth
- BetterAuth MongoDB Adapter
- MongoDB

### 🔔 Notifications

- React Toastify

### 🧹 Development Tools

- ESLint
- PostCSS

---

## 📦 NPM Packages & Their Uses

| Package | Purpose |
|--------|---------|
| next | Full-stack React framework |
| react | Frontend UI library |
| react-dom | React rendering |
| tailwindcss | Utility-first CSS |
| daisyui | Tailwind component library |
| @heroui/react | Beautiful UI components |
| better-auth | Authentication system |
| @better-auth/mongo-adapter | MongoDB integration |
| mongodb | Database |
| framer-motion | Animations |
| swiper | Sliders/carousels |
| react-icons | Icons |
| lucide-react | Modern icon set |
| react-toastify | Toast notifications |

---

## 🔑 Environment Variables

To keep sensitive data secure, the following environment variables are used:

```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
MONGODB_URI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=