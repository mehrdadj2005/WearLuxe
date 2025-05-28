import ProductDetailsFilter from "@/app/(shop)/products/category/[categorySlug]/productDetailsFilter";
import ProductDetailsSort from "@/app/(shop)/products/category/[categorySlug]/productDetailsSort";
import Container from "@/components/container";
import ProductCard from "@/components/products/productCard";
import { getProduct } from "@/services/getProduct";
import { Box } from "@mui/material";
interface ICategoryPageProps {
  searchParams: Promise<{ sort: string }>;
}

export default async function CategoryPage({
  searchParams,
}: ICategoryPageProps) {
  const data = (await searchParams) as Record<string, string>;

  let filters = "";
  for (const i in data) {
    filters += `${i}=${data[i]}&`;
  }

  const products = await getProduct(
    `http://localhost:4000/products?${filters}`
  );

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", xl: "row" },
        pt: 2,
      }}
    >
      <Box
        sx={{
          display: { xs: "none", xl: "flex" },
        }}
      >
        <ProductDetailsFilter showDrawerFilter={false} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", xl: "none" },
            }}
          >
            <ProductDetailsFilter showDrawerFilter={false} />
          </Box>
          <ProductDetailsSort showDrawerSort={false} />
        </Box>
        <Box
          sx={{
            width: "100%",
            px: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {products.data.map((item) => (
            <Box
              key={item.id}
              sx={{
                p: 2,
                width: {
                  xs: "50%",
                  sm: "33.3333%",
                  lg: "25%",
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ProductCard {...item} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
