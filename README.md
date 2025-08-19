# 🛒 MERN Full Stack eCommerce Store with Admin Dashboard

A full-featured eCommerce web application built with the **MERN stack**, featuring an **Admin Dashboard** with real-time analytics, secure authentication, and Stripe payment integration. Built with modern technologies and best practices.

---

## ✨ Features

### 🛍️ Customer Features

- **Product Browsing**: Browse products by category with search and filtering
- **Shopping Cart**: Add/remove items with real-time updates
- **User Authentication**: Secure signup/login with JWT tokens
- **Checkout Process**: Stripe-powered payment processing
- **Order Management**: Track order status and history
- **Responsive Design**: Mobile-first design with Tailwind CSS

### 🧑‍💼 Admin Dashboard

- **Product Management**: Create, edit, and delete products
- **Order Management**: View and manage customer orders
- **User Management**: Monitor user accounts and activity
- **Analytics Dashboard**: Real-time sales metrics and charts
- **Coupon System**: Create and manage discount codes
- **Inventory Control**: Track product stock and availability

---

## 🚀 Tech Stack

### Frontend

- **React 18** with Vite build tool
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Zustand** for state management
- **Axios** for API communication
- **Framer Motion** for animations
- **Recharts** for data visualization
- **Lucide React** for icons

### Backend

- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Stripe** for payment processing
- **Cloudinary** for image uploads
- **Redis** for caching (optional)
- **bcryptjs** for password hashing
- **Cookie-parser** for session handling

---

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v16 or higher)
- **MongoDB** database
- **Stripe** account for payments
- **Cloudinary** account for image storage
- **Redis** (optional, for caching)

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd EcommerceStoreWithAdmin
```

### 2. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Stripe
STRIPE_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Redis (optional)
REDIS_URL=your_redis_connection_string

# Server
PORT=5000
NODE_ENV=development
```

### 4. Database Setup

- Ensure MongoDB is running
- The application will automatically create necessary collections

---

## 🚀 Running the Application

### Development Mode

```bash
# Start backend server (with auto-reload)
npm run dev

# In a new terminal, start frontend
cd frontend
npm run dev
```

### Production Mode

```bash
# Build frontend
cd frontend
npm run build
cd ..

# Start production server
npm start
```

The application will be available at:

- **Frontend**: http://localhost:5173 (dev) or http://localhost:5000 (prod)
- **Backend API**: http://localhost:5000/api

---

## 📁 Project Structure

```
EcommerceStoreWithAdmin/
├── backend/                 # Backend server
│   ├── controllers/        # Route controllers
│   ├── lib/               # Database, Redis, Cloudinary configs
│   ├── middleware/        # Authentication middleware
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   └── server.js          # Main server file
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── stores/        # Zustand state management
│   │   └── lib/           # Utility functions
│   ├── public/            # Static assets
│   └── package.json
└── package.json            # Root package.json
```

---

## 🔌 API Endpoints

### Authentication

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Products

- `GET /api/products` - Get all products
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Cart

- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `DELETE /api/cart/:id` - Remove item from cart

### Payments

- `POST /api/payments/create-payment-intent` - Create Stripe payment
- `POST /api/payments/confirm` - Confirm payment

### Analytics (Admin Only)

- `GET /api/analytics/sales` - Sales analytics
- `GET /api/analytics/users` - User analytics

---

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for secure authentication:

- **Registration**: Users can create accounts with email/password
- **Login**: Secure login with JWT token generation
- **Protected Routes**: Admin routes require valid JWT tokens
- **Password Security**: Passwords are hashed using bcryptjs

---

## 💳 Payment Integration

- **Stripe Integration**: Secure payment processing
- **Multiple Payment Methods**: Credit cards, digital wallets
- **Webhook Support**: Real-time payment confirmation
- **Error Handling**: Comprehensive payment error management

---

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Interface**: Clean, intuitive user experience
- **Animations**: Smooth transitions with Framer Motion
- **Loading States**: User feedback during operations
- **Toast Notifications**: Success/error messages

---

## 🚀 Deployment

### Backend Deployment

- Deploy to platforms like Heroku, Railway, or DigitalOcean
- Set environment variables in your hosting platform
- Ensure MongoDB connection is accessible

### Frontend Deployment

- Build the project: `npm run build`
- Deploy the `dist` folder to platforms like Vercel, Netlify, or GitHub Pages

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Justin John Amoroso**

---

## 🙏 Acknowledgments

- **Stripe** for payment processing
- **Cloudinary** for image management
- **Tailwind CSS** for styling framework
- **React** community for excellent documentation

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Ensure you've followed the setup instructions correctly

---

**Happy Coding! 🎉**
