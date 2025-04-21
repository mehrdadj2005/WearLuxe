"use client";

import { Container } from "@mui/material";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import hero01 from "../../../public/images/hero01.webp";
import hero02 from "../../../public/images/hero02.jpg";
import hero03 from "../../../public/images/hero03.jpg";
import hero04 from "../../../public/images/hero04.jpg";
import hero05 from "../../../public/images/hero05.jpg";
import hero06 from "../../../public/images/hero06.jpg";
import hero07 from "../../../public/images/hero07.jpg";

function HeroSection() {
  return (
    <Container className="grid grid-cols-3 gap-3 md:gap-5 py-10">
      <div className="col-span-3 md:col-span-2">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper !m-0 rounded-2xl"
        >
          <SwiperSlide>
            <Image
              src={hero01}
              alt="لباس مردانه"
              width={500}
              height={500}
              className="w-full bg-cover h-[300px] md:h-[480px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={hero02}
              alt="لباس مردانه"
              width={500}
              height={500}
              className="w-full bg-cover h-[300px] md:h-[480px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={hero03}
              alt="لباس مردانه"
              width={500}
              height={500}
              className="w-full bg-cover h-[300px] md:h-[480px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="hidden col-span-1 md:flex flex-col h-full gap-5">
        <div className="h-full">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper !m-0 rounded-2xl"
          >
            <SwiperSlide>
              <Image
                src={hero04}
                alt="لباس مردانه"
                width={500}
                height={500}
                className="w-full bg-cover md:h-[220px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={hero05}
                alt="لباس مردانه"
                width={500}
                height={500}
                className="w-full bg-cover md:h-[220px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="h-full">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper !m-0 rounded-2xl"
          >
            <SwiperSlide>
              <Image
                src={hero06}
                alt="لباس مردانه"
                width={500}
                height={500}
                className="w-full bg-cover md:h-[220px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={hero07}
                alt="لباس مردانه"
                width={500}
                height={500}
                className="w-full bg-cover md:h-[220px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
}

export default HeroSection;
