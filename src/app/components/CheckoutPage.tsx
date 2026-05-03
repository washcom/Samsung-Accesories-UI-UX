import { useState } from 'react';
import {
  Apple,
  ArrowLeft,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Truck,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type DeliveryMethod = 'store' | 'delivery';
type PaymentMethod = 'mastercard' | 'visa' | 'apple-pay' | 'other';

const product = {
  name: 'Galaxy S24 Ultra',
  subtitle: '256GB · Titanium Black',
  color: 'Titanium Black',
  storage: '256GB',
  originalPrice: 179999,
  discountPrice: 164999,
  image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=900&q=80',
};

function formatPrice(value: number) {
  return `KSh ${value.toLocaleString()}`;
}

export function CheckoutPage() {
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('visa');
  const [agreed, setAgreed] = useState(true);
  const [form, setForm] = useState({
    firstName: 'Warren',
    lastName: 'Mbevi',
    phoneCode: '+254',
    phone: '711 660 007',
    email: 'warren@samsungdeals.co.ke',
    deliveryDate: 'May 10th, 2026',
    timeSlot: '1 pm - 6 pm',
    city: 'Nairobi',
    address: 'Westlands Ring Road',
    zipCode: '00100',
  });

  const subtotal = product.originalPrice;
  const discount = subtotal - product.discountPrice;
  const shipping = deliveryMethod === 'delivery' ? 1500 : 0;
  const total = product.discountPrice + shipping;

  const paymentOptions: Array<{
    id: PaymentMethod;
    label: string;
    render: React.ReactNode;
  }> = [
    {
      id: 'mastercard',
      label: 'Mastercard',
      render: (
        <div className="flex items-center gap-1">
          <span className="h-4 w-4 rounded-full bg-[#EB001B]" />
          <span className="h-4 w-4 -ml-1 rounded-full bg-[#F79E1B]" />
        </div>
      ),
    },
    {
      id: 'visa',
      label: 'Visa',
      render: <span className="text-2xl font-black tracking-tight text-[#1A4DB3]">VISA</span>,
    },
    {
      id: 'apple-pay',
      label: 'Apple Pay',
      render: (
        <span className="inline-flex items-center gap-1 text-xl font-semibold text-[#111827]">
          <Apple size={20} fill="currentColor" />
          Pay
        </span>
      ),
    },
    {
      id: 'other',
      label: 'Other',
      render: <span className="text-sm font-semibold uppercase tracking-[0.14em]">Other</span>,
    },
  ];

  const handlePlaceOrder = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Order placed', { form, deliveryMethod, paymentMethod, agreed });
  };

  const inputClass =
    'w-full rounded-2xl border border-[#F0D8CB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition-all duration-300 placeholder:text-[#B08C7A] focus:border-[#EA5B2A] focus:shadow-[0_0_0_4px_rgba(234,91,42,0.08)]';
  const labelClass = 'mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B08C7A]';

  return (
    <section className="min-h-screen bg-[#F5F6FA] px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full overflow-hidden rounded-[2rem] border border-[#F0D8CB] bg-[radial-gradient(circle_at_top_right,_rgba(255,214,195,0.45),_transparent_30%),linear-gradient(180deg,#FFFDFB_0%,#FFF7F1_100%)] shadow-[0_24px_70px_rgba(217,76,32,0.08)]">
        <form onSubmit={handlePlaceOrder} className="grid gap-8 px-6 py-8 sm:px-8 xl:grid-cols-[minmax(0,1fr)_480px]">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="rounded-full bg-white p-3 text-[#111827] shadow-[0_10px_24px_rgba(17,24,39,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#EA5B2A]"
              >
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">
                Checkout
              </h1>
            </div>

            <section>
              <h2 className="mb-5 text-lg font-semibold text-[#111827]">
                1. Contact Information
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass}>First name</label>
                  <input
                    value={form.firstName}
                    onChange={(event) => setForm((current) => ({ ...current, firstName: event.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Last name</label>
                  <input
                    value={form.lastName}
                    onChange={(event) => setForm((current) => ({ ...current, lastName: event.target.value }))}
                    className={`${inputClass} border-[#A9C6FF] shadow-[0_0_0_3px_rgba(93,135,255,0.06)]`}
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <div className={`${inputClass} flex items-center gap-3 py-0 pr-3`}>
                    <div className="flex items-center gap-2 rounded-l-2xl bg-[#FFF7F1] px-4 py-3 text-sm text-[#6B4A3B]">
                      <span>🇰🇪</span>
                      {form.phoneCode}
                      <ChevronDown size={14} />
                    </div>
                    <input
                      value={form.phone}
                      onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                      className="w-full bg-transparent py-3 outline-none"
                    />
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6DDC55] text-white">
                      <Check size={14} />
                    </span>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>E-mail</label>
                  <input
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    className={inputClass}
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-lg font-semibold text-[#111827]">
                2. Delivery method
              </h2>

              <div className="mb-6 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setDeliveryMethod('store')}
                  className={`inline-flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm font-semibold transition-all duration-300 ${
                    deliveryMethod === 'store'
                      ? 'border-[#EA5B2A] bg-[#FFF3EC] text-[#8F2F10]'
                      : 'border-[#F0D8CB] bg-white text-[#6B4A3B] hover:border-[#EA5B2A]'
                  }`}
                >
                  <MapPin size={18} />
                  Store
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryMethod('delivery')}
                  className={`inline-flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm font-semibold transition-all duration-300 ${
                    deliveryMethod === 'delivery'
                      ? 'border-[#7DA5FF] bg-[#F4F8FF] text-[#345FC8] shadow-[0_10px_24px_rgba(125,165,255,0.12)]'
                      : 'border-[#F0D8CB] bg-white text-[#6B4A3B] hover:border-[#7DA5FF]'
                  }`}
                >
                  <Truck size={18} />
                  Delivery
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div>
                  <label className={labelClass}>Delivery date</label>
                  <div className={`${inputClass} flex items-center justify-between`}>
                    {form.deliveryDate}
                    <CalendarDays size={16} className="text-[#B08C7A]" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Convenient time</label>
                  <div className={`${inputClass} flex items-center justify-between`}>
                    {form.timeSlot}
                    <Clock3 size={16} className="text-[#B08C7A]" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>City</label>
                  <div className={`${inputClass} flex items-center justify-between`}>
                    {form.city}
                    <ChevronDown size={16} className="text-[#B08C7A]" />
                  </div>
                </div>
                <div className="xl:col-span-1 md:col-span-1">
                  <label className={labelClass}>Address</label>
                  <input
                    value={form.address}
                    onChange={(event) => setForm((current) => ({ ...current, address: event.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Zip Code</label>
                  <input
                    value={form.zipCode}
                    onChange={(event) => setForm((current) => ({ ...current, zipCode: event.target.value }))}
                    className={`${inputClass} border-[#A9C6FF] shadow-[0_0_0_3px_rgba(93,135,255,0.06)]`}
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-lg font-semibold text-[#111827]">
                3. Payment method
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {paymentOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setPaymentMethod(option.id)}
                    className={`flex h-16 items-center justify-center rounded-2xl border bg-white px-4 transition-all duration-300 hover:-translate-y-0.5 ${
                      paymentMethod === option.id
                        ? 'border-[#7DA5FF] shadow-[0_12px_24px_rgba(125,165,255,0.14)]'
                        : 'border-[#F0D8CB] hover:border-[#EA5B2A]'
                    }`}
                    title={option.label}
                  >
                    {option.render}
                  </button>
                ))}
              </div>
            </section>
          </div>

          <aside className="self-start bg-white p-8 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
            <h2 className="mb-5 text-2xl font-semibold text-[#111827]">Order</h2>

            <div className="bg-[#FBF7F2] p-5">
              <div className="mb-4 overflow-hidden bg-white">
                <div className="flex h-60 items-center justify-center p-6">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <h3 className="text-3xl font-semibold leading-tight text-[#111827]">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-[#8A6A5C]">{product.subtitle}</p>

              <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#8A6A5C]">
                <span>
                  Storage: <span className="font-semibold text-[#111827]">{product.storage}</span>
                </span>
                <span>
                  Color: <span className="font-semibold text-[#111827]">{product.color}</span>
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-base text-[#B08C7A] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="text-3xl font-bold text-[#EA5B2A]">
                  {formatPrice(product.discountPrice)}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-[#F3E2D8] pt-6 text-sm text-[#6B4A3B]">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#111827]">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Discount</span>
                <span className="font-semibold text-[#111827]">-{formatPrice(discount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-[#111827]">
                  {shipping === 0 ? 'Free' : formatPrice(shipping)}
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-lg font-semibold text-[#111827]">Total</span>
              <span className="text-4xl font-bold tracking-tight text-[#111827]">
                {formatPrice(total)}
              </span>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[#4E7BFF] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3F68E0] hover:shadow-[0_18px_34px_rgba(78,123,255,0.24)]"
            >
              Checkout
            </button>

            <button
              type="button"
              onClick={() => setAgreed((current) => !current)}
              className="mt-5 flex items-start gap-3 text-left text-xs leading-5 text-[#8A6A5C]"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border ${
                  agreed
                    ? 'border-[#4E7BFF] bg-[#4E7BFF] text-white'
                    : 'border-[#D8CDC5] bg-white text-transparent'
                }`}
              >
                <Check size={13} />
              </span>
              By confirming the order, I accept the terms of the user agreement.
            </button>
          </aside>
        </form>
      </div>
    </section>
  );
}
