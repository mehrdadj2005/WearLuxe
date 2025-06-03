import Container from "@/components/container";
import HeroSection from "@/components/layout/hero";
import ProductSlider from "@/components/products/productSlider";
import { getProduct } from "@/services/getProduct";
import { IProduct } from "@/types/product";
import { Box, CardMedia } from "@mui/material";

export default async function HomePage() {
  const { data: dataShirts } = await getProduct<IProduct[]>(
    "http://localhost:4000/products?categoryId=1"
  );
  const { data: dataPants } = await getProduct<IProduct[]>(
    "http://localhost:4000/products?categoryId=2"
  );
  const { data: dataCats } = await getProduct<IProduct[]>(
    "http://localhost:4000/products?categoryId=3"
  );
  const { data: dataSets } = await getProduct<IProduct[]>(
    "http://localhost:4000/products?categoryId=4"
  );

  return (
    <>
      <HeroSection />
      <Box className="bg-primary-200 py-4 md:py-8">
        <ProductSlider data={dataPants} />
      </Box>
      <ProductSlider data={dataShirts} />
      <ProductSlider data={dataCats} />
      <Box className="bg-secondary-200 py-4 md:py-8">
        <ProductSlider data={dataSets} />
      </Box>
      <ProductSlider data={dataPants} />
      <ProductSlider data={dataShirts} />
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
      <ProductSlider data={dataCats} />
      <ProductSlider data={dataSets} />
    </>
  );
}
