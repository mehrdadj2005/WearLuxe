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
      slidesPerView={5}
      spaceBetween={30}
      freeMode={true}
      modules={[Pagination]}
      className="mySwiper !px-12 !py-8"
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
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
