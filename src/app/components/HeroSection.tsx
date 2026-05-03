import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// API Placeholder: GET /api/banners

export function HeroSection() {
  return (
    <section className="space-y-6">
      <div className="overflow-hidden bg-[#FFF7F1]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-between px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#111827] sm:text-5xl lg:text-6xl">
                  Upgrade to a smarter Samsung everyday setup
                </h1>
                <p className="max-w-lg text-base leading-7 text-[#5F6673] sm:text-lg">
                  Save up to 35% on flagship phones, watches, earbuds, and fast-charging essentials this week only.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EA5B2A] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D94C20] hover:shadow-[0_18px_32px_rgba(217,76,32,0.24)]">
                  Shop Now
                  <ArrowRight size={18} />
                </button>
                <p className="text-sm font-medium text-[#8A4C36]">Free delivery on orders over $150</p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#F0D8CB] pt-6">
              <div className="flex items-center gap-3">
                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F0D8CB] bg-white text-[#D94C20] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <ChevronLeft size={18} />
                </button>
                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F0D8CB] bg-white text-[#D94C20] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-8 rounded-full bg-[#EA5B2A]"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#F0BCA8]"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#F0BCA8]"></span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden bg-[radial-gradient(circle_at_top,_#FFD7C6,_#F8B293_48%,_#EE7A4B_100%)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]"></div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#E56A39]/30 to-transparent"></div>
            <div className="relative flex h-full items-center justify-center px-6 py-10 sm:px-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80"
                alt="Samsung Galaxy Phone"
                className="w-full max-w-md rotate-[-9deg] border border-white/30 shadow-[0_30px_60px_rgba(101,29,10,0.28)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="overflow-hidden bg-[#1C2333] text-white shadow-[0_18px_44px_rgba(17,24,39,0.16)]">
          <div className="flex h-full items-center justify-between gap-4 p-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5B08C]">Audio Deals</p>
              <h3 className="text-2xl font-bold">Buds & sound upgrades</h3>
              <button className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-white/20">
                Explore Audio
              </button>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&q=80"
              alt="Samsung earbuds"
              className="h-28 w-28 object-cover"
            />
          </div>
        </article>

        <article className="overflow-hidden bg-[#F6E5D8] shadow-[0_18px_44px_rgba(17,24,39,0.08)]">
          <div className="flex h-full items-center justify-between gap-4 p-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C9683E]">Wearables</p>
              <h3 className="text-2xl font-bold text-[#111827]">Track every move</h3>
              <button className="rounded-full bg-[#EA5B2A] px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#D94C20]">
                Shop Watches
              </button>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&q=80"
              alt="Samsung watch"
              className="h-28 w-28 object-cover"
            />
          </div>
        </article>

        <article className="overflow-hidden bg-[#E8EEF9] shadow-[0_18px_44px_rgba(17,24,39,0.08)]">
          <div className="flex h-full items-center justify-between gap-4 p-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4867B2]">Power</p>
              <h3 className="text-2xl font-bold text-[#111827]">Fast charge essentials</h3>
              <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#3657A6] transition-colors duration-300 hover:bg-[#F8FAFF]">
                View Chargers
              </button>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&q=80"
              alt="Samsung charger"
              className="h-28 w-28 object-cover"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
