# Prompt for Claude.ai

Copy and paste the following prompt into Claude.ai:

---

## System Architecture Analysis Request

I have a React-based Single Page Application (SPA) for a municipal city website (Liepaja, Latvia). Please analyze the architecture and provide insights.

### Technology Stack
- React 18.2.0
- React Router DOM 6.20.0
- React Scripts 5.0.1 (Create React App)
- No backend - fully client-side application
- localStorage for data persistence

### Architecture Pattern
- **Type**: Single Page Application (SPA) with client-side routing
- **State Management**: React Context API with 4 nested providers:
  1. LanguageContext (bilingual LV/EN support)
  2. SearchContext (global search)
  3. StoreContext (e-commerce cart, products, orders)
  4. AuthContext (admin authentication)
- **Data Storage**: Static JavaScript data files + localStorage

### Key Features
1. **E-Services Portal**: Service catalog with step-by-step guides, bilingual content, categories (documents, education, transport, sports, environment, appointments, events, participation)
2. **E-Commerce Store**: Product catalog, shopping cart, checkout, order management, admin dashboard
3. **AI Chatbot (Liepu)**: Rule-based conversational assistant integrated with services and store search
4. **Parking Information**: Zone-based parking system with real-time availability
5. **Content Pages**: Home, About, News, Contact, Residents, Entrepreneurs, Guests, Procurement, Documents

### Project Structure
```
src/
├── components/     # Reusable UI (Header, Footer, Chatbot, ShoppingCart, etc.)
├── pages/         # Route components (Home, Services, Store, Admin, etc.)
├── context/       # Context providers (Language, Search, Store, Auth)
├── data/          # Static data (servicesData.js, storeProducts.js, parkingData.js)
├── api/           # API functions (storeApi.js - currently uses static data)
└── utils/         # Utility functions
```

### Routing
- Public routes for all pages
- Protected route: `/store/admin` (requires authentication)
- Dynamic routes: `/services/:serviceId`, `/store/product/:id`, `/store/order-success/:orderId`

### Current Limitations
- No backend API (all data is static)
- Demo authentication only (not production-ready)
- No database (localStorage only)
- No real-time updates
- No user accounts (except admin)

### Questions/Requests
1. Evaluate the current architecture - what are the strengths and weaknesses?
2. Suggest improvements for scalability and maintainability
3. Recommend best practices for migrating from static data to a backend API
4. Analyze the Context API usage - is the nested provider structure optimal?
5. Provide recommendations for production-ready authentication
6. Suggest testing strategies for this architecture
7. Recommend performance optimization techniques
8. Analyze the chatbot implementation - suggest improvements or alternatives

Please provide detailed, actionable recommendations with code examples where applicable.

---


