import { IProduct } from "@/types/product";
import { Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

function ProductDetails({ product }: { product: IProduct }) {

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }} >
                <Typography sx={{ borderLeft: { xs: null, md: "1px solid rgba(0, 0, 0, 0.12)" }, paddingY: 1, fontWeight: 900 }}>مشخصات محصول</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
                <List sx={{ width: '100%', padding: 0 }}>
                    <ListItem sx={{ display: "flex", justifyContent: "space-between" }} >
                        <Typography>محصول</Typography>
                        <Typography>{product.name}</Typography>
                    </ListItem>

                    <ListItem sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "var(--color-primary-50)" }} >
                        <Typography>سایز</Typography>
                        <Typography>{product.sizes.join(', ')}</Typography>
                    </ListItem>
                    <ListItem sx={{ display: "flex", justifyContent: "space-between" }} >
                        <Typography>نوع</Typography>
                        <Typography>{"add type"}</Typography>
                    </ListItem>

                    <ListItem sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "var(--color-primary-50)" }} >
                        <Typography>رنگ ها</Typography>
                        <Typography>{product.colors.join(", ")}</Typography>
                    </ListItem>

                    <ListItem sx={{ display: "flex", justifyContent: "space-between" }} >
                        <Typography>جنس</Typography>
                        <Typography>{"add material"}</Typography>
                    </ListItem>

                    {product.sizes.map((size, index) =>
                        <ListItem key={index} sx={{ display: "flex", justifyContent: "space-between", backgroundColor: index % 2 === 0 ? "var(--color-primary-50)" : "transparent" }} >
                            <Typography>سایز {size}</Typography>
                            <Typography>{"add inseam"}</Typography>
                        </ListItem>
                    )}

                </List>
            </Grid>
        </Grid>
    );
}

export default ProductDetails;