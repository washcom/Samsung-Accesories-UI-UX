import { useMemo, useState } from 'react';
import { Heart, Minus, Plus, ShoppingCart, Star, Truck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type FinishOption = {
  name: string;
  value: string;
  swatch: string;
};

const product = {
  id: 1,
  brand: 'Samsung',
  sku: 'SM-S928BZKHAFB',
  name: 'Galaxy S24 Ultra',
  price: 164999,
  originalPrice: 179999,
  rating: 4.8,
  reviews: 42,
  description:
    'Flagship Samsung performance with Galaxy AI, a 200MP camera system, titanium finish, and a built-in S Pen for work and play.',
  images: [
    'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=1200&q=80',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80',
    'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1200&q=80',
    'https://images.unsplash.com/photo-1592286927505-b0501e2f1734?w=1200&q=80',
  ],
  finishes: [
    { name: 'Titanium Black', value: 'black', swatch: '#2F3136' },
    { name: 'Titanium Gray', value: 'gray', swatch: '#B9B4AD' },
    { name: 'Titanium Violet', value: 'violet', swatch: '#9D94A8' },
  ] satisfies FinishOption[],
  storageOptions: ['256GB', '512GB', '1TB'],
  highlights: ['200MP Camera', '12GB RAM', '5000mAh Battery', 'Galaxy AI'],
};

function formatPrice(value: number) {
  return `KSh ${value.toLocaleString()}`;
}

export function ProductDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState(product.finishes[0]);
  const [selectedStorage, setSelectedStorage] = useState(product.storageOptions[1]);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  const savings = useMemo(() => {
    if (!product.originalPrice) {
      return 0;
    }

    return product.originalPrice - product.price;
  }, []);

  const handleAddToCart = () => {
    console.log(
      `Added ${quantity} x ${product.name} (${selectedFinish.name}, ${selectedStorage}) to cart`,
    );
  };

  return (
    <section className="bg-[#F5F6FA] px-4 py-8 sm:px-6 lg:px-8">
      <div className="border-b border-[#F3E2D8] bg-[#FFFDFB] px-6 py-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#8A6A5C]">
            <span>Phones</span>
            <span>Samsung</span>
            <span>Galaxy S Series</span>
            <span className="font-medium text-[#D94C20]">Galaxy S24 Ultra</span>
          </div>
      </div>

      <div className="grid gap-10 bg-[#FFFDFB] px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_420px]">
          <div>
            <div className="overflow-hidden rounded-[1.5rem] bg-[#FBF7F2] shadow-[inset_0_0_0_1px_rgba(240,216,203,0.9)]">
              <div className="flex min-h-[420px] items-center justify-center p-8 sm:min-h-[520px]">
                <ImageWithFallback
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full max-h-[460px] w-full object-contain transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-[1rem] border bg-[#FBF7F2] p-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                    selectedImage === index
                      ? 'border-[#EA5B2A] shadow-[0_12px_24px_rgba(217,76,32,0.16)]'
                      : 'border-[#F0D8CB]'
                  }`}
                >
                  <div className="flex h-20 items-center justify-center rounded-[0.8rem] bg-white">
                    <ImageWithFallback
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3EC] px-3 py-1.5 text-sm font-medium text-[#8F2F10]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EA5B2A]" />
                {product.brand}
              </div>
              <span className="text-sm text-[#B49B8E]">{product.sku}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={
                      index < Math.round(product.rating)
                        ? 'fill-[#F4B63D] text-[#F4B63D]'
                        : 'text-[#E8D5C9]'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-[#8A6A5C]">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <div className="mt-8 flex items-end gap-3">
              <span className="text-4xl font-bold tracking-tight text-[#111827]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice ? (
                <span className="pb-1 text-xl text-[#AA9B91] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              ) : null}
            </div>

            {savings > 0 ? (
              <p className="mt-2 text-sm font-medium text-[#D94C20]">
                Save {formatPrice(savings)} on this offer
              </p>
            ) : null}

            <p className="mt-6 text-base leading-7 text-[#6B7280]">{product.description}</p>

            <div className="mt-8 space-y-7">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#111827]">Finish</span>
                  <span className="text-sm text-[#A08D82]">{selectedFinish.name}</span>
                </div>
                <div className="flex gap-3">
                  {product.finishes.map((finish) => (
                    <button
                      key={finish.value}
                      onClick={() => setSelectedFinish(finish)}
                      className={`flex h-14 w-14 items-center justify-center rounded-[1rem] border transition-all duration-300 hover:-translate-y-0.5 ${
                        selectedFinish.value === finish.value
                          ? 'border-[#EA5B2A] bg-[#FFF4ED] shadow-[0_12px_24px_rgba(217,76,32,0.14)]'
                          : 'border-[#F0D8CB] bg-white'
                      }`}
                      title={finish.name}
                    >
                      <span
                        className="h-7 w-7 rounded-full border border-white/70 shadow-sm"
                        style={{ backgroundColor: finish.swatch }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#111827]">Storage</span>
                  <span className="text-sm text-[#A08D82]">{selectedStorage}</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {product.storageOptions.map((storage) => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                        selectedStorage === storage
                          ? 'border-[#EA5B2A] bg-[#EA5B2A] text-white shadow-[0_14px_28px_rgba(217,76,32,0.18)]'
                          : 'border-[#F0D8CB] bg-white text-[#5A3A2E] hover:bg-[#FFF7F1]'
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="mb-3 block text-sm font-semibold text-[#111827]">Highlights</span>
                <div className="flex flex-wrap gap-2">
                  {product.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-[#F0D8CB] bg-[#FFF8F4] px-3 py-2 text-sm text-[#8A6A5C]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-[#F0D8CB] bg-white px-3 py-2 shadow-sm">
                <button
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="rounded-full p-1.5 text-[#D94C20] transition-all duration-300 hover:bg-[#FFF1E8]"
                >
                  <Minus size={18} />
                </button>
                <span className="min-w-12 text-center text-sm font-semibold text-[#111827]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((current) => current + 1)}
                  className="rounded-full p-1.5 text-[#D94C20] transition-all duration-300 hover:bg-[#FFF1E8]"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 rounded-full bg-[#111827] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EA5B2A] hover:shadow-[0_18px_32px_rgba(217,76,32,0.24)]"
              >
                <span className="inline-flex items-center gap-2">
                  <ShoppingCart size={18} />
                  Add to cart
                </span>
              </button>
              <button
                onClick={() => setLiked((current) => !current)}
                className={`flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 ${
                  liked
                    ? 'border-[#EA5B2A] bg-[#FFF1E8] text-[#EA5B2A]'
                    : 'border-[#F0D8CB] bg-white text-[#7D6E66]'
                }`}
              >
                <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-[#8A6A5C]">
              <Truck size={16} className="text-[#EA5B2A]" />
              Free delivery in Nairobi on orders above KSh 30,000.
            </div>
          </div>
      </div>
    </section>
  );
}
