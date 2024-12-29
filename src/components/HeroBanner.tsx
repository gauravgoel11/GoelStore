import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface BannerSlide {
  id: string;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

interface HeroBannerProps {
  slides?: BannerSlide[];
  onSlideClick?: (slideId: string) => void;
}

const defaultSlides: BannerSlide[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop",
    title: "Summer Collection 2024",
    description: "Discover the latest trends in summer fashion",
    ctaText: "Shop Now",
    ctaLink: "/summer-collection",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&h=600&fit=crop",
    title: "New Arrivals",
    description: "Be the first to shop our latest styles",
    ctaText: "Explore More",
    ctaLink: "/new-arrivals",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&h=600&fit=crop",
    title: "Special Offers",
    description: "Up to 50% off on selected items",
    ctaText: "View Deals",
    ctaLink: "/special-offers",
  },
];

const HeroBanner = ({
  slides = defaultSlides,
  onSlideClick = () => {},
}: HeroBannerProps) => {
  return (
    <div className="relative w-full bg-gray-100">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[480px] w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40">
                  <div className="flex h-full items-center justify-center">
                    <div className="max-w-2xl text-center text-white">
                      <h1 className="mb-4 text-5xl font-bold">{slide.title}</h1>
                      <p className="mb-8 text-xl">{slide.description}</p>
                      <Button
                        size="lg"
                        onClick={() => onSlideClick(slide.id)}
                        className="bg-white text-black hover:bg-gray-100"
                      >
                        {slide.ctaText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default HeroBanner;
