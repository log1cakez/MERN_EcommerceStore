# 🛒 MERN Full Stack eCommerce Store with Admin Dashboard

A full-featured eCommerce web application built with the **MERN stack**, including an **Admin Dashboard** with real-time analytics. This app uses **JWT authentication**, **Stripe** for payments, and **Tailwind CSS** for a modern responsive UI.

---

## 🚀 Features

- 🛍️ Product browsing, shopping cart, and checkout
- 🔐 User authentication with **JWT**
- 💳 Payments powered by **Stripe**
- 🧑‍💼 Admin dashboard to manage:
  - Products
  - Orders
  - Users
  - Sales analytics
- 📊 Real-time analytics UI
- 📱 Fully responsive with **Tailwind CSS**
- ☁️ Image uploads via **Cloudinary**

---

## 🧱 Tech Stack

### Frontend
- React.js (in `/frontend`)
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js / Express.js
- MongoDB with Mongoose
- JWT for authentication
- Stripe for payments
- Cloudinary for media uploads
- Redis (via ioredis, optional for caching or queues)
- Cookie-parser for session handling
- dotenv for environment config

---
📊 Admin Dashboard
Accessible only to admin users. Features include:

Product and order management

User control

Stripe-powered revenue tracking

Dashboard charts and metrics

🔒 Authentication
User passwords hashed via bcryptjs

Tokens generated and verified using jsonwebtoken

Cookie-based or localStorage token storage supported

💳 Payments
Integrated with Stripe API

Handles checkout and payment confirmation

Supports multiple payment methods

