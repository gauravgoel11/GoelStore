import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    {
      id: "4",
      name: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format",
      productCount: 120,
    },
    {
      id: "5",
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&auto=format",
      productCount: 90,
    },
  ],
  onCategoryClick = () => {},
}: CategoryCarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      const newScrollPosition =
        carouselRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-6 text-2xl font-bold">Shop by Category</h2>
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow-lg"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div
            ref={carouselRef}
            className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth"
          >
            {categories.map((category) => (
              <Card
                key={category.id}
                className="min-w-[200px] cursor-pointer transition-transform hover:scale-105"
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
                      <p className="text-sm">
                        {category.productCount} Products
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow-lg"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
