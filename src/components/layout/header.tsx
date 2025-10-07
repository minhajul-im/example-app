import { Heart, ShoppingBag, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ActionSearchBar } from "./search";
import { MobileMenu } from "./mobile-menu";

import { UserProfile } from "./user";

export const Header = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="h-14 md:h-16 flex items-center justify-center w-full bg-background px-1 md:px-0 sticky top-0 z-50">
      <div className="container flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 justify-start">
          <MobileMenu>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </MobileMenu>

          <h4 className="font-bold text-lg text-primary text-nowrap">
            {t("web_care")}
          </h4>
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center">
          <ActionSearchBar />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <div className="hidden md:block">
            <Select value={i18n.language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="bn">বাংলা</SelectItem>
              </SelectContent>
            </Select>
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
