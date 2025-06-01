"use client";

import { IProduct } from "@/types/product";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../container";
import ProductCard from "./productCard";

interface ProductSliderProps {
  data: IProduct[];
  className?: string;
}

export default function ProductSlider({ data, className }: ProductSliderProps) {
  return (
    <Container>
      <Box className="flex justify-between items-center">
        <Typography variant="h6" className="pr-8 text-neutral-800 pt-4 pb-2">
          {data[0].categoryName}
        </Typography>

        <Button
          variant="outlined"
          className="!border-neutral-800 !text-neutral-800"
        >
          مشاهده همه
        </Button>
      </Box>
      <Swiper
        spaceBetween={10}
        freeMode={true}
        modules={[Pagination]}
        className={`!px-2 !py-4 !pt-0 ${className}`}
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
        {data.map((item: IProduct) => (
          <SwiperSlide key={item.id}>
            <Link href={`products/${item.id}`}>
              <ProductCard item={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
