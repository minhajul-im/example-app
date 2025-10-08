import { Heart, ShoppingBag, Menu, Image } from "lucide-react";
import { Link } from "react-router-dom";
import { useConfig } from "@/hooks/use-config";
import { getConfig, getImageUrl } from "@/helper";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { ActionSearchBar } from "./search";
import { LanguageSwitcher } from "./language";
import { UserProfile } from "./user";

export const Header = () => {
  const config = useConfig();

  const logo = getConfig(config, "header_logo")?.value;

  return (
    <header className="h-14 md:h-16 flex items-center justify-center w-full bg-background px-1 md:px-0">
      <div className="container flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 justify-start">
          <MobileMenu>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </MobileMenu>

          <Link to="/">
            <div className="w-20 h-12 relative overflow-hidden">
              {logo ? (
                <img
                  src={getImageUrl(logo as string)}
                  alt="logo"
                  className="absolute w-full h-full object-cover"
                />
              ) : (
                <div className="absolute w-full h-full flex items-center justify-center">
                  <Image className="w-6 h-6 text-primary" />
                </div>
              )}
            </div>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center">
          <ActionSearchBar />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <Button
            variant="ghost"
            size="icon-lg"
            className="relative hidden md:flex items-center justify-center">
            <Heart className="h-6 w-6" />
            <span className="sr-only">Wishlist</span>
          </Button>

          <Button variant="ghost" size="icon-lg" className="relative">
            <ShoppingBag className="h-6 w-6" />
            <span className="sr-only">Shopping Cart</span>
          </Button>

          <UserProfile />
        </div>
      </div>
    </header>
  );
};
