import { ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// API Placeholder: POST /api/cart/add

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
}

export function ProductCard({ id, name, price, originalPrice, image, discount }: ProductCardProps) {
  const handleAddToCart = () => {
    // API Call: POST /api/cart/add with product id
    console.log(`Adding product ${id} to cart`);
  };

  return (
    <div className="group overflow-hidden border border-[#F0D8CB] bg-[#FFF7F1] shadow-[0_18px_44px_rgba(17,24,39,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(217,76,32,0.14)]">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-[#FFE7DA]">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {discount && (
          <div className="absolute right-4 top-4 bg-[#EA5B2A] px-3 py-1 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(217,76,32,0.2)]">
            -{discount}%
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-[#111827] transition-colors duration-300 group-hover:text-[#D94C20]">
          {name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#111827]">${price}</span>
          {originalPrice && (
            <span className="text-lg text-[#6B7280] line-through">${originalPrice}</span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="flex w-full items-center justify-center gap-2 bg-[#EA5B2A] px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-[#D94C20]"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
