import { useMemo, useState, type Dispatch, type SetStateAction } from 'react';
import {
  BadgeCheck,
  Bell,
  ChevronDown,
  Grid2x2,
  Heart,
  MapPin,
  Menu,
  Minus,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Star,
  Store,
  X,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ListingProduct = {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  rating: number;
  sold: number;
  image: string;
  readyToShip?: boolean;
  paidSamples?: boolean;
  verified?: boolean;
  category: 'Phones' | 'Tablets' | 'Wearables' | 'Audio' | 'Computing' | 'TV & Monitors' | 'Accessories';
};

const listingProducts: ListingProduct[] = [
  {
    id: 1,
    name: 'Galaxy S24 Ultra',
    subtitle: '256GB, Titanium Black, AI camera system',
    price: 164999,
    originalPrice: 179999,
    rating: 5.0,
    sold: 120,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=900&q=80',
    readyToShip: true,
    paidSamples: true,
    verified: true,
    category: 'Phones',
  },
  {
    id: 2,
    name: 'Galaxy Z Fold6',
    subtitle: '512GB, foldable flagship, multitasking display',
    price: 239999,
    originalPrice: 255000,
    rating: 4.8,
    sold: 50,
    image: 'https://images.unsplash.com/photo-1592286927505-b0501e2f1734?w=900&q=80',
    readyToShip: true,
    verified: true,
    category: 'Phones',
  },
  {
    id: 3,
    name: 'Galaxy A55 5G',
    subtitle: '128GB, Awesome Iceblue, everyday premium design',
    price: 58999,
    originalPrice: 64999,
    rating: 4.8,
    sold: 24,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80',
    readyToShip: true,
    paidSamples: true,
    category: 'Phones',
  },
  {
    id: 4,
    name: 'Galaxy Tab S9 Ultra',
    subtitle: '14.6" Dynamic AMOLED 2X, S Pen included',
    price: 149999,
    originalPrice: 159999,
    rating: 4.7,
    sold: 80,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=900&q=80',
    paidSamples: true,
    verified: true,
    category: 'Tablets',
  },
  {
    id: 5,
    name: 'Galaxy Watch6 Classic',
    subtitle: '47mm, rotating bezel, wellness tracking',
    price: 42999,
    originalPrice: 49999,
    rating: 4.9,
    sold: 68,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&q=80',
    readyToShip: true,
    verified: true,
    category: 'Wearables',
  },
  {
    id: 6,
    name: 'Galaxy Buds2 Pro',
    subtitle: 'Hi-Fi 24bit audio, ANC, Bora Purple',
    price: 24999,
    originalPrice: 29999,
    rating: 4.5,
    sold: 32,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&q=80',
    readyToShip: true,
    category: 'Audio',
  },
  {
    id: 7,
    name: 'Galaxy Book4 Pro',
    subtitle: '16" AMOLED, Intel Core Ultra, ultra-slim build',
    price: 214999,
    originalPrice: 229999,
    rating: 4.8,
    sold: 100,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80',
    paidSamples: true,
    verified: true,
    category: 'Computing',
  },
  {
    id: 8,
    name: 'Samsung Smart Monitor M8',
    subtitle: '32" 4K UHD, smart TV apps, slim white finish',
    price: 89999,
    originalPrice: 99999,
    rating: 4.9,
    sold: 140,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&q=80',
    readyToShip: true,
    paidSamples: true,
    category: 'TV & Monitors',
  },
  {
    id: 9,
    name: 'Galaxy S24+',
    subtitle: '256GB, QHD+ display, pro-grade nightography',
    price: 139999,
    originalPrice: 149999,
    rating: 4.8,
    sold: 94,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80',
    readyToShip: true,
    paidSamples: true,
    verified: true,
    category: 'Phones',
  },
  {
    id: 10,
    name: 'Galaxy A35 5G',
    subtitle: '128GB, Super AMOLED display, everyday speed',
    price: 44999,
    originalPrice: 49999,
    rating: 4.6,
    sold: 73,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=80',
    readyToShip: true,
    verified: true,
    category: 'Phones',
  },
  {
    id: 11,
    name: 'Galaxy Z Flip6',
    subtitle: '256GB, compact foldable, FlexCam selfies',
    price: 169999,
    originalPrice: 184999,
    rating: 4.7,
    sold: 61,
    image: 'https://images.unsplash.com/photo-1592286927505-b0501e2f1734?w=900&q=80',
    readyToShip: true,
    paidSamples: true,
    verified: true,
    category: 'Phones',
  },
  {
    id: 12,
    name: 'Galaxy Tab S9 FE+',
    subtitle: '12.4" display, S Pen included, creative workflow',
    price: 82999,
    originalPrice: 89999,
    rating: 4.7,
    sold: 48,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=900&q=80',
    readyToShip: true,
    paidSamples: true,
    category: 'Tablets',
  },
  {
    id: 13,
    name: 'Galaxy Watch7',
    subtitle: 'Advanced health insights, sleek daily companion',
    price: 39999,
    originalPrice: 45999,
    rating: 4.8,
    sold: 88,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&q=80',
    readyToShip: true,
    verified: true,
    category: 'Wearables',
  },
  {
    id: 14,
    name: 'Galaxy Buds FE',
    subtitle: 'Comfort fit, strong ANC, long-lasting battery',
    price: 12999,
    originalPrice: 15999,
    rating: 4.5,
    sold: 132,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&q=80',
    readyToShip: true,
    paidSamples: true,
    category: 'Audio',
  },
  {
    id: 15,
    name: 'Galaxy Book4 360',
    subtitle: '2-in-1 AMOLED laptop with touchscreen flexibility',
    price: 189999,
    originalPrice: 205999,
    rating: 4.7,
    sold: 37,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80',
    readyToShip: true,
    verified: true,
    category: 'Computing',
  },
  {
    id: 16,
    name: 'Samsung QLED 4K TV',
    subtitle: '55" smart TV with vivid colors and gaming mode',
    price: 119999,
    originalPrice: 134999,
    rating: 4.9,
    sold: 42,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=900&q=80',
    readyToShip: true,
    paidSamples: true,
    verified: true,
    category: 'TV & Monitors',
  },
  {
    id: 17,
    name: 'Odyssey OLED G8',
    subtitle: '34" curved gaming monitor with ultra-fast refresh',
    price: 174999,
    originalPrice: 189999,
    rating: 4.8,
    sold: 29,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=900&q=80',
    readyToShip: true,
    verified: true,
    category: 'TV & Monitors',
  },
  {
    id: 18,
    name: 'Galaxy Fit3',
    subtitle: 'Lightweight fitness tracker with long battery life',
    price: 8999,
    originalPrice: 10999,
    rating: 4.4,
    sold: 165,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=900&q=80',
    readyToShip: true,
    paidSamples: true,
    category: 'Wearables',
  },
  {
    id: 19,
    name: 'Samsung 25W Fast Charger',
    subtitle: 'USB-C super fast charging adapter for Galaxy devices',
    price: 3499,
    originalPrice: 4499,
    rating: 4.6,
    sold: 230,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=900&q=80',
    readyToShip: true,
    paidSamples: true,
    verified: true,
    category: 'Accessories',
  },
];

const productTypeOptions = ['Ready to ship', 'Paid samples'];
const quickPriceBuckets = ['Under KSh 50,000', 'KSh 50,000 - KSh 100,000', 'KSh 100,000 - KSh 150,000', 'KSh 150,000+'];
const topCategories = ['Categories', 'Ready to ship', 'Phones', 'Tablets', 'Wearables', 'Audio'];
const sortOptions = ['Best Match', 'Price: Low to High', 'Price: High to Low', 'Top Rated'] as const;
const quickPriceRanges: Record<string, [number, number]> = {
  'Under KSh 50,000': [0, 50000],
  'KSh 50,000 - KSh 100,000': [50000, 100000],
  'KSh 100,000 - KSh 150,000': [100000, 150000],
  'KSh 150,000+': [150000, 260000],
};

function formatPrice(value: number) {
  return `KSh ${value.toLocaleString()}`;
}

export function ProductListingPage() {
  const [showFilters, setShowFilters] = useState(true);
  const [minOrder, setMinOrder] = useState(10000);
  const [priceMin, setPriceMin] = useState(20000);
  const [priceMax, setPriceMax] = useState(260000);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['Ready to ship', 'Paid samples']);
  const [selectedSupplierTypes, setSelectedSupplierTypes] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('Samsung');
  const [submittedQuery, setSubmittedQuery] = useState('Samsung');
  const [selectedCategory, setSelectedCategory] = useState('Categories');
  const [sortBy, setSortBy] = useState<(typeof sortOptions)[number]>('Best Match');
  const [isCompactView, setIsCompactView] = useState(false);
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [notificationsOn, setNotificationsOn] = useState(false);
  const [savedForLater, setSavedForLater] = useState(false);

  const activeChips = useMemo(() => {
    const chips = [...selectedTypes];

    if (selectedCategory !== 'Categories' && selectedCategory !== 'Ready to ship') {
      chips.push(selectedCategory);
    }

    if (priceMin > 0) {
      chips.push(`Min KSh ${priceMin.toLocaleString()}`);
    }

    if (priceMax < 260000) {
      chips.push(`Max KSh ${priceMax.toLocaleString()}`);
    }

    chips.push(`Minimal order KSh ${minOrder.toLocaleString()}`);

    return chips;
  }, [minOrder, priceMax, priceMin, selectedTypes]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = submittedQuery.trim().toLowerCase();

    const results = listingProducts.filter((product) => {
      const matchesMinPrice = product.price >= priceMin;
      const matchesMaxPrice = product.price <= priceMax;
      const matchesReadyToShip =
        !selectedTypes.includes('Ready to ship') || product.readyToShip;
      const matchesPaidSamples =
        !selectedTypes.includes('Paid samples') || product.paidSamples;
      const matchesVerified =
        !selectedSupplierTypes.includes('Verified suppliers') || product.verified;
      const matchesCategory =
        selectedCategory === 'Categories' ||
        selectedCategory === 'Ready to ship' ||
        product.category === selectedCategory;
      const matchesSearch =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.subtitle.toLowerCase().includes(normalizedQuery);

      return (
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesReadyToShip &&
        matchesPaidSamples &&
        matchesVerified &&
        matchesCategory &&
        matchesSearch
      );
    });

    return results.sort((left, right) => {
      if (sortBy === 'Price: Low to High') {
        return left.price - right.price;
      }

      if (sortBy === 'Price: High to Low') {
        return right.price - left.price;
      }

      if (sortBy === 'Top Rated') {
        return right.rating - left.rating || right.sold - left.sold;
      }

      return right.sold - left.sold || right.rating - left.rating;
    });
  }, [priceMax, priceMin, selectedCategory, selectedSupplierTypes, selectedTypes, sortBy, submittedQuery]);

  const toggleSelection = (
    value: string,
    items: string[],
    setItems: Dispatch<SetStateAction<string[]>>,
  ) => {
    setItems(items.includes(value) ? items.filter((item) => item !== value) : [...items, value]);
  };

  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedSupplierTypes([]);
    setSelectedCondition([]);
    setPriceMin(0);
    setPriceMax(260000);
    setMinOrder(10000);
    setSelectedCategory('Categories');
    setSubmittedQuery('Samsung');
    setSearchTerm('Samsung');
  };

  const handleSearch = () => {
    setSubmittedQuery(searchTerm.trim() || 'Samsung');
  };

  const handleTopCategoryClick = (category: string) => {
    setSelectedCategory(category);

    if (category === 'Ready to ship') {
      setSelectedTypes((current) =>
        current.includes('Ready to ship') ? current : [...current, 'Ready to ship'],
      );
      return;
    }

    if (category === 'Categories') {
      return;
    }

    setSubmittedQuery(category === 'Audio' ? 'Galaxy Buds' : `Samsung ${category}`);
    setSearchTerm(category === 'Audio' ? 'Galaxy Buds' : `Samsung ${category}`);
  };

  const removeChip = (chip: string) => {
    if (productTypeOptions.includes(chip)) {
      setSelectedTypes((current) => current.filter((type) => type !== chip));
      return;
    }

    if (chip.startsWith('Min KSh ')) {
      setPriceMin(0);
      return;
    }

    if (chip.startsWith('Max KSh ')) {
      setPriceMax(260000);
      return;
    }

    if (chip.startsWith('Minimal order')) {
      setMinOrder(10000);
      return;
    }

    setSelectedCategory('Categories');
  };

  const applyQuickPriceBucket = (bucket: string) => {
    const [nextMin, nextMax] = quickPriceRanges[bucket];
    setPriceMin(nextMin);
    setPriceMax(nextMax);
  };

  const addToCart = (productId: number) => {
    setCartItems((current) => [...current, productId]);
  };

  const toggleProductLike = (productId: number) => {
    setLikedProducts((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  };

  const baseButtonClass =
    'transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)] active:translate-y-0 active:scale-[0.98]';

  return (
    <section className="w-full bg-[#f5f5f5] px-0 py-4">
      <style>{`
        .marketplace-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #d6cfc8 transparent;
        }

        .marketplace-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .marketplace-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .marketplace-scrollbar::-webkit-scrollbar-thumb {
          border-radius: 999px;
          background: #d6cfc8;
        }

        .marketplace-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #c1b8af;
        }
      `}</style>
      <div className="w-full overflow-hidden border border-[#ebe7e1] bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div className="border-b border-[#f0ece7] bg-[#fcfbfa] px-5 py-3 sm:px-8">
          <div className="flex items-center justify-between text-[#a6a19b]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff6b57]" />
              <span className="h-3 w-3 rounded-full bg-[#f7c948]" />
              <span className="h-3 w-3 rounded-full bg-[#5fd27d]" />
            </div>
            <div className="hidden rounded-full border border-[#efebe6] bg-white px-6 py-1.5 text-xs font-medium text-[#8e8a84] sm:block">
              samsungdeals.co.ke
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Minus size={16} />
              <Grid2x2 size={16} />
            </div>
          </div>
        </div>

        <div className="border-b border-[#f0ece7] px-5 py-4 sm:px-8">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7a00] text-white shadow-[0_12px_28px_rgba(255,122,0,0.25)]">
                <Store size={24} />
              </div>
              <div>
                <p className="text-xl font-semibold text-[#23201d]">Samsung Deals</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-3 xl:mx-8 xl:max-w-3xl xl:flex-row">
              <div className="flex flex-1 flex-wrap items-center gap-3 rounded-full border border-[#f0ece7] bg-white px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                <div className="flex items-center gap-2 rounded-full border-r border-[#ece7e2] pr-3 text-sm text-[#9a958f]">
                  <MapPin size={16} className="text-[#c1bbb5]" />
                  Nairobi, Kenya
                  <ChevronDown size={14} />
                </div>
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                  className="min-w-[12rem] flex-1 bg-transparent text-sm font-medium text-[#2f2b27] outline-none"
                />
              </div>
              <button
                onClick={handleSearch}
                className={`flex items-center justify-center gap-2 rounded-full bg-[#ff7a00] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(255,122,0,0.28)] hover:bg-[#ef7300] ${baseButtonClass}`}
              >
                <Search size={16} />
                Search
              </button>
            </div>

            <div className="flex items-center gap-3 self-end xl:self-auto">
              <button className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm text-[#7d7974] hover:bg-[#f7f3ef] ${baseButtonClass}`}>
                <span className="text-lg">🇰🇪</span>
                EN
                <ChevronDown size={14} />
              </button>
              <button className={`relative rounded-full p-2 text-[#8f8a84] hover:bg-[#f7f3ef] ${baseButtonClass}`}>
                <ShoppingCart size={18} />
                {cartItems.length > 0 ? (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff7a00] px-1 text-[10px] font-bold text-white">
                    {cartItems.length}
                  </span>
                ) : null}
              </button>
              <button
                onClick={() => setNotificationsOn((current) => !current)}
                className={`rounded-full p-2 text-[#8f8a84] hover:bg-[#f7f3ef] ${
                  notificationsOn ? 'bg-[#fff2e8] text-[#ff7a00]' : ''
                } ${baseButtonClass}`}
              >
                <Bell size={18} />
              </button>
              <button
                onClick={() => setSavedForLater((current) => !current)}
                className={`relative rounded-full p-2 text-[#8f8a84] hover:bg-[#f7f3ef] ${
                  savedForLater ? 'bg-[#fff2e8] text-[#ff7a00]' : ''
                } ${baseButtonClass}`}
              >
                <Heart size={18} />
                {likedProducts.length > 0 ? (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1f1d1a] px-1 text-[10px] font-bold text-white">
                    {likedProducts.length}
                  </span>
                ) : null}
              </button>
              <div className="h-10 w-10 overflow-hidden rounded-full bg-[#e8ddd5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-[#f0ece7] px-5 py-4 sm:px-8">
          <div className="flex flex-wrap items-center gap-5 text-sm text-[#726d68]">
            {topCategories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleTopCategoryClick(category)}
                className={`flex items-center gap-2 rounded-full px-3 py-2 hover:text-[#ff7a00] ${
                  selectedCategory === category
                    ? 'bg-[#fff3e9] font-semibold text-[#ff7a00]'
                    : index === 0
                      ? 'font-medium text-[#595450]'
                      : ''
                } ${baseButtonClass}`}
                title={`Show ${category.toLowerCase()} deals`}
              >
                {index === 0 && <Menu size={15} />}
                {category}
                {(index === 0 || index > 1) && <ChevronDown size={14} />}
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 py-6 sm:px-8">
          <div className="mb-5 flex items-center justify-between lg:hidden">
            <p className="text-sm font-medium text-[#595450]">Filter and sort products</p>
            <button
              onClick={() => setShowFilters((value) => !value)}
              className={`flex items-center gap-2 rounded-full border border-[#ece6e0] px-4 py-2 text-sm font-medium text-[#46413c] hover:border-[#ffd1a3] hover:bg-[#fff7f1] ${baseButtonClass}`}
            >
              <SlidersHorizontal size={16} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:sticky lg:top-6 lg:block`}>
              <div className="marketplace-scrollbar rounded-[1.5rem] border border-[#efebe6] bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
                <h2 className="mb-6 text-xl font-semibold text-[#23201d]">Filter</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 font-semibold text-[#2d2926]">Suppliers Types</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Trade Assurance', icon: Store, accent: 'text-[#ff8a1d]' },
                        { label: 'Verified suppliers', icon: BadgeCheck, accent: 'text-[#3b82f6]' },
                      ].map(({ label, icon: Icon, accent }) => (
                        <label
                          key={label}
                          className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-1.5 text-sm text-[#726d68] transition-colors duration-300 hover:bg-[#fff7f1]"
                        >
                          <input
                            type="checkbox"
                            checked={selectedSupplierTypes.includes(label)}
                            onChange={() =>
                              toggleSelection(label, selectedSupplierTypes, setSelectedSupplierTypes)
                            }
                            className="h-4 w-4 rounded border-[#ddd6cf] accent-[#ff7a00]"
                          />
                          <Icon size={16} className={accent} />
                          {label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-[#2d2926]">Product Types</h3>
                    <div className="space-y-3">
                      {productTypeOptions.map((label) => (
                        <label
                          key={label}
                          className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-1.5 text-sm text-[#726d68] transition-colors duration-300 hover:bg-[#fff7f1]"
                        >
                          <input
                            type="checkbox"
                            checked={selectedTypes.includes(label)}
                            onChange={() => toggleSelection(label, selectedTypes, setSelectedTypes)}
                            className="h-4 w-4 rounded border-[#ddd6cf] accent-[#ff7a00]"
                          />
                          {label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-[#2d2926]">Condition</h3>
                    <div className="space-y-3">
                      {['New Stuff', 'Second hand'].map((label) => (
                        <label
                          key={label}
                          className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-1.5 text-sm text-[#b0aaa4] transition-colors duration-300 hover:bg-[#fff7f1]"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCondition.includes(label)}
                            onChange={() => toggleSelection(label, selectedCondition, setSelectedCondition)}
                            className="h-4 w-4 rounded border-[#ddd6cf] accent-[#ff7a00]"
                          />
                          {label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-semibold text-[#2d2926]">Min Order</h3>
                      <span className="rounded-lg bg-[#1f1d1a] px-2 py-1 text-xs font-semibold text-white">
                        KSh {minOrder.toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="100000"
                      value={minOrder}
                      onChange={(event) => setMinOrder(Number(event.target.value))}
                      className="w-full accent-[#ff7a00]"
                    />
                    <div className="mt-2 flex justify-between text-sm text-[#8d8781]">
                      <span>KSh 10,000</span>
                      <span>KSh 100,000</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-[#2d2926]">Price</h3>
                    <div className="space-y-3">
                      <input
                        type="number"
                        value={priceMin}
                        onChange={(event) => setPriceMin(Number(event.target.value))}
                        className="w-full rounded-xl border border-[#ece6e0] px-4 py-3 text-sm text-[#3c3834] outline-none transition duration-300 focus:border-[#ff7a00]"
                        placeholder="20000"
                      />
                      <input
                        type="number"
                        value={priceMax}
                        onChange={(event) => setPriceMax(Number(event.target.value))}
                        className="w-full rounded-xl border border-[#ece6e0] px-4 py-3 text-sm text-[#3c3834] outline-none transition duration-300 focus:border-[#ff7a00]"
                        placeholder="260000"
                      />
                      {quickPriceBuckets.map((bucket) => (
                        <button
                          key={bucket}
                          onClick={() => applyQuickPriceBucket(bucket)}
                          className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition duration-300 ${
                            priceMin === quickPriceRanges[bucket][0] && priceMax === quickPriceRanges[bucket][1]
                              ? 'border-[#ffb56c] bg-[#fff2e6] text-[#ff7a00]'
                              : 'border-[#f0ebe6] bg-[#fbfaf9] text-[#9b948d] hover:border-[#ffd1a3] hover:text-[#ff7a00]'
                          } ${baseButtonClass}`}
                        >
                          {bucket}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="min-h-0">
              <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <p className="text-lg font-semibold text-[#23201d]">
                    1 - {filteredProducts.length} over 7,000 result for{' '}
                    <span className="text-[#ff7a00]">"{submittedQuery}"</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 self-start xl:self-auto">
                  <span className="text-sm text-[#7f7a75]">Sort by :</span>
                  <button
                    onClick={() =>
                      setSortBy((current) => {
                        const currentIndex = sortOptions.indexOf(current);
                        return sortOptions[(currentIndex + 1) % sortOptions.length];
                      })
                    }
                    className={`flex items-center gap-2 rounded-xl border border-[#ece6e0] bg-white px-4 py-3 text-sm font-medium text-[#5a5550] hover:border-[#ffd1a3] hover:bg-[#fffaf5] ${baseButtonClass}`}
                  >
                    {sortBy}
                    <ChevronDown size={16} />
                  </button>
                  <button
                    onClick={() => setIsCompactView((current) => !current)}
                    className={`rounded-xl border border-[#ece6e0] bg-white p-3 ${
                      isCompactView ? 'text-[#ff7a00]' : 'text-[#7f7a75]'
                    } hover:border-[#ffd1a3] hover:bg-[#fffaf5] ${baseButtonClass}`}
                    title={isCompactView ? 'Switch to larger cards' : 'Switch to compact cards'}
                  >
                    <Grid2x2 size={18} />
                  </button>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap items-center gap-3">
                {activeChips.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => removeChip(chip)}
                    className={`flex items-center gap-2 rounded-full border border-[#eee8e2] bg-white px-4 py-2 text-sm text-[#736d67] shadow-[0_8px_18px_rgba(15,23,42,0.03)] hover:border-[#ffd1a3] hover:text-[#ff7a00] ${baseButtonClass}`}
                  >
                    {chip}
                    <X size={14} className="text-[#b0aaa4]" />
                  </button>
                ))}
                <button
                  onClick={clearFilters}
                  className={`text-sm font-semibold text-[#ff7a00] hover:text-[#eb6f00] ${baseButtonClass}`}
                >
                  Clear All Filters
                </button>
              </div>

              <div className="marketplace-scrollbar max-h-[calc(100vh-15rem)] overflow-y-auto pr-1 sm:pr-2">
                <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${isCompactView ? 'xl:grid-cols-5' : 'xl:grid-cols-4'}`}>
                  {filteredProducts.map((product) => {
                    const isLiked = likedProducts.includes(product.id);

                    return (
                      <article
                        key={product.id}
                        className="group overflow-hidden rounded-[1.25rem] border border-[#ece7e1] bg-white shadow-[0_14px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,122,0,0.12)]"
                      >
                        <div className="relative flex h-44 items-center justify-center bg-[#f3f5f8] p-6">
                          <button
                            onClick={() => toggleProductLike(product.id)}
                            className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm ${
                              isLiked ? 'text-[#ff7a00]' : 'text-[#8f8a84]'
                            } hover:bg-white ${baseButtonClass}`}
                            title={isLiked ? 'Remove from saved items' : 'Save this product'}
                          >
                            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                          </button>
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="space-y-3 p-4">
                          <div className="flex items-end gap-2">
                            <span className="text-[1.7rem] font-bold leading-none text-[#1e1b18]">
                              {formatPrice(product.price)}
                            </span>
                            {product.originalPrice ? (
                              <span className="text-sm text-[#b2aba4] line-through">
                                {formatPrice(product.originalPrice)}
                              </span>
                            ) : null}
                          </div>
                          <div>
                            <h3 className="line-clamp-1 text-base font-semibold text-[#272320] transition-colors duration-300 group-hover:text-[#ff7a00]">
                              {product.name}
                            </h3>
                            <p className="mt-1 min-h-[2.5rem] text-sm leading-5 text-[#5f5953]">
                              {product.subtitle}
                            </p>
                          </div>
                          <div className="flex items-center justify-between border-t border-[#f3eeea] pt-3">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center gap-1 rounded-full bg-[#ffbe1a] px-2.5 py-1 text-xs font-semibold text-white">
                                <Star size={12} fill="currentColor" />
                                {product.rating.toFixed(1)}
                              </span>
                              <span className="text-sm text-[#99928c]">Sold {product.sold}</span>
                            </div>
                            <button
                              onClick={() => addToCart(product.id)}
                              className={`flex h-9 w-9 items-center justify-center rounded-full bg-[#ff7a00] text-white shadow-[0_10px_22px_rgba(255,122,0,0.24)] hover:bg-[#ef7300] ${baseButtonClass}`}
                              title={`Add ${product.name} to cart`}
                            >
                              <ShoppingCart size={16} />
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
