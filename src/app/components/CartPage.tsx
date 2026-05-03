import { useMemo, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Minus, Plus, ShieldCheck, Trash2 } from 'lucide-react';

type CartItem = {
  id: number;
  productId: number;
  name: string;
  subtitle: string;
  price: number;
  quantity: number;
  image: string;
};

function formatPrice(value: number) {
  return `KSh ${value.toLocaleString()}`;
}

export function CartPage() {
  const [voucherCode, setVoucherCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      productId: 1,
      name: 'Galaxy S24 Ultra',
      subtitle: '256GB, Titanium Black',
      price: 164999,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80',
    },
    {
      id: 2,
      productId: 5,
      name: 'Galaxy Buds2 Pro',
      subtitle: 'Bora Purple, ANC edition',
      price: 24999,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
    },
    {
      id: 3,
      productId: 13,
      name: 'Galaxy Watch7',
      subtitle: '44mm, Bluetooth, Cream',
      price: 39999,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80',
    },
  ]);

  const updateQuantity = (id: number, nextQuantity: number) => {
    if (nextQuantity < 1) {
      return;
    }

    setCartItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity: nextQuantity } : item)),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  const applyVoucher = () => {
    const normalized = voucherCode.trim().toUpperCase();
    setDiscountRate(normalized === 'SAMSUNG10' ? 0.1 : 0);
  };

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );
  const discount = Math.round(subtotal * discountRate);
  const deliveryFee = cartItems.length === 0 ? 0 : 1500;
  const total = subtotal - discount + deliveryFee;

  return (
    <section className="min-h-screen bg-[#FFF7F1] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-[#F0D8CB] bg-[#FFFDFB] shadow-[0_28px_70px_rgba(217,76,32,0.12)]">
          <div className="px-6 py-6 sm:px-10">
            <div className="mb-10 flex items-center gap-4">
              <div>
                <p className="text-lg font-semibold tracking-tight text-[#151515]">
                  samsung <span className="font-light text-[#5d5d5d]">store kenya</span>
                </p>
              </div>
            </div>

            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-[1.75rem] border border-[#F0D8CB] bg-white shadow-[0_16px_34px_rgba(17,24,39,0.05)]">
                  <div className="hidden grid-cols-[minmax(0,1.6fr)_180px_160px_72px] gap-4 border-b border-[#F3E2D8] bg-[#FFF8F4] px-6 py-4 text-sm font-medium text-[#5A3A2E] md:grid">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Action</p>
                  </div>

                  {cartItems.length === 0 ? (
                    <div className="px-6 py-16 text-center">
                      <p className="text-xl text-[#555555]">Your cart is empty.</p>
                    </div>
                  ) : (
                    cartItems.map((item, index) => (
                      <div
                        key={item.id}
                        className={`grid gap-5 px-6 py-5 md:grid-cols-[minmax(0,1.6fr)_180px_160px_72px] md:items-center ${
                          index !== cartItems.length - 1 ? 'border-b border-[#F3E2D8]' : ''
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-20 w-20 overflow-hidden rounded-[1rem] bg-[#FFF1E8]">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div>
                            <h2 className="text-xl font-medium text-[#171717]">{item.name}</h2>
                            <p className="mt-1 text-sm text-[#6a6a6a]">{item.subtitle}</p>
                          </div>
                        </div>

                        <div>
                          <div className="inline-flex items-center rounded-full border border-[#F0D8CB] bg-[#FFFDFB] px-3 py-2 shadow-sm">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="rounded-full p-1 text-[#D94C20] transition-all duration-300 hover:bg-[#FFF1E8]"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="min-w-10 text-center text-sm font-semibold text-[#111111]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="rounded-full p-1 text-[#D94C20] transition-all duration-300 hover:bg-[#FFF1E8]"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>

                        <p className="text-2xl font-semibold tracking-tight text-[#111111]">
                          {formatPrice(item.price * item.quantity)}
                        </p>

                        <div className="flex md:justify-center">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="rounded-full p-2 text-[#111111] transition-all duration-300 hover:bg-[#f5eee8] hover:text-[#d95d20]"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <button className="rounded-full bg-[#EA5B2A] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D94C20] hover:shadow-[0_18px_34px_rgba(217,76,32,0.22)]">
                  Update Cart
                </button>
              </div>

              <aside className="rounded-[1.75rem] border border-[#F0D8CB] bg-white p-6 shadow-[0_16px_34px_rgba(17,24,39,0.05)]">
                <h2 className="mb-5 text-xl font-medium text-[#161616]">Order Summary</h2>

                <div className="mb-6 flex gap-3">
                  <input
                    value={voucherCode}
                    onChange={(event) => setVoucherCode(event.target.value)}
                    placeholder="Discount voucher"
                    className="min-w-0 flex-1 rounded-full border border-[#F0D8CB] bg-[#FFFDFB] px-4 py-3 text-sm text-[#171717] outline-none transition-all duration-300 placeholder:text-[#B08C7A] focus:border-[#EA5B2A]"
                  />
                  <button
                    onClick={applyVoucher}
                    className="rounded-full border border-[#F0D8CB] px-5 py-3 text-sm font-medium text-[#8F2F10] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#EA5B2A] hover:bg-[#FFF1E8]"
                  >
                    Apply
                  </button>
                </div>

                <div className="space-y-3 border-b border-[#F3E2D8] pb-5 text-sm text-[#6B4A3B]">
                  <div className="flex items-center justify-between">
                    <span>Sub Total</span>
                    <span className="font-semibold text-[#121212]">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Discount ({Math.round(discountRate * 100)}%)</span>
                    <span className="font-semibold text-[#121212]">
                      -{formatPrice(discount)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Delivery fee</span>
                    <span className="font-semibold text-[#121212]">{formatPrice(deliveryFee)}</span>
                  </div>
                </div>

                <div className="py-5">
                  <div className="flex items-center justify-between">
                    <span className="text-base text-[#6B4A3B]">Total</span>
                    <span className="text-3xl font-semibold tracking-tight text-[#D94C20]">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                <div className="mb-8 flex gap-3 rounded-[1.25rem] bg-[#FFF3EC] p-4 text-sm text-[#6B4A3B]">
                  <ShieldCheck size={18} className="mt-0.5 flex-shrink-0 text-[#D94C20]" />
                  <p>
                    90 day Samsung care warranty against manufacturing defects.{' '}
                    <span className="font-semibold text-[#111111]">Details</span>
                  </p>
                </div>

                <button
                  disabled={cartItems.length === 0}
                  className="w-full rounded-full bg-[#EA5B2A] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D94C20] hover:shadow-[0_18px_34px_rgba(217,76,32,0.22)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  Checkout Now
                </button>
              </aside>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
