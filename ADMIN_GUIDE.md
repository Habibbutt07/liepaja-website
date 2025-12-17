# Store Admin Panel Guide

## Overview

The Store Admin Panel provides comprehensive management tools for the Liepāja Store. Access is protected by authentication, and only authorized administrators can manage products, orders, and view analytics.

## Accessing the Admin Panel

### Method 1: From Side Menu
1. Click the menu icon (☰) in the top-left corner
2. Scroll down to find "🔐 Store Admin Login"
3. Click to navigate to the login page

### Method 2: Direct URL
Navigate to: `http://localhost:3000/store/admin/login`

## Login Credentials

**Demo Credentials:**
- **Email:** `admin@liepaja.lv`
- **Password:** `admin123`

**Note:** In production, these credentials should be changed and stored securely on a backend server.

## Admin Panel Features

### 1. Dashboard Tab 📊
- **Overview Statistics:**
  - Total Products count
  - Total Orders count
  - Total Revenue
  - Low Stock Items alert

- **Recent Orders:** View the 5 most recent orders
- **Low Stock Alert:** Products with less than 10 items in stock

### 2. Products Tab 📦
- **View All Products:** Complete list with sorting and filtering
- **Add New Product:** Create new products with full details
- **Edit Products:** Update product information
- **Delete Products:** Remove products from the store
- **Filtering Options:**
  - Filter by category
  - Sort by: Name, Price (Low/High), Stock level
- **Product Fields:**
  - Name, Category, Description
  - Price, Old Price (for discounts)
  - Stock quantity
  - Featured product toggle

### 3. Orders Tab 🛒
- **View All Orders:** Complete order history
- **Order Details:**
  - Customer information (name, email, phone)
  - Shipping address
  - Order items and quantities
  - Total amount
  - Order status
- **Order Management:**
  - Update order status (Pending, Processing, Shipped, Delivered, Cancelled)
  - View order timeline

### 4. Categories Tab 📁
- **View All Categories:** List of product categories
- **Category Information:**
  - Category name and slug
  - Number of products in each category
- **Category Management:** Edit and delete categories (coming soon)

### 5. Records & Analytics Tab 📋
- **Sales Summary:**
  - Total sales revenue
  - Total number of orders
  - Average order value
- **Product Statistics:**
  - Total products count
  - Featured products count
  - Out of stock items
  - Low stock items
- **Category Distribution:** Products per category
- **Top Selling Products:** Featured products list
- **Order History Table:** Complete records of all orders

## Features

### Product Management
- ✅ Add new products
- ✅ Edit existing products
- ✅ Delete products
- ✅ Sort products (name, price, stock)
- ✅ Filter by category
- ✅ Set featured products
- ✅ Manage pricing and discounts
- ✅ Stock management

### Order Management
- ✅ View all orders
- ✅ See customer details
- ✅ View shipping information
- ✅ Update order status
- ✅ Track order history

### Analytics & Records
- ✅ Sales statistics
- ✅ Product analytics
- ✅ Category distribution
- ✅ Order records
- ✅ Revenue tracking

## Security

- **Authentication Required:** Admin panel is protected and requires login
- **Session Management:** Login persists across page refreshes (stored in localStorage)
- **Logout Function:** Secure logout button in admin header

## Navigation

After logging in, you'll be redirected to the admin dashboard. You can:
- Switch between tabs using the tab navigation
- Logout using the "Logout" button in the header
- Access is maintained until you logout

## Demo Mode

**Important:** This is a demo version. Changes made to products and orders are:
- ✅ Visible during the session
- ❌ Not persisted after page refresh (for products)
- ✅ Orders are stored in context (persist during session)

For production use, connect to a backend API and database to persist all changes.

## Troubleshooting

**Can't access admin panel?**
- Make sure you're logged in
- Check that you're using the correct credentials
- Clear browser cache and try again

**Changes not saving?**
- This is expected in demo mode
- In production, connect to a backend API

**Forgot password?**
- Use demo credentials: admin@liepaja.lv / admin123
- In production, implement password reset functionality

## Future Enhancements

For production, consider adding:
- User management (multiple admin accounts)
- Password reset functionality
- Email notifications for orders
- Export functionality (CSV, PDF)
- Advanced analytics and charts
- Inventory management
- Bulk product operations
- Image upload for products
- Order printing/invoicing

