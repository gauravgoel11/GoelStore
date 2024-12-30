import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  sizes?: string[];
  onAddToCart?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Classic White T-Shirt",
  price = 29.99,
  image = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
  sizes = ["S", "M", "L"],
  onAddToCart = () => {},
}: ProductCardProps) => {
  return (
    <Card className="group relative w-full overflow-hidden bg-white transition-all hover:shadow-lg">
      <CardContent className="p-0">
        {sizes.length === 0 && (
          <div className="absolute left-2 top-2 z-10">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
        {sizes.length > 0 && sizes.length <= 2 && (
          <div className="absolute left-2 top-2 z-10">
            <Badge
              variant="secondary"
              className="bg-yellow-100 text-yellow-800"
            >
              Low Stock
            </Badge>
          </div>
        )}
        <div className="relative h-[300px] w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute bottom-4 left-0 flex w-full justify-center space-x-2">
              <Button
                variant="secondary"
                size="sm"
                disabled={sizes.length === 0}
                onClick={() => onAddToCart(id)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
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
