import {
  Heart,
  User,
  ShoppingBag,
  LogOut,
  List,
  Settings,
  LayoutDashboard,
  Menu,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import { SearchSection } from "./search";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const { i18n, t } = useTranslation();
  const [isLogin, setIsLogin] = useState(false);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="h-14 md:h-16 flex items-center justify-center w-full bg-background px-4">
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
          <SearchSection />
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

          {isLogin ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="focus:outline-none">
                  <User className="h-6 w-6" />
                  <span className="sr-only">User Profile</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <User className="h-6 w-6" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LayoutDashboard className="h-6 w-6" /> Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Heart className="h-6 w-6" /> Wishlist
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShoppingBag className="h-6 w-6" /> Cart
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <List className="h-6 w-6" /> Orders
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="h-6 w-6" /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setIsLogin(false)}
                  variant="destructive">
                  <LogOut className="h-6 w-6 " />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => setIsLogin(true)}>Sign In</Button>
          )}
        </div>
      </div>
    </header>
  );
};
