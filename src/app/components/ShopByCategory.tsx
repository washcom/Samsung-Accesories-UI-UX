import { CategoryCard } from './CategoryCard';

// API Placeholder: GET /api/categories

const categories = [
  {
    id: 1,
    title: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',
    count: 24
  },
  {
    id: 2,
    title: 'Earbuds',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',
    count: 12
  },
  {
    id: 3,
    title: 'Chargers',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80',
    count: 18
  },
  {
    id: 4,
    title: 'Smartwatches',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80',
    count: 8
  },
  {
    id: 5,
    title: 'Cases',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80',
    count: 35
  }
];

export function ShopByCategory() {
  return (
    <section className="bg-[#FFF7F1] py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-[#6F625A]">
            Browse our complete range of Samsung products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
