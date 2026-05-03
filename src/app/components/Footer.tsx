import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

// API Placeholder: POST /api/newsletter

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API Call: POST /api/newsletter
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-[#2A140D] py-12 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#FFB38F]">SAMSUNG</h3>
            <p className="mb-4 text-[#F6D7C9]">
              Experience innovation with Samsung's latest technology and premium devices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-[#F6D7C9] transition-colors duration-300 hover:text-[#FFB38F]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#support" className="text-[#F6D7C9] transition-colors duration-300 hover:text-[#FFB38F]">
                  Support
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-[#F6D7C9] transition-colors duration-300 hover:text-[#FFB38F]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-[#F6D7C9] transition-colors duration-300 hover:text-[#FFB38F]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-[#F6D7C9]">
              <li>Email: support@samsung.com</li>
              <li>Phone: 1-800-SAMSUNG</li>
              <li>Hours: Mon-Fri 9AM-6PM</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="mb-4 text-[#F6D7C9]">
              Subscribe for exclusive deals and updates
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-[#FFF7F1] px-4 py-2 text-[#2A140D] focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#EA5B2A] px-4 py-2 transition-colors duration-300 hover:bg-[#D94C20]"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-[#6B3A27] pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#F6D7C9]">
              © 2026 Samsung. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#facebook" className="rounded-full bg-[#5A2B1D] p-2 transition-all duration-300 hover:scale-110 hover:bg-[#EA5B2A]">
                <Facebook size={20} />
              </a>
              <a href="#twitter" className="rounded-full bg-[#5A2B1D] p-2 transition-all duration-300 hover:scale-110 hover:bg-[#EA5B2A]">
                <Twitter size={20} />
              </a>
              <a href="#instagram" className="rounded-full bg-[#5A2B1D] p-2 transition-all duration-300 hover:scale-110 hover:bg-[#EA5B2A]">
                <Instagram size={20} />
              </a>
              <a href="#youtube" className="rounded-full bg-[#5A2B1D] p-2 transition-all duration-300 hover:scale-110 hover:bg-[#EA5B2A]">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
