import { useState, useRef, useEffect } from "react";
import { useMenuData } from "./useMenu";
import { Link } from "react-router-dom";
import { Image, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const { menuData, isLoading, error } = useMenuData();

  // Check scroll position and update button states
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const handleResize = () => checkScrollPosition();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuData]);

  if (isLoading) {
    return (
      <nav className="relative border border-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-center py-4">
            <div className="animate-pulse text-muted-foreground">
              Loading categories...
            </div>
          </div>
        </div>
      </nav>
    );
  }

  if (error) {
    return (
      <nav className="relative border border-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-center py-4">
            <div className="text-red-500">Failed to load categories</div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="border border-border sticky top-14 md:top-16 z-60 bg-background shadow-sm">
      <div className="container mx-auto relative">
        <AnimatePresence>
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-full p-2 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 cursor-pointer"
              aria-label="Scroll left">
              <ChevronLeft className="w-4 h-4 text-primary" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-full p-2 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 cursor-pointer"
              aria-label="Scroll right">
              <ChevronRight className="w-4 h-4 text-primary" />
            </motion.button>
          )}
        </AnimatePresence>

        <div className="relative overflow-hidden">
          <ul
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className="flex items-center gap-8 py-2 scrollbar-hide overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {menuData?.map((item) => (
              <li
                key={item?.name}
                className="relative text-nowrap"
                onMouseEnter={() => item?.submenu && setActiveMenu(item?.name)}
                onMouseLeave={() => setActiveMenu(null)}>
                {item?.submenu ? (
                  <button className="font-medium hover:text-primary transition-colors hover:underline cursor-pointer">
                    {item?.name}
                  </button>
                ) : (
                  <Link
                    to={item?.href as string}
                    className="font-medium hover:text-pri transition-colors hover:text-primary hover:underline cursor-pointer">
                    {item?.name}
                  </Link>
                )}

                {item?.submenu && activeMenu === item?.name && (
                  <div className="fixed left-0 right-0 top-[98px] z-50 flex justify-center px-4">
                    <div className="bg-background border shadow-xl rounded w-full max-w-[1200px] max-h-[600px] overflow-y-auto">
                      <div className="p-8 flex gap-8">
                        <div className="flex gap-8 flex-1 min-w-0">
                          {item?.submenu?.columns?.map((column, idx) => (
                            <div key={idx} className="flex-1 min-w-[180px]">
                              <h3 className="font-bold text-primary mb-4 line-clamp-1">
                                {column?.title}
                              </h3>
                              <ul className="space-y-2">
                                {column?.links?.map((link, linkIdx) => (
                                  <li key={linkIdx}>
                                    <Link
                                      to={link?.href}
                                      className={`text-sm hover:underline hover:text-primary block ${
                                        link?.highlight
                                          ? "text-primary font-semibold"
                                          : "text-muted-foreground"
                                      }`}>
                                      {link?.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {item?.submenu?.promos && (
                          <div className="w-80 flex-shrink-0 space-y-4">
                            {item?.submenu?.promos?.map((promo, idx) => (
                              <Link
                                key={idx}
                                to={promo?.link}
                                className="block group">
                                <div className="w-full h-48 object-cover relative overflow-hidden rounded-lg">
                                  {promo?.image ? (
                                    <img
                                      src={promo?.image}
                                      alt={promo?.title}
                                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                                      loading="lazy"
                                      crossOrigin="anonymous"
                                    />
                                  ) : (
                                    <div className="absolute w-full h-full bg-gray-200 animate-pulse">
                                      <Image className="w-full h-full object-cover" />
                                    </div>
                                  )}
                                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <p className="text-white font-semibold line-clamp-1">
                                      {promo?.title}
                                    </p>
                                  </div>
                                </div>
                              </Link>
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
      </div>
    </nav>
  );
};
