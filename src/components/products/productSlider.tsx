"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./productCard";
interface ProductData {
  url: string;
  alt: string;
  title: string;
  price: number;
  discountePercentage: number;
  discountedPrice: number;
}

interface ProductSliderProps {
  data: ProductData[];
}

export default function ProductSlider({ data }: ProductSliderProps) {
  return (
    <Swiper
      spaceBetween={10}
      freeMode={true}
      modules={[Pagination]}
      className="!px-2 !py-4"
      breakpoints={{
        360: {
          slidesPerView: 2.2,
        },
        460: {
          slidesPerView: 2.5,
        },
        640: {
          slidesPerView: 3.2,
        },
        800: {
          slidesPerView: 4.2,
        },
        1024: {
          slidesPerView: 5.2,
        },
        1280: {
          slidesPerView: 6.2,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <ProductCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
