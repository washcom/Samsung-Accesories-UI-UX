import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ShopByCategory } from './components/ShopByCategory';
import { ProductListingPage } from './components/ProductListingPage';
import { ProductDetailsPage } from './components/ProductDetailsPage';
import { CartPage } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { Footer } from './components/Footer';

type Page = 'home' | 'products' | 'product-detail' | 'cart' | 'checkout';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* Navbar - Brand nav, search, cart, and page switcher combined */}
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Page Content */}
      {currentPage === 'home' && (
        <div className="w-full py-8">
          <div className="space-y-10">
            {/* Hero Section - Main banner with CTA buttons */}
            <HeroSection />

            {/* Featured Products - Grid of product cards */}
            <FeaturedProducts />

            {/* Shop by Category - Category cards with images */}
            <ShopByCategory />
          </div>
        </div>
      )}

      {/* Product Listing Page - With filters sidebar and product grid */}
      {currentPage === 'products' && <ProductListingPage />}

      {/* Product Details Page - Image gallery, specs, quantity selector, add to cart */}
      {currentPage === 'product-detail' && <ProductDetailsPage />}

      {/* Cart Page - Cart items list, quantity update, remove item, total price */}
      {currentPage === 'cart' && <CartPage />}

      {/* Checkout Page - Shipping form, payment method, order summary */}
      {currentPage === 'checkout' && <CheckoutPage />}

      {/* Footer - Links, newsletter, and social media */}
      <Footer />
    </div>
  );
}
