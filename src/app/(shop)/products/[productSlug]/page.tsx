import Container from "@/components/container";
import SizeToggleButton from "@/components/ui/button/sizeToggleButton";
import { getAllProducts, categories } from "@/config/category";
import { Box, Divider, Grid, List, ListItem, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import Image from "next/image";

interface ICategory {
    params: Promise<{ productSlug: string }>;
}

export async function generateStaticParams() {
    return categories.map((category) => ({
        productSlug: category.id,
    }));
}

async function ProductId({ params }: ICategory) {
    const url = await params;
    const product = getAllProducts().find(p => p.id === url.productSlug)

    return (
        <Container>
            <Grid container spacing={3} sx={{ paddingY: { xs: 10, md: 10 } }}
            >
                <Grid size={{ xs: 12, md: 4 }}>
                    <Image
                        src={product?.images[0] ?? ""}
                        alt={product?.name ?? ""}
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Box>
                        <Typography variant="h3">{product?.name}</Typography>
                        <Box >
                            <Typography sx={{ backgroundColor: "var(--color-primary-200)", width: "fit-content", paddingX: 2, paddingY: .5, borderRadius: 50, marginTop: 2 }} variant="h6">{product?.price.toLocaleString()} تومان</Typography>
                        </Box>
                    </Box>
                    <List>
                        <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>سایز: {product?.sizes.join(", ")}</ListItem>
                        <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>رنگ: {product?.colors.join(", ")}</ListItem>
                        <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>نوع: باید به دیتا ها اضافه شود</ListItem>
                        <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>امتیاز: {product?.rating}/5</ListItem>
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