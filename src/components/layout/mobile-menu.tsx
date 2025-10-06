import { useState } from "react";
import { ChevronRight, ChevronLeft, Heart, Package } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

type MenuItem = {
  name: string;
  href?: string;
  icon?: string;
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
    icon: "🪑",
    submenu: {
      columns: [
        {
          title: "Furniture Sale",
          links: [
            {
              name: "Furniture Sale",
              href: "/furniture-sale",
              highlight: true,
            },
          ],
        },
        {
          title: "Living Room",
          links: [
            { name: "Living Room Furniture", href: "/living-room" },
            { name: "Office Furniture", href: "/office" },
            { name: "Bedroom Furniture", href: "/bedroom" },
            { name: "Entry & Mudroom Furniture", href: "/entry" },
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
    name: "Outdoor",
    icon: "🌳",
    submenu: {
      columns: [
        {
          title: "Outdoor Furniture",
          links: [
            { name: "Patio Furniture", href: "/patio" },
            { name: "Outdoor Decor", href: "/outdoor-decor" },
            { name: "Grills & Outdoor Cooking", href: "/grills" },
          ],
        },
      ],
    },
  },
  {
    name: "Bedding & Bath",
    icon: "🛏️",
    submenu: {
      columns: [
        {
          title: "Bedding",
          links: [
            { name: "Bedding & Bedding Sets", href: "/bedding-sets" },
            { name: "Throw Pillows", href: "/throw-pillows" },
            { name: "Sheets & Pillowcases", href: "/sheets" },
          ],
        },
        {
          title: "Bath",
          links: [
            { name: "Bath Towels & Sets", href: "/bath-towels" },
            { name: "Bath Rugs & Mats", href: "/bath-rugs" },
            { name: "Bathroom Organization", href: "/bathroom-organization" },
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
    icon: "🧶",
    href: "/rugs",
  },
  {
    name: "Decor & Pillows",
    icon: "🖼️",
    submenu: {
      columns: [
        {
          title: "Wall Decor",
          links: [
            { name: "Wall Art", href: "/wall-art" },
            { name: "Mirrors", href: "/mirrors" },
            { name: "Wall Shelves", href: "/wall-shelves" },
          ],
        },
      ],
    },
  },
];

export const MobileMenu = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"main" | string>("main");
  const [activeSubmenu, setActiveSubmenu] = useState<MenuItem | null>(null);

  const openSubmenu = (item: MenuItem) => {
    setActiveSubmenu(item);
    setCurrentView(item.name);
  };

  const goBackToMain = () => {
    setCurrentView("main");
    setActiveSubmenu(null);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setCurrentView("main");
    setActiveSubmenu(null);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center justify-start gap-2">
            <h4 className="font-bold text-lg text-primary text-nowrap">
              {t("web_care")}
            </h4>
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-73px)]">
          {/* Main menu view */}
          {currentView === "main" && (
            <div>
              <ul className="flex flex-col gap-2 px-4">
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 h-auto"
                    asChild>
                    <a href="/lists" onClick={closeMenu}>
                      <Heart className="h-5 w-5" />
                      <span>Lists</span>
                    </a>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 h-auto"
                    asChild>
                    <a href="/orders" onClick={closeMenu}>
                      <Package className="h-5 w-5" />
                      <span>My Orders</span>
                    </a>
                  </Button>
                </li>
              </ul>

              <Separator />

              {/* Departments */}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-3">Departments</h3>
                <ul className="space-y-1">
                  {menuData?.map((item: MenuItem) => (
                    <li key={item.name}>
                      {item.submenu ? (
                        <Button
                          variant="ghost"
                          className="w-full justify-between h-auto py-3"
                          onClick={() => openSubmenu(item)}>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{item?.icon}</span>
                            <span className="font-medium">{item?.name}</span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          className="w-full justify-between h-auto py-3"
                          asChild>
                          <a href={item?.href} onClick={closeMenu}>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{item?.icon}</span>
                              <span className="font-medium">{item?.name}</span>
                            </div>
                          </a>
                        </Button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sign in button */}
              <div className="p-4">
                <Button
                  className="w-full bg-primary  hover:bg-primary/90 rounded-full"
                  asChild>
                  <a href="/signin" onClick={closeMenu}>
                    Sign In
                  </a>
                </Button>
              </div>
            </div>
          )}

          {currentView !== "main" && activeSubmenu && (
            <div>
              <Button
                variant="ghost"
                className="gap-2 px-0 hover:bg-transparent"
                onClick={goBackToMain}>
                <ChevronLeft className="h-5 w-5" />
                <span className="underline">Back to Main Menu</span>
              </Button>

              <Separator />

              <div className="flex items-center justify-between px-4 py-2">
                <h2 className="font-bold text-xl line-clamp-1">
                  {activeSubmenu?.name}
                </h2>
                <a
                  href={"/"}
                  className="text-primary font-semibold text-sm hover:underline"
                  onClick={closeMenu}>
                  See All
                </a>
              </div>
              <Separator />

              <div className="p-4">
                {activeSubmenu?.submenu?.columns?.map((column, idx: number) => (
                  <div key={idx} className="mb-4">
                    {column?.title && (
                      <h3 className="font-semibold text-sm text-muted-foreground mb-3 mx-4 line-clamp-1">
                        {column?.title}
                      </h3>
                    )}
                    <ul className="space-y-1">
                      {column?.links?.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <Button
                            variant="ghost"
                            className={`w-full justify-between h-auto ${
                              link?.highlight
                                ? "bg-pink-50 hover:bg-pink-100"
                                : ""
                            }`}
                            asChild>
                            <a href={link?.href} onClick={closeMenu}>
                              <div className="flex items-center gap-3">
                                {link?.highlight && (
                                  <span className="bg-red-100 text-destructive text-xs font-semibold px-2 py-1 rounded">
                                    Sale
                                  </span>
                                )}
                                <span
                                  className={
                                    link?.highlight
                                      ? "text-primary font-semibold"
                                      : ""
                                  }>
                                  {link?.name}
                                </span>
                              </div>
                            </a>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {activeSubmenu?.submenu?.promos && (
                  <div className="space-y-4">
                    {activeSubmenu?.submenu?.promos?.map((promo, idx) => (
                      <a key={idx} href={promo?.link} className="block group">
                        <div className="relative overflow-hidden w-full h-36 rounded-lg">
                          <img
                            src={promo?.image || "/placeholder.svg"}
                            alt={promo?.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            crossOrigin="anonymous"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                            <p className="text-white font-semibold line-clamp-1">
                              {promo?.title}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
