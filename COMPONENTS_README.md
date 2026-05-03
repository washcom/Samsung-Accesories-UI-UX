# Samsung E-Commerce UI - Component Documentation

## 🎨 Design System

### Color Palette
```css
Primary: #4A6CF7
Primary Dark: #3B5BDB
Accent Blue: #2563EB
Background: #F5F6FA
Surface (white): #FFFFFF
Card: #E5E7EB
Text Primary: #111827
Text Secondary: #6B7280
```

### Design Principles
- Clean, minimal, premium tech aesthetic
- Soft shadows with rounded corners (12px-20px)
- Spacious layout with clear hierarchy
- Smooth transitions (300ms ease-in-out)
- Hover effects: slight scale + color changes

---

## 📦 Component Structure

### Main Components

#### 1. **Navbar** (`/src/app/components/Navbar.tsx`)
Sticky navigation bar with search, cart, and user profile.

**Features:**
- Responsive mobile menu
- Search bar
- Cart badge with count
- User profile icon
- Desktop/mobile navigation links

**API Endpoints:**
- `GET /api/cart/count` - Get cart item count
- `GET /api/user` - Get user information

---

#### 2. **HeroSection** (`/src/app/components/HeroSection.tsx`)
Large banner with promotional content and CTA buttons.

**Features:**
- Headline and subtext
- Product image
- Two CTA buttons (Shop Phones, View Accessories)
- Decorative background elements

**API Endpoints:**
- `GET /api/banners` - Get hero banner content

---

#### 3. **ProductCard** (`/src/app/components/ProductCard.tsx`)
Reusable product card component.

**Props:**
- `id` - Product ID
- `name` - Product name
- `price` - Current price
- `originalPrice` - Optional original price
- `image` - Product image URL
- `discount` - Optional discount percentage

**Features:**
- Product image with hover scale effect
- Discount badge
- Price display (with strikethrough for original price)
- Add to Cart button

**API Endpoints:**
- `POST /api/cart/add` - Add product to cart

---

#### 4. **FeaturedProducts** (`/src/app/components/FeaturedProducts.tsx`)
Grid of featured product cards.

**Mock Data:** 8 featured products (Galaxy S24 Ultra, Z Fold 5, etc.)

**API Endpoints:**
- `GET /api/products?featured=true` - Get featured products

---

#### 5. **CategoryCard** (`/src/app/components/CategoryCard.tsx`)
Category card with image and product count.

**Props:**
- `id` - Category ID
- `title` - Category name
- `image` - Category image URL
- `count` - Number of products in category

---

#### 6. **ShopByCategory** (`/src/app/components/ShopByCategory.tsx`)
Grid of category cards.

**Categories:**
- Smartphones (24 products)
- Earbuds (12 products)
- Chargers (18 products)
- Smartwatches (8 products)
- Cases (35 products)

**API Endpoints:**
- `GET /api/categories` - Get all categories

---

#### 7. **ProductListingPage** (`/src/app/components/ProductListingPage.tsx`)
Full product listing with filters.

**Features:**
- Left sidebar with filters:
  - Price range slider
  - Storage options (128GB, 256GB, 512GB, 1TB)
  - Category filter
- Product grid (responsive: 1-3 columns)
- Mobile filter toggle

**API Endpoints:**
- `GET /api/products` - Get all products
- `GET /api/products?category={id}` - Filter by category
- `GET /api/products?filter=...` - Apply filters

---

#### 8. **ProductDetailsPage** (`/src/app/components/ProductDetailsPage.tsx`)
Detailed product view.

**Features:**
- Image gallery with thumbnails
- Product name and rating
- Price display
- Specifications table (RAM, Storage, Camera, Battery, Display, Processor)
- Quantity selector (+/- buttons)
- Add to Cart button

**API Endpoints:**
- `GET /api/products/{id}` - Get product details
- `POST /api/cart/add` - Add product to cart

---

#### 9. **CartPage** (`/src/app/components/CartPage.tsx`)
Shopping cart with item management.

**Features:**
- Cart item list with images
- Quantity controls (+/- buttons)
- Remove item button
- Order summary sidebar:
  - Subtotal
  - Shipping (FREE)
  - Tax (10%)
  - Total
- Proceed to Checkout button

**API Endpoints:**
- `GET /api/cart` - Get cart items
- `PUT /api/cart/update` - Update item quantity
- `DELETE /api/cart/remove` - Remove item from cart

---

#### 10. **CheckoutPage** (`/src/app/components/CheckoutPage.tsx`)
Checkout form and order summary.

**Features:**
- Shipping information form:
  - Name, Email, Phone
  - Address, City, State, ZIP, Country
- Payment method selection:
  - Credit Card
  - Samsung Pay
- Credit card form (Card Number, Expiry, CVV)
- Order summary sidebar
- Place Order button

**API Endpoints:**
- `POST /api/orders` - Create new order

---

#### 11. **Footer** (`/src/app/components/Footer.tsx`)
Site footer with links and newsletter.

**Features:**
- Company info
- Quick links (About, Support, Privacy, Terms)
- Contact information
- Newsletter subscription form
- Social media links (Facebook, Twitter, Instagram, YouTube)
- Copyright notice

**API Endpoints:**
- `POST /api/newsletter` - Subscribe to newsletter

---

## 🔌 API Integration Points

### Authentication & User
- `GET /api/user` - Get current user
- `GET /api/cart/count` - Get cart item count

### Products
- `GET /api/products` - Get all products
- `GET /api/products?featured=true` - Get featured products
- `GET /api/products?category={id}` - Filter by category
- `GET /api/products?filter=...` - Apply custom filters
- `GET /api/products/{id}` - Get product details

### Categories
- `GET /api/categories` - Get all categories

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update item quantity
- `DELETE /api/cart/remove` - Remove item from cart

### Orders
- `POST /api/orders` - Create new order

### Marketing
- `GET /api/banners` - Get hero banners
- `POST /api/newsletter` - Newsletter subscription

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (3-4 columns)

### Mobile Features
- Collapsible hamburger menu
- Touch-friendly buttons (min 44px)
- Single column product grid
- Sticky navbar
- Mobile-optimized filters (toggle show/hide)

---

## 🎯 Key Interactions

### Buttons
```css
hover:scale-105
hover:bg-[#3B5BDB]
transition-all duration-300
```

### Cards
```css
hover:shadow-xl
hover:-translate-y-2
transition-all duration-300
```

### Images
```css
group-hover:scale-110
transition-transform duration-300
```

---

## 🚀 Next Steps for Development

1. **Set up React Router** for proper page navigation
2. **Implement API calls** using fetch or axios
3. **Add state management** (Context API or Redux)
4. **Implement authentication** flow
5. **Add form validation** to checkout
6. **Integrate payment gateway** (Stripe, PayPal, etc.)
7. **Add loading states** and error handling
8. **Implement search** functionality
9. **Add product filtering** logic
10. **Create admin dashboard** for product management

---

## 💡 Mock Data

All components currently use mock data to demonstrate functionality. Replace mock data with actual API calls when backend is ready.

**Mock Data Locations:**
- `FeaturedProducts.tsx` - Featured products array
- `ShopByCategory.tsx` - Categories array
- `ProductListingPage.tsx` - All products array
- `ProductDetailsPage.tsx` - Single product object
- `CartPage.tsx` - Cart items array
- `CheckoutPage.tsx` - Order summary object
