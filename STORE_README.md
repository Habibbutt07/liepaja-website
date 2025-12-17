# Liepāja Store - Documentation

## Overview

The Liepāja Store is a fully functional online store integrated into the Liepaja city website. It allows visitors to browse, search, and purchase Liepāja-themed souvenirs and products.

## Features

### 1. Store Pages
- **Store Homepage** (`/store`) - Main store page with product listing, filters, and search
- **Product Detail** (`/store/product/:id`) - Individual product pages with images, descriptions, and add to cart
- **Checkout** (`/store/checkout`) - Order form with shipping information
- **Order Success** (`/store/order-success/:orderId`) - Confirmation page after order placement
- **Admin Panel** (`/store/admin`) - Product management interface

### 2. Product Categories
- Souvenirs
- Clothing
- Handmade
- Beach Items
- Food
- Books

### 3. Core Features
- ✅ Product browsing with pagination
- ✅ Category filtering
- ✅ Price range filtering
- ✅ Search functionality
- ✅ Shopping cart (localStorage-based)
- ✅ Product detail pages
- ✅ Checkout process
- ✅ Order confirmation
- ✅ Admin panel for product management
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Cart icon in header with item count

### 4. Integration Points

#### Navigation Menu
- "Liepāja Store" link added to the left side menu
- Accessible from the hamburger menu (☰) icon

#### Chatbot Integration
- Chatbot can search store products
- Ask: "show me products", "I want to buy souvenirs", "what's in the store"
- Returns formatted product results with prices and links

#### Search Bar
- Store-wide search bar on store page
- Real-time search results dropdown
- Click results to navigate to products

## File Structure

```
src/
├── data/
│   └── storeProducts.js          # Product and category data
├── context/
│   └── StoreContext.js            # Store state management (cart, products)
├── api/
│   └── storeApi.js                # Store search API functions
├── components/
│   ├── ProductCard.js             # Product card component
│   ├── ProductCard.css
│   ├── StoreSearchBar.js          # Store search component
│   ├── StoreSearchBar.css
│   └── ShoppingCart.js            # Shopping cart sidebar
│   └── ShoppingCart.css
└── pages/
    ├── Store.js                    # Store main page
    ├── Store.css
    ├── ProductDetail.js            # Product detail page
    ├── ProductDetail.css
    ├── Checkout.js                 # Checkout page
    ├── Checkout.css
    ├── OrderSuccess.js             # Order success page
    ├── OrderSuccess.css
    ├── StoreAdmin.js               # Admin panel
    └── StoreAdmin.css
```

## API Functions

### Search Products
```javascript
import { searchStoreProducts } from '../api/storeApi';

const results = searchStoreProducts('t-shirt');
// Returns array of products matching the query
```

### Get All Products
```javascript
import { getAllStoreProducts } from '../api/storeApi';

const allProducts = getAllStoreProducts();
```

### Get Products by Category
```javascript
import { getProductsByCategorySlug } from '../api/storeApi';

const products = getProductsByCategorySlug('clothing');
```

### Get Product by ID
```javascript
import { getStoreProductById } from '../api/storeApi';

const product = getStoreProductById(1);
```

## Store Context Usage

```javascript
import { useStore } from '../context/StoreContext';

function MyComponent() {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemCount,
    searchProducts,
    getAllProducts,
    getAllCategories
  } = useStore();
  
  // Use store functions...
}
```

## Demo Products

The store comes with 12 pre-loaded demo products:
1. Liepāja T-shirt
2. Liepāja Skyline Poster
3. Amber Jewelry Set
4. Liepāja Beach Towel
5. Handmade Wooden Crafts
6. Liepāja Postcards Set
7. Latvian Herbal Tea Box
8. Liepāja History Book
9. Liepāja Hoodie
10. Beach Bag with Liepāja Logo
11. Ceramic Liepāja Mug
12. Handwoven Scarf

## Shopping Cart

- Cart is stored in localStorage
- Persists across page refreshes
- Cart icon in header shows item count
- Click cart icon to open cart sidebar
- Add/remove items, update quantities
- Proceed to checkout from cart

## Admin Panel

Access at `/store/admin`

Features:
- View all products
- Add new products
- Edit existing products
- Delete products
- View categories
- View orders (placeholder)

**Note:** In demo mode, changes are not persisted. In production, connect to a backend API.

## Chatbot Commands

Users can ask the chatbot:
- "show me products"
- "I want to buy souvenirs"
- "what's in the store"
- "search for t-shirt"
- "show me clothing"

The chatbot will return formatted product results with:
- Product name
- Price
- Description
- Category
- Link to product page

## Routes

All store routes are registered in `App.js`:
- `/store` - Store homepage
- `/store/product/:id` - Product detail
- `/store/checkout` - Checkout
- `/store/order-success/:orderId` - Order success
- `/store/admin` - Admin panel

## Styling

- Uses the same color scheme as the main website (#1a5490)
- Responsive design for all screen sizes
- Smooth animations and transitions
- Modern, clean UI

## Future Enhancements

For production use, consider:
1. Backend API integration
2. Payment gateway integration
3. User authentication
4. Order history for users
5. Product reviews and ratings
6. Wishlist functionality
7. Email notifications
8. Inventory management
9. Shipping calculator
10. Multi-language support

## Testing

To test the store:
1. Navigate to `/store`
2. Browse products
3. Use filters and search
4. Add products to cart
5. Complete checkout process
6. Test admin panel at `/store/admin`

## Notes

- All product data is currently stored in `storeProducts.js`
- Cart uses localStorage (client-side only)
- Orders are stored in context (not persisted)
- For production, implement backend API and database

