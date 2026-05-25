# Liepaja City Website - System Architecture

## Overview
A modern, responsive React-based Single Page Application (SPA) that serves as a municipal website for Liepaja city, featuring e-services, information pages, an e-commerce store, and an AI-powered chatbot assistant.

## Technology Stack

### Frontend Framework
- **React 18.2.0** - UI library for building component-based interfaces
- **React Router DOM 6.20.0** - Client-side routing and navigation
- **React Scripts 5.0.1** - Build tooling and development server (Create React App)

### Core Technologies
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling and responsive design
- **HTML5** - Semantic markup
- **localStorage API** - Client-side data persistence

## Architecture Pattern

### Application Type
**Single Page Application (SPA)** with client-side routing

### State Management Pattern
**Context API** - React's built-in state management solution using multiple context providers:
- `LanguageContext` - Manages bilingual (LV/EN) language switching
- `SearchContext` - Handles global search functionality
- `StoreContext` - Manages e-commerce cart, orders, and product data
- `AuthContext` - Handles admin authentication for store management

### Data Storage
- **Static Data Files** - JSON-like data structures in JavaScript files:
  - `servicesData.js` - E-services catalog
  - `storeProducts.js` - Product catalog and categories
  - `parkingData.js` - Parking zone information
- **localStorage** - Browser-based persistence for:
  - Shopping cart state
  - User authentication tokens
  - Language preferences

## System Layers

### 1. Presentation Layer

#### Components Structure
```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header with menu
│   ├── Footer.js       # Site footer
│   ├── Chatbot.js      # AI assistant chatbot (Liepu)
│   ├── ShoppingCart.js # Cart sidebar component
│   ├── ProductCard.js  # Product display card
│   ├── StoreSearchBar.js # Product search component
│   ├── ImageWithFallback.js # Image loading with fallback
│   └── ProtectedRoute.js # Route authentication guard
│
├── pages/              # Page-level components (routes)
│   ├── Home.js         # Landing page
│   ├── About.js        # City information
│   ├── Services.js     # E-services listing
│   ├── ServiceDetail.js # Individual service details
│   ├── ServiceAccess.js # Service access instructions
│   ├── Parking.js      # Parking zones and information
│   ├── News.js         # News articles
│   ├── Contact.js      # Contact form and information
│   ├── Residents.js    # Resident-focused content
│   ├── Entrepreneurs.js # Business services
│   ├── Guests.js       # Tourist information
│   ├── Procurement.js  # Public procurement
│   ├── Documents.js    # Document library
│   ├── Store.js        # E-commerce storefront
│   ├── ProductDetail.js # Product detail page
│   ├── Checkout.js     # Order checkout
│   ├── OrderSuccess.js # Order confirmation
│   ├── StoreAdmin.js   # Admin dashboard
│   └── AdminLogin.js   # Admin authentication
```

### 2. State Management Layer

#### Context Providers (Nested Hierarchy)
```
LanguageProvider (outermost)
  └── SearchProvider
      └── StoreProvider
          └── AuthProvider (innermost)
              └── Router
                  └── App Components
```

**Context Responsibilities:**
- **LanguageContext**: Bilingual support (Latvian/English), language preference persistence
- **SearchContext**: Global search state and functionality
- **StoreContext**: Shopping cart, product catalog, order management, cart persistence
- **AuthContext**: Admin authentication, session management, protected route access

### 3. Routing Layer

#### Route Configuration
- **Public Routes**: All pages except admin dashboard
- **Protected Routes**: `/store/admin` (requires authentication)
- **Dynamic Routes**: 
  - `/services/:serviceId` - Service detail pages
  - `/store/product/:id` - Product detail pages
  - `/store/order-success/:orderId` - Order confirmation

#### Navigation Flow
```
Home (/)
├── About (/about)
├── Services (/services)
│   ├── Service List (/services)
│   ├── Service Detail (/services/:serviceId)
│   └── Service Access (/services/access)
├── Parking (/parking)
├── News (/news)
├── Contact (/contact)
├── Residents (/residents)
├── Entrepreneurs (/entrepreneurs)
├── Guests (/guests)
├── Procurement (/procurement)
├── Documents (/documents)
└── Store (/store)
    ├── Product List (/store)
    ├── Product Detail (/store/product/:id)
    ├── Checkout (/store/checkout)
    ├── Order Success (/store/order-success/:orderId)
    └── Admin (/store/admin) [PROTECTED]
        └── Admin Login (/store/admin/login)
```

### 4. Data Layer

#### Data Sources
1. **Static Data Files** (`src/data/`):
   - `servicesData.js` - E-services with bilingual content, categories, processing times
   - `storeProducts.js` - Product catalog, categories, pricing, inventory
   - `parkingData.js` - Parking zones, rates, availability

2. **API Layer** (`src/api/`):
   - `storeApi.js` - Product search, filtering, and retrieval functions
   - Note: Currently uses static data; structured for future API integration

