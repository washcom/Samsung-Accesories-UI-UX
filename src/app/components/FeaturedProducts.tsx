import { ProductCard } from './ProductCard';

// API Placeholder: GET /api/products?featured=true

const featuredProducts = [
  {
    id: 1,
    name: 'Galaxy S24 Ultra',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80',
    discount: 8
  },
  {
    id: 2,
    name: 'Galaxy Z Fold 5',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=400&q=80',
  },
  {
    id: 3,
    name: 'Galaxy S24+',
    price: 999,
    originalPrice: 1099,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
    discount: 9
  },
  {
    id: 4,
    name: 'Galaxy A54 5G',
    price: 449,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80',
  },
  {
    id: 5,
    name: 'Galaxy Z Flip 5',
    price: 999,
    originalPrice: 1099,
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&q=80',
    discount: 9
  },
  {
    id: 6,
    name: 'Galaxy S23 FE',
    price: 599,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&q=80',
    discount: 14
  },
  {
    id: 7,
    name: 'Galaxy M54 5G',
    price: 399,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80',
  },
  {
    id: 8,
    name: 'Galaxy A34 5G',
    price: 349,
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&q=80',
  },
  {
    id: 9,
    name: 'Galaxy Tab S9',
    price: 799,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
    discount: 11
  },
  {
    id: 10,
    name: 'Galaxy Book4',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
  }
];

export function FeaturedProducts() {
  return (
    <section className="bg-[#FFF7F1] py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-[#6B7280]">
            Discover our most popular Samsung devices
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
