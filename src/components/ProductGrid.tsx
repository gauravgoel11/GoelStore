import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: string[];
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
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500&auto=format",
    sizes: ["S", "M", "L"],
  },
  {
    id: "3",
    name: "Leather Boots",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&auto=format",
    sizes: ["40", "41", "42", "43", "44"],
  },
];

const ProductGrid = ({ products = defaultProducts }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          sizes={product.sizes}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