3. **Browser Storage**:
   - `localStorage` - Cart persistence, auth tokens, language preference

### 5. Business Logic Layer

#### Key Features

**E-Services Management**
- Service catalog with categories (documents, education, transport, sports, etc.)
- Step-by-step service guides
- Bilingual service descriptions
- External e-services portal links

**E-Commerce Store**
- Product catalog with categories
- Shopping cart with persistence
- Product search functionality
- Order management system
- Admin dashboard for product management

**AI Chatbot (Liepu)**
- Rule-based conversational interface
- Service information retrieval
- Product search integration
- Multi-language support (LV/EN)
- Context-aware responses

**Parking Information**
- Zone-based parking system
- Real-time availability display
- Pricing information
- Integration with Mobilly app

**Content Management**
- News articles
- City information pages
- Document library
- Procurement opportunities

## Component Communication Flow

### Data Flow Pattern
```
User Interaction
    ↓
Component Event Handler
    ↓
Context Hook (useStore, useAuth, etc.)
    ↓
Context Provider State Update
    ↓
localStorage Persistence (if applicable)
    ↓
Component Re-render
```

### Example: Adding Product to Cart
```
ProductCard Component
    ↓ (onClick)
handleAddToCart()
    ↓
useStore().addToCart(product)
    ↓
StoreContext.addToCart()
    ↓
setCart() state update
    ↓
useEffect() saves to localStorage
    ↓
All components using cart re-render
```

## Security Architecture

### Authentication
- **Admin Authentication**: Simple credential-based (demo: admin@liepaja.lv / admin123)
- **Session Management**: localStorage-based token storage
- **Protected Routes**: Route guard component checks authentication
- **Note**: Current implementation is demo-only; production would require backend API

### Data Security
- Client-side only (no backend)
- No sensitive data transmission
- localStorage used for non-sensitive state persistence

## Performance Considerations

### Optimization Strategies
- **Code Splitting**: React Router lazy loading (potential future enhancement)
- **Image Optimization**: ImageWithFallback component with error handling
- **State Management**: Context API for efficient state sharing
- **localStorage Caching**: Cart and preferences persist across sessions

### Build Process
- **Development**: `npm start` - Hot module replacement, development server
- **Production**: `npm run build` - Optimized bundle, minification, code splitting

## Deployment Architecture

### Build Output
- Static files generated in `build/` directory
- Can be deployed to any static hosting:
  - Netlify
  - Vercel
  - AWS S3 + CloudFront
  - GitHub Pages
  - Traditional web server (Apache/Nginx)

### Environment
- **Development**: Local development server (port 3000)
- **Production**: Static file serving

## Integration Points

### External Services (Future/Planned)
- E-services portal (external links)
- Mobilly parking app integration
- Payment gateway (for store checkout)
- Email service (for contact form)
- Backend API (for admin, orders, user data)

### Current Integrations
- Static data files
- Browser localStorage
- React Router for navigation

## Scalability Considerations

### Current Limitations
- Static data files (not scalable for large datasets)
- Client-side only (no backend persistence)
- No real-time updates
- No user accounts (except admin)

### Future Enhancements
- Backend API integration
- Database for dynamic content
- User authentication system
- Real-time updates (WebSockets)
- Content Management System (CMS)
- API-based chatbot (NLP integration)

## Development Workflow

### Project Structure
```
liepaja-lv/
├── public/              # Static assets
│   ├── images/         # Image assets
│   └── index.html      # HTML template
├── src/
│   ├── api/            # API functions
│   ├── components/     # Reusable components
│   ├── context/        # Context providers
│   ├── data/           # Static data files
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions
│   ├── App.js          # Root component
│   └── index.js        # Entry point
├── package.json        # Dependencies
└── README.md           # Documentation
```

### Key Files
- `src/App.js` - Application root, routing configuration, context providers
- `src/index.js` - Application entry point
- `package.json` - Dependencies and scripts

## Testing Strategy

### Current State
- No automated tests configured
- Manual testing approach

### Recommended Testing
- Unit tests for utility functions
- Component tests for UI components
- Integration tests for context providers
- E2E tests for critical user flows

## Monitoring & Analytics

### Current State
- No monitoring/analytics implemented

### Recommended Additions
- Error tracking (Sentry, LogRocket)
- User analytics (Google Analytics)
- Performance monitoring
- User behavior tracking

---

## Summary

**Architecture Type**: Client-side SPA with Context API state management

**Key Characteristics**:
- ✅ Component-based React architecture
- ✅ Client-side routing with React Router
- ✅ Context API for state management
- ✅ Static data with localStorage persistence
- ✅ Bilingual support (LV/EN)
- ✅ Responsive design
- ✅ Modular component structure
- ⚠️ No backend (static data only)
- ⚠️ Demo authentication (not production-ready)

**Best Suited For**:
- Municipal information websites
- E-services portals
- Small to medium e-commerce stores
- Content-driven websites
- Prototyping and MVP development


