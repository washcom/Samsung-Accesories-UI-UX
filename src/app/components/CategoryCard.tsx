import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  id: number;
  title: string;
  image: string;
  count: number;
}

export function CategoryCard({ id, title, image, count }: CategoryCardProps) {
  return (
    <div className="group relative cursor-pointer overflow-hidden border border-[#F0D8CB] bg-[#FFF7F1] shadow-[0_18px_44px_rgba(17,24,39,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(217,76,32,0.14)]">
      <div className="relative aspect-square overflow-hidden bg-[#FFE7DA]">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4B1D0E]/80 via-[#6A2B15]/30 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="mb-4 text-sm text-[#FFE7DA]">{count} Products</p>
          <button className="flex items-center gap-2 text-sm font-semibold text-[#FFF2EC] transition-all duration-300 group-hover:gap-4 group-hover:text-white">
            View Products
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
