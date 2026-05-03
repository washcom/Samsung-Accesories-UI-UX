import { ChevronRight, Smartphone, Headphones, Battery, Watch, Package } from 'lucide-react';

const categories = [
  { id: 1, title: 'Smartphones', icon: Smartphone, count: 24 },
  { id: 2, title: 'Earbuds', icon: Headphones, count: 12 },
  { id: 3, title: 'Chargers', icon: Battery, count: 18 },
  { id: 4, title: 'Smartwatches', icon: Watch, count: 8 },
  { id: 5, title: 'Cases', icon: Package, count: 35 },
];

export function Sidebar() {
  return (
    <aside className="overflow-hidden border border-[#E7E4DF] bg-[#F3F0EB] shadow-[0_18px_44px_rgba(17,24,39,0.06)]">
      <div className="border-b border-[#E0DBD2] px-6 py-5">
        <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8C5A45]">Categories</h3>
      </div>
      <nav>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <a
              key={category.id}
              href={`#${category.title.toLowerCase()}`}
              className="flex items-center gap-3 border-b border-[#E0DBD2] px-6 py-4 transition-colors duration-300 last:border-b-0 hover:bg-white/70"
            >
              <span className="flex h-10 w-10 items-center justify-center bg-white text-[#EA5B2A] shadow-sm">
                <Icon size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-[#111827]">{category.title}</span>
                <span className="block text-xs text-[#7A7F89]">{category.count} items</span>
              </div>
              <ChevronRight size={16} className="text-[#A4A8B2]" />
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
