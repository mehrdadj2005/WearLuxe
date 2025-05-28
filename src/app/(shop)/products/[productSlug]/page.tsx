import Container from "@/components/container";
import SizeToggleButton from "@/components/ui/button/sizeToggleButton";
import { getProduct } from "@/services/getProduct";
import { Box, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import ProductError from "./error";

interface ICategory {
  params: Promise<{ productSlug: string }>;
}

// export async function generateStaticParams() {
//     return categories.map((category) => ({
//         productSlug: category.id,
//     }));
// }

async function ProductId({ params }: ICategory) {
  const url = await params;
  const { data, error } = await getProduct(
    `http://localhost:4000/products/${url.productSlug}`
  );

  if (error) return <ProductError error={error} />;
  if (!data) return <ProductError error={error} />;

  return (
    <Container>
      <Grid container spacing={3} sx={{ paddingY: { xs: 10, md: 10 } }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Image
            src={data?.images[0] ?? ""}
            alt={data?.name ?? ""}
            width={500}
            height={500}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box>
            <Typography variant="h3">{data?.name}</Typography>
            <Box>
              <Typography
                sx={{
                  backgroundColor: "var(--color-primary-200)",
                  width: "fit-content",
                  paddingX: 2,
                  paddingY: 0.5,
                  borderRadius: 50,
                  marginTop: 2,
                }}
                variant="h6"
              >
                {data?.price.toLocaleString()} تومان
              </Typography>
            </Box>
          </Box>
          <List>
            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
              سایز: {data?.sizes.join(", ")}
            </ListItem>
            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
              رنگ: {data?.colors.join(", ")}
            </ListItem>
            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
              موجودی: {data?.stock ? "موجود" : "ناموجود"}
            </ListItem>
            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
              توضیحات: {data?.description}
            </ListItem>
          </List>
          <Divider />
          <Box sx={{ marginTop: 1 }}>
            <SizeToggleButton />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductId;
