import {
  Heart,
  LayoutDashboard,
  List,
  LogOut,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenu } from "../ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const UserProfile = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" size="icon-lg" className="focus:outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
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
          <DropdownMenuItem variant="destructive">
            <LogOut className="h-6 w-6 " />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button asChild>
        <Link to="/signin">Sign In</Link>
      </Button>
    </>
  );
};
