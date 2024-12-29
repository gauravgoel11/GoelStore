import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { MinusIcon, PlusIcon, ShoppingCart } from "lucide-react";

interface QuickViewModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  product?: {
    id: string;
    name: string;
    price: number;
    description: string;
    images: string[];
    sizes: string[];
  };
}

const defaultProduct = {
  id: "1",
  name: "Classic Cotton T-Shirt",
  price: 29.99,
  description:
    "A comfortable and stylish cotton t-shirt perfect for everyday wear. Made from premium materials for lasting quality.",
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&auto=format",
  ],
  sizes: ["S", "M", "L", "XL"],
};

const QuickViewModal = ({
  open = true,
  onOpenChange,
  product = defaultProduct,
}: QuickViewModalProps) => {
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-xl font-semibold text-green-600">
            ${product.price.toFixed(2)}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg"
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75 transition"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">{product.description}</p>

            <div>
              <h3 className="font-semibold mb-3">Select Size</h3>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="grid grid-cols-4 gap-2"
              >
                {product.sizes.map((size) => (
                  <div key={size}>
                    <RadioGroupItem
                      value={size}
                      id={size}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={size}
                      className="flex items-center justify-center h-10 rounded-md border border-gray-200 peer-data-[state=checked]:border-black peer-data-[state=checked]:bg-black peer-data-[state=checked]:text-white cursor-pointer"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-semibold">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange("decrease")}
                    disabled={quantity <= 1}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange("increase")}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
