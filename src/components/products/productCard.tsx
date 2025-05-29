"use client";
import { IProduct } from "@/types/product";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ProductData {
  alt?: "test";
  id?: string;
  slug?: string;
  name?: string;
  price?: number;
  colors?: string[];
  sizes?: string[];
  images?: string[];
  rating?: number;
  description?: string;
  items?: string[];
  discountedPercentage?: number;
  discountedPrice?: number;
}

export default function ProductCard({
  item
}: { item: IProduct }) {
  const discountValid = item.discountedPrice > 0;

  return (
    <Card className="w-full h-full !max-w-[270px] flex flex-col overflow-hidden cursor-pointer select-none !content-stretch">
      <CardMedia
        component="img"
        image={item.images[0]}
        alt={item.name}
        className="w-full h-[224px] object-cover border-b border-neutral-200"
      />

      <CardContent className="flex flex-col justify-between h-fit !pb-2">
        <Typography
          variant="body2"
          className="text-neutral-800 text-xs line-clamp-2 sm:!pb-10"
        >
          {item.name}
        </Typography>

        <Box className="flex justify-between items-end">
          <Box className="flex flex-col justify-end h-11">
            {discountValid && (
              <Typography
                variant="inherit"
                className="bg-primary-400 text-neutral-200 text-[12px] px-2 py-0.5 rounded w-fit"
              >
                {item.discountedPercentage}%
              </Typography>
            )}
          </Box>

          <Box className="text-left">
            {discountValid ? (
              <>
                <Box className="text-xs line-through text-neutral-400">
                  {item.price.toLocaleString()}
                </Box>
                <Box className="text-xs font-semibold">
                  {item.discountedPrice.toLocaleString()}{" "}
                  <Typography
                    variant="overline"
                    className="inline-block md:hidden h-6"
                  >
                    ت
                  </Typography>
                  <Typography
                    variant="overline"
                    className="hidden md:inline-block h-6"
                  >
                    تومان
                  </Typography>
                </Box>
              </>
            ) : (
              <Box className="text-xs font-semibold h-6 flex items-end">
                {item.price.toLocaleString()} تومان
              </Box>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
