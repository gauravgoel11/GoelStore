import React from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import CategoryCarousel from "../components/CategoryCarousel";
import ProductGrid from "../components/ProductGrid";
import FilterSidebar from "../components/FilterSidebar";

const HomePage = () => {
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = React.useState<string[]>([]);
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);
  const [priceRange, setPriceRange] = React.useState<[number, number]>([
    0, 200,
  ]);

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const handleCategoryClick = (categoryId: string) => {
    console.log("Selected category:", categoryId);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 200]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} />
      <HeroBanner />
      <CategoryCarousel onCategoryClick={handleCategoryClick} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="hidden lg:block">
            <FilterSidebar
              selectedBrands={selectedBrands}
              selectedSizes={selectedSizes}
              selectedColors={selectedColors}
              priceRange={priceRange}
              onBrandChange={handleBrandChange}
              onSizeChange={handleSizeChange}
              onColorChange={handleColorChange}
              onPriceChange={setPriceRange}
              onClearAll={handleClearFilters}
            />
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
