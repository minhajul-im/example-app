import { useState } from "react";

type MenuItem = {
  name: string;
  href?: string;
  submenu?: {
    columns: {
      title: string;
      links: { name: string; href: string; highlight?: boolean }[];
    }[];
    promos?: {
      image: string;
      title: string;
      link: string;
    }[];
  };
};

const menuData: MenuItem[] = [
  {
    name: "Furniture",
    href: "/furniture",
  },
  {
    name: "Outdoor",
    href: "/outdoor",
  },
  {
    name: "Bedding & Bath",
    submenu: {
      columns: [
        {
          title: "Bed & Bath Sale",
          links: [
            { name: "Bedding", href: "/bedding" },
            { name: "Bedding & Bedding Sets", href: "/bedding-sets" },
            { name: "Throw Pillows", href: "/throw-pillows" },
            { name: "Throw Blankets", href: "/throw-blankets" },
            { name: "Sheets & Pillowcases", href: "/sheets" },
            { name: "Bedding Sale", href: "/bedding-sale", highlight: true },
          ],
        },
        {
          title: "Mattresses & Foundations",
          links: [
            { name: "All mattresses", href: "/mattresses" },
            { name: "King Mattresses", href: "/king-mattresses" },
            { name: "Queen Mattresses", href: "/queen-mattresses" },
            { name: "Full Mattresses", href: "/full-mattresses" },
            { name: "Twin Mattresses", href: "/twin-mattresses" },
            { name: "Box springs & foundations", href: "/box-springs" },
            { name: "Adjustable beds", href: "/adjustable-beds" },
            { name: "Bed Frames", href: "/bed-frames" },
            {
              name: "Mattresses & foundations sale",
              href: "/mattresses-sale",
              highlight: true,
            },
          ],
        },
        {
          title: "Bath Rugs & Towels",
          links: [
            { name: "Bath Towels & Sets", href: "/bath-towels" },
            { name: "Bath Rugs & Mats", href: "/bath-rugs" },
            {
              name: "Bath Rugs & Towels Sale",
              href: "/bath-rugs-sale",
              highlight: true,
            },
            { name: "Bathroom Organization", href: "/bathroom-organization" },
            { name: "Countertop Bath Accessories", href: "/bath-accessories" },
            {
              name: "Shower & Bathtub Accessories",
              href: "/shower-accessories",
            },
            { name: "Towel Storage", href: "/towel-storage" },
            {
              name: "Bathroom Organization Sale",
              href: "/bathroom-org-sale",
              highlight: true,
            },
          ],
        },
        {
          title: "New & Featured",
          links: [
            { name: "Wayfair Verified™ Bedroom", href: "/verified-bedroom" },
            { name: "The Mattress Shop", href: "/mattress-shop" },
            { name: "Featured Brands", href: "/featured-brands" },
            { name: "RE/FINE™", href: "/refine" },
            { name: "Laura Ashley", href: "/laura-ashley" },
            { name: "Sealy", href: "/sealy" },
            { name: "Wayfair Sleep", href: "/wayfair-sleep" },
            { name: "Wayfair Basics", href: "/wayfair-basics" },
          ],
        },
      ],
      promos: [
        {
          image:
            "https://images.unsplash.com/photo-1753087379508-890a78f0c463?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Make a merry bed.",
          link: "/bedroom-decor",
        },
        {
          image:
            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
          title: "Boost your bathroom. Shop stylish storage.",
          link: "/bathroom-storage",
        },
      ],
    },
  },
  {
    name: "Rugs",
    href: "/rugs",
  },
  {
    name: "Decor & Pillows",
    submenu: {
      columns: [
        {
          title: "Wall Decor",
          links: [
            { name: "Wall Art", href: "/wall-art" },
            { name: "Mirrors", href: "/mirrors" },
            { name: "Wall Shelves", href: "/wall-shelves" },
            { name: "Clocks", href: "/clocks" },
            {
              name: "Wall Decor Sale",
              href: "/wall-decor-sale",
              highlight: true,
            },
          ],
        },
        {
          title: "Decorative Accents",
          links: [
            { name: "Throw Pillows", href: "/throw-pillows" },
            { name: "Decorative Pillows", href: "/decorative-pillows" },
            { name: "Vases", href: "/vases" },
            { name: "Candles & Holders", href: "/candles" },
            { name: "Picture Frames", href: "/picture-frames" },
          ],
        },
        {
          title: "Trending Now",
          links: [
            { name: "Farmhouse Decor", href: "/farmhouse-decor" },
            { name: "Modern Decor", href: "/modern-decor" },
            { name: "Coastal Decor", href: "/coastal-decor" },
            { name: "Boho Decor", href: "/boho-decor" },
          ],
        },
      ],
      promos: [
        {
          image:
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
          title: "Transform your space with art.",
          link: "/wall-art",
        },
      ],
    },
  },
  {
    name: "Lighting",
    href: "/lighting",
  },
  {
    name: "Kitchen",
    href: "/kitchen",
  },
  {
    name: "Appliances",
    href: "/appliances",
  },
];

export const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="relative border border-border">
      <div className="container mx-auto">
        <ul className="flex items-center overflow-x-auto gap-8 py-2">
          {menuData.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}>
              {item.submenu ? (
                <button className="font-medium hover:text-primary transition-colors hover:underline cursor-pointer">
                  {item.name}
                </button>
              ) : (
                <a
                  href={item.href}
                  className="font-medium hover:text-pri transition-colors hover:text-primary hover:underline cursor-pointer">
                  {item.name}
                  {item.href}
                </a>
              )}

              {item?.submenu && activeMenu === item.name && (
                <div className="fixed left-0 right-0 top-[98px] z-50 flex justify-center px-4">
                  <div className="bg-background border shadow-xl rounded w-full max-w-[1200px] max-h-[600px] overflow-y-auto">
                    <div className="p-8 flex gap-8">
                      <div className="flex gap-8 flex-1 min-w-0">
                        {item.submenu.columns.map((column, idx) => (
                          <div key={idx} className="flex-1 min-w-[180px]">
                            <h3 className="font-bold text-primary mb-4">
                              {column.title}
                            </h3>
                            <ul className="space-y-2">
                              {column.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                  <a
                                    href={link.href}
                                    className={`text-sm hover:underline hover:text-primary block ${
                                      link.highlight
                                        ? "text-primary font-semibold"
                                        : "text-muted-foreground"
                                    }`}>
                                    {link.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {item.submenu.promos && (
                        <div className="w-80 flex-shrink-0 space-y-4">
                          {item.submenu.promos.map((promo, idx) => (
                            <a
                              key={idx}
                              href={promo.link}
                              className="block group">
                              <div className="relative overflow-hidden rounded-lg">
                                <img
                                  src={promo.image || "/placeholder.svg"}
                                  alt={promo.title}
                                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                                  crossOrigin="anonymous"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                  <p className="text-white font-semibold line-clamp-1">
                                    {promo.title}
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
