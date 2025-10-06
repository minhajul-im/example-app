import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const shopCategories = [
    { name: "Furniture", href: "#" },
    { name: "Outdoor", href: "#" },
    { name: "Bedding & Bath", href: "#" },
    { name: "Rugs", href: "#" },
    { name: "Decor & Pillows", href: "#" },
    { name: "Lighting", href: "#" },
    { name: "Kitchen", href: "#" },
    { name: "Appliances", href: "#" },
  ];

  const customerService = [
    { name: "Help Center", href: "#" },
    { name: "Track Order", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Size Guide", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Gift Cards", href: "#" },
  ];

  const aboutUs = [
    { name: "About Company", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press & Media", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Investors", href: "#" },
    { name: "Affiliates", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Store Locations", href: "#" },
  ];

  const myAccount = [
    { name: "Sign In", href: "#" },
    { name: "My Orders", href: "#" },
    { name: "Wishlist", href: "#" },
    { name: "Account Settings", href: "#" },
    { name: "Rewards Program", href: "#" },
    { name: "Email Preferences", href: "#" },
  ];

  const policies = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Accessibility", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="bg-primary/60 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-white text-xl font-bold mb-1">
                Subscribe to our Newsletter
              </h3>
              <p className="text-purple-100 text-sm">
                Get exclusive deals, new arrivals & design inspiration
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 min-w-[250px]"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-700 dark:hover:bg-gray-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Shop Categories */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">
              Shop by Category
            </h4>
            <ul className="space-y-2">
              {shopCategories.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-primary/70 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2">
              {customerService.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-primary/70 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">About Us</h4>
            <ul className="space-y-2">
              {aboutUs.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-primary/70 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">My Account</h4>
            <ul className="space-y-2">
              {myAccount.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-primary/70 transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Apps */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>1-800-123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>support@shop.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Commerce St, NY 10001</span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3 text-sm">
                Download Our App
              </h5>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded transition-colors">
                  <Smartphone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on</div>
                    <div className="text-sm font-semibold text-white">
                      App Store
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded transition-colors">
                  <Smartphone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm font-semibold text-white">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Social Media & Payment */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-white">Follow Us:</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white">We Accept:</span>
            <div className="flex gap-2">
              <div className="bg-white px-3 py-1.5 rounded flex items-center">
                <CreditCard className="w-6 h-6 text-gray-700" />
              </div>
              <div className="bg-white px-3 py-1.5 rounded text-xs font-bold text-gray-700">
                VISA
              </div>
              <div className="bg-white px-3 py-1.5 rounded text-xs font-bold text-gray-700">
                MC
              </div>
              <div className="bg-white px-3 py-1.5 rounded text-xs font-bold text-blue-600">
                AMEX
              </div>
              <div className="bg-white px-3 py-1.5 rounded text-xs font-bold text-blue-700">
                PayPal
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-400">© 2025 YourShop. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {policies.map((item, index) => (
              <span key={item.name} className="flex items-center gap-4">
                <a
                  href={item.href}
                  className="hover:text-primary/70 transition-colors">
                  {item.name}
                </a>
                {index < policies.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
