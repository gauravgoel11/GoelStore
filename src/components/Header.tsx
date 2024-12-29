import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { ShoppingCart, Search, User, Heart, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface HeaderProps {
  cartCount?: number;
  onSearch?: (query: string) => void;
  onCartClick?: () => void;
  onProfileClick?: () => void;
  onWishlistClick?: () => void;
}

const Header = ({
  cartCount = 3,
  onSearch = () => {},
  onCartClick = () => {},
  onProfileClick = () => {},
  onWishlistClick = () => {},
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Mobile Menu Button */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col space-y-4">
              <Button variant="ghost">New Arrivals</Button>
              <Button variant="ghost">Women</Button>
              <Button variant="ghost">Men</Button>
              <Button variant="ghost">Accessories</Button>
              <Button variant="ghost">Sale</Button>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="text-xl font-bold">GOEL STORE</div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-4 md:flex">
          <Button variant="ghost">New Arrivals</Button>
          <Button variant="ghost">Women</Button>
          <Button variant="ghost">Men</Button>
          <Button variant="ghost">Accessories</Button>
          <Button variant="ghost">Sale</Button>
        </nav>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden flex-1 items-center justify-center px-6 md:flex"
        >
          <div className="relative w-full max-w-md">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            onClick={onWishlistClick}
          >
            <Heart className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Orders</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="border-t p-2 md:hidden">
        <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
