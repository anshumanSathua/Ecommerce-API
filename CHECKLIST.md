# ✅ Unified Ecommerce API – Detailed Development Checklist

A comprehensive checklist of all steps involved in building the Unified Ecommerce API with both basic and advanced features.

---

## 🔰 PHASE 1: Project Setup

- [x] Initialize project with `npm init -y`
- [x] Install dependencies & setup typescript
- [x] Install and configure `dotenv`
- [x] Setup folder structure:
  ```
    src/
  ├── config/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── middlewares/
  ├── utils/
  ├── validators/
  ├── types/
  ├── index.ts
  └── server.ts
  ```
- [x] Setup basic Express server with health check route

---

## 🛡️ PHASE 2: Core Middleware & Security

- [ ] Centralized error handler (`AppError`, `errorHandler`)
- [ ] Async error wrapper utility (`catchAsync`)
- [ ] Install and configure security middleware:
  - [ ] `helmet`
  - [ ] `xss-clean` or `xss`
  - [ ] `express-mongo-sanitize`
  - [ ] `cors`
- [ ] Configure basic logging (morgan or custom)
- [ ] Create reusable Zod schema validation middleware
- [ ] Environment config loader for managing secrets

---

## 🔐 PHASE 3: User Authentication & Roles

- [ ] Create `User` model with roles (user/admin)
- [ ] Register route with validation and password hashing
- [ ] Login route with JWT generation
- [ ] Protect routes using JWT middleware
- [ ] Role-based access control middleware
- [ ] Get current user profile route
- [ ] Update user profile route

---

## 🛍️ PHASE 4: Categories & Products

- [ ] Create `Category` and `Subcategory` models
- [ ] Admin-only CRUD for categories and subcategories
- [ ] Create `Product` model
- [ ] Admin-only Product CRUD
- [ ] Product listing endpoints:
  - [ ] Search
  - [ ] Filter by category, price, etc.
  - [ ] Sort by price/date
  - [ ] Pagination
- [ ] Upload product images using Multer/Cloudinary

---

## 🛒 PHASE 5: Cart System

- [ ] Create `Cart` model
- [ ] Add product to cart
- [ ] Update quantity of cart items
- [ ] Remove item from cart
- [ ] Clear entire cart
- [ ] Fetch user cart

---

## 📦 PHASE 6: Orders & Payments

- [ ] Create `Order` model
- [ ] Create order from cart contents
- [ ] Order status flow: pending → paid → shipped → delivered
- [ ] Integrate Stripe or Razorpay for payments (optional)
- [ ] Admin: view and update any order
- [ ] User: view order history and single order details

---

## ❤️ PHASE 7: Wishlist (Optional Feature)

- [ ] Add wishlist field to `User` model
- [ ] Add/remove product to wishlist
- [ ] Fetch current user's wishlist

---

## 🌟 PHASE 8: Reviews & Ratings

- [ ] Create `Review` model
- [ ] Allow review only if product was purchased
- [ ] Add/edit/delete review
- [ ] Auto-calculate average product rating

---

## 📬 PHASE 9: Addresses & Coupons

- [ ] Add address array in `User` model
- [ ] CRUD for user shipping addresses
- [ ] Create `Coupon` model
- [ ] Admin: create/edit/delete coupons
- [ ] User: apply coupon to order/cart
- [ ] Validate expiry date and usage limits

---

## 📈 PHASE 10: Admin Analytics

- [ ] Total revenue and sales count
- [ ] Daily/monthly order trends
- [ ] Top-selling products
- [ ] Total registered users

---

## 🚀 PHASE 11: Deployment

- [ ] Prepare production `.env`
- [ ] Transpile TypeScript using `tsc`
- [ ] Serve with `node dist/index.js`
- [ ] Host on Render, Railway, or any cloud provider
- [ ] Add `/health` check route
- [ ] Enable logging and error tracking for production

---

## 📦 Optional Utilities

- [ ] Custom logger with Winston or similar
- [ ] Global response formatter
- [ ] Pagination utility helper
