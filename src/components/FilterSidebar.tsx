import React from "react";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

interface FilterSidebarProps {
  brands?: string[];
  sizes?: string[];
  colors?: Array<{ name: string; hex: string }>;
  selectedBrands?: string[];
  selectedSizes?: string[];
  selectedColors?: string[];
  priceRange?: [number, number];
  maxPrice?: number;
  onBrandChange?: (brand: string) => void;
  onSizeChange?: (size: string) => void;
  onColorChange?: (color: string) => void;
  onPriceChange?: (values: [number, number]) => void;
  onClearAll?: () => void;
}

const FilterSidebar = ({
  brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"],
  sizes = ["XS", "S", "M", "L", "XL", "XXL"],
  colors = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Red", hex: "#FF0000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Green", hex: "#00FF00" },
  ],
  selectedBrands = [],
  selectedSizes = [],
  selectedColors = [],
  priceRange = [0, 200],
  maxPrice = 200,
  onBrandChange = () => {},
  onSizeChange = () => {},
  onColorChange = () => {},
  onPriceChange = () => {},
  onClearAll = () => {},
}: FilterSidebarProps) => {
  return (
    <div className="w-[280px] bg-white p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={onClearAll}>
          Clear all
        </Button>
      </div>

      <Separator className="my-4" />

      <ScrollArea className="h-[calc(100vh-200px)] pr-4">
        <div className="space-y-6">
          {/* Price Range */}
          <div className="space-y-4">
            <h3 className="font-medium">Price Range</h3>
            <Slider
              defaultValue={priceRange}
              max={maxPrice}
              step={1}
              value={priceRange}
              onValueChange={onPriceChange}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <Separator />

          {/* Brands */}
          <div className="space-y-4">
            <h3 className="font-medium">Brands</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => onBrandChange(brand)}
                  />
                  <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Sizes */}
          <div className="space-y-4">
            <h3 className="font-medium">Sizes</h3>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <div
                  key={size}
                  className={`flex h-10 cursor-pointer items-center justify-center rounded-md border transition-colors ${
                    selectedSizes.includes(size)
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input hover:bg-accent hover:text-accent-foreground"
                  }`}
                  onClick={() => onSizeChange(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Colors */}
          <div className="space-y-4">
            <h3 className="font-medium">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <div
                  key={color.name}
                  className={`group relative cursor-pointer rounded-full p-1 ${
                    selectedColors.includes(color.name)
                      ? "ring-2 ring-primary ring-offset-2"
                      : ""
                  }`}
                  onClick={() => onColorChange(color.name)}
                >
                  <div
                    className="h-6 w-6 rounded-full border"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default FilterSidebar;
