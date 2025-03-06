import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
const category = [
  "Frontend developer",
  "Backend developer",
  "Data science",
  "UI/UX Design",
  "FullStack developer",
  "Digital Marketer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) => {
    // dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem
              className=" basis-1/2 md:basis-1/2 lg-basis-1/3 flex justify-center"
              key={index}
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full border-grey border-1"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
