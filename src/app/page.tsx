import Container from "@/components/container";
import HeroSection from "@/components/layout/hero";
import ProductSlider from "@/components/products/productSlider";
import { catsCategory } from "@/config/catsCategory";
import { setsCategory } from "@/config/setsCategory";
import { shirtsCategory } from "@/config/shirtsCategory";
import { Box, CardMedia } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Box className="bg-primary-200 py-4 md:py-8">
        <ProductSlider data={catsCategory} />
      </Box>
      <ProductSlider data={setsCategory} />
      <ProductSlider data={shirtsCategory} />
      <Box className="bg-secondary-200 py-4 md:py-8">
        <ProductSlider data={catsCategory} />
      </Box>
      <ProductSlider data={setsCategory} />
      <ProductSlider data={shirtsCategory} />
      <Container>
        <Box className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 px-8 md:px-16 py-4 md:py-8">
          <CardMedia
            component="img"
            image={"/images/hero03.jpg"}
            alt="test1"
            className="h-full rounded-2xl"
          />
          <CardMedia
            component="img"
            image={"/images/hero04.jpg"}
            alt="test2"
            className="h-full rounded-2xl"
          />
          <CardMedia
            component="img"
            image={"/images/hero05.jpg"}
            alt="test3"
            className="h-full rounded-2xl"
          />
          <CardMedia
            component="img"
            image={"/images/hero06.jpg"}
            alt="test4"
            className="h-full rounded-2xl"
          />
        </Box>
      </Container>
      <ProductSlider data={setsCategory} />
      <ProductSlider data={shirtsCategory} />
    </>
  );
}
