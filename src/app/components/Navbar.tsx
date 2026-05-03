import { Home, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

// API Placeholder: GET /api/cart/count, GET /api/user

type Page = 'home' | 'products' | 'product-detail' | 'cart' | 'checkout';

type NavbarProps = {
  currentPage: Page;
  onPageChange: (page: Page) => void;
};

const demoPages: Array<{ label: string; value: Page }> = [
  { label: 'Product Listing', value: 'products' },
  { label: 'Product Details', value: 'product-detail' },
  { label: 'Shopping Cart', value: 'cart' },
  { label: 'Checkout', value: 'checkout' },
];

export function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [cartCount] = useState(3); // Mock cart count
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const actionButtonClass =
    'rounded-full border border-transparent p-2.5 text-[#FFE0D5] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#FFB79B] hover:bg-white/12 hover:text-white hover:shadow-[0_10px_24px_rgba(121,34,16,0.2)]';
  const headerMessages = [
    'Get in touch 0111660007',
    'WhatsApp us on 0111660007',
    'Email us on mbeviwarren@gmail.com',
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      <style>{`
        @keyframes vertical-marquee {
          0%, 22% { transform: translateY(0); }
          30%, 52% { transform: translateY(-1.5rem); }
          60%, 82% { transform: translateY(-3rem); }
          90%, 100% { transform: translateY(-4.5rem); }
        }
      `}</style>
      <div className="border-b border-[#F3B39B] bg-[linear-gradient(90deg,#FFF7F2,#FFECE3,#FFF7F2)]">
        <div className="flex min-h-12 w-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden text-center">
            <div className="h-6">
              <div className="animate-[vertical-marquee_9s_ease-in-out_infinite]">
                {headerMessages.concat(headerMessages[0]).map((message, index) => (
                  <p
                    key={`${message}-${index}`}
                    className="flex h-6 items-center justify-center text-sm font-semibold tracking-[0.18em] text-[#8F2F10] drop-shadow-[0_1px_0_rgba(255,255,255,0.6)] sm:text-base"
                  >
                    {message}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="w-full border-b border-[#D24E1F] bg-[#EA5B2A] shadow-[0_10px_30px_rgba(163,58,20,0.28)]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 items-center justify-between gap-4 py-3">
          <div className="flex min-w-0 items-center gap-8">
            <button
              onClick={() => onPageChange('home')}
              className={`${actionButtonClass} ${
                currentPage === 'home'
                  ? 'border-[#FFB79B] bg-white/14 text-white shadow-[0_10px_24px_rgba(121,34,16,0.2)]'
                  : ''
              }`}
            >
              <Home size={24} />
            </button>

            {/* Logo */}
            <button
              onClick={() => onPageChange('home')}
              className="flex-shrink-0 text-2xl font-black tracking-[0.28em] text-white transition-all duration-300 ease-out hover:text-[#FFF1EB]"
            >
              SAMSUNG
            </button>
          </div>

          <div className="hidden min-w-0 flex-1 justify-center px-4 md:flex xl:px-6">
            <div className="flex max-w-full items-center gap-2 overflow-x-auto rounded-full border border-[#F38C67] bg-[#D94C20] p-1">
              {demoPages.map((page) => (
                <button
                  key={page.value}
                  onClick={() => onPageChange(page.value)}
                  className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    currentPage === page.value
                      ? 'bg-white text-[#D94C20] shadow-[0_10px_24px_rgba(121,34,16,0.16)]'
                      : 'text-[#FFF1EB] hover:bg-white/12 hover:text-white'
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cart and Profile Icons */}
          <div className="flex items-center space-x-4">
            <button className={`relative ${actionButtonClass}`}>
              <ShoppingCart className="text-inherit" size={24} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#D94C20] shadow-[0_6px_16px_rgba(121,34,16,0.25)]">
                  {cartCount}
                </span>
              )}
            </button>
            <button className={`hidden sm:block ${actionButtonClass}`}>
              <User className="text-inherit" size={24} />
            </button>
            <button
              className={`xl:hidden ${actionButtonClass}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="text-inherit" size={24} /> : <Menu className="text-inherit" size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="space-y-4 border-t border-[#F38C67] py-4 xl:hidden">
            <div className="flex gap-2 overflow-x-auto px-4">
              {demoPages.map((page) => (
                <button
                  key={page.value}
                  onClick={() => {
                    onPageChange(page.value);
                    setIsMenuOpen(false);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    currentPage === page.value
                      ? 'bg-white text-[#D94C20] shadow-[0_10px_24px_rgba(121,34,16,0.16)]'
                      : 'bg-[#D94C20] text-[#FFF1EB] hover:bg-white/12 hover:text-white'
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>
        )}
        </div>
      </nav>
    </div>
  );
}
