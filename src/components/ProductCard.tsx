import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Eye, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  sizes?: string[];
  onQuickView?: (id: string) => void;
  onAddToCart?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Classic White T-Shirt",
  price = 29.99,
  image = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
  sizes = ["S", "M", "L", "XL"],
  onQuickView = () => {},
  onAddToCart = () => {},
}: ProductCardProps) => {
  return (
    <Card className="group relative w-[280px] overflow-hidden bg-white transition-all hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative h-[300px] w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute bottom-4 left-0 flex w-full justify-center space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={() => onQuickView(id)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Quick View</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={() => onAddToCart(id)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to Cart</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-2 p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-lg font-bold text-primary">${price.toFixed(2)}</p>
        <div className="flex flex-wrap gap-1">
          {sizes.map((size) => (
            <Badge key={size} variant="secondary">
              {size}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
