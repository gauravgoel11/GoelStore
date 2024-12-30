import { Card, CardContent } from "./ui/card";

interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

interface CategoryCarouselProps {
  categories?: Category[];
  onCategoryClick?: (categoryId: string) => void;
}

const CategoryCarousel = ({
  categories = [
    {
      id: "1",
      name: "Men's Fashion",
      image:
        "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500&auto=format",
      productCount: 150,
    },
    {
      id: "2",
      name: "Women's Fashion",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format",
      productCount: 200,
    },
    {
      id: "3",
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format",
      productCount: 80,
    },
  ],
  onCategoryClick = () => {},
}: CategoryCarouselProps) => {
  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-6 text-2xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => onCategoryClick(category.id)}
            >
              <CardContent className="p-0">
                <div className="relative h-[120px] w-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <p className="text-sm">{category.productCount} Products</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
