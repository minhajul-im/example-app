import { useConfig } from "@/hooks/useConfig";
import { getConfig } from "@/helper";
import { HeaderDesktop } from "./desktop";
import { HeaderMobile } from "./mobile";
import { useGetCart } from "@/controllers/cartController";
import { useGetWishlist } from "@/controllers/wishlistController";

export const Header = () => {
  useGetCart();
  useGetWishlist();
  const config = useConfig();

  const isSticky = getConfig(config, "header_stikcy")?.value;

  return (
    <header className={`${isSticky ? "sticky top-0 z-50" : ""}`}>
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
};
