import React, { useState } from "react";
import ProductCard from "./ProductCard";
import QuickViewModal from "./QuickViewModal";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: string[];
  description: string;
  images: string[];
}

interface ProductGridProps {
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
    sizes: ["S", "M", "L", "XL"],
    description:
      "A comfortable and stylish cotton t-shirt perfect for everyday wear.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&auto=format",
    ],
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500&auto=format",
    sizes: ["S", "M", "L"],
    description: "Classic denim jacket with modern styling.",
    images: [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500&auto=format",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=500&auto=format",
    ],
  },
  {
    id: "3",
    name: "Leather Boots",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&auto=format",
    sizes: ["40", "41", "42", "43", "44"],
    description: "Premium leather boots for any occasion.",
    images: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&auto=format",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&auto=format",
    ],
  },
  {
    id: "4",
    name: "Wool Sweater",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format",
    sizes: ["S", "M", "L", "XL"],
    description: "Warm and cozy wool sweater for cold days.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format",
    ],
  },
];

const ProductGrid = ({ products = defaultProducts }: ProductGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setSelectedProduct(product);
      setIsQuickViewOpen(true);
    }
  };

  const handleAddToCart = (id: string) => {
    // Placeholder for add to cart functionality
    console.log("Added to cart:", id);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              sizes={product.sizes}
              onQuickView={handleQuickView}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {selectedProduct && (
          <QuickViewModal
            open={isQuickViewOpen}
            onOpenChange={setIsQuickViewOpen}
            product={selectedProduct}
          />
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
