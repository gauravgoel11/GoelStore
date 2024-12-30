import React from "react";
import HeroBanner from "@/components/HeroBanner";
import CategoryCarousel from "@/components/CategoryCarousel";
import ProductGrid from "@/components/ProductGrid";
import FilterSidebar from "@/components/FilterSidebar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      <CategoryCarousel />
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
