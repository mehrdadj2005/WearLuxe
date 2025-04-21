"use client";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ProductData {
  alt?: "test";
  id: string;
  slug?: string;
  name: string;
  price: number;
  colors: string[];
  sizes: string[];
  images: string[];
  rating: number;
  description?: string;
  items?: string[];
  discountePercentage?: number;
  discountedPrice: number;
}

export default function ProductCard({
  id,
  slug,
  rating,
  description,
  items,
  colors,
  sizes,
  name,
  alt,
  price,
  images,
  discountePercentage,
  discountedPrice,
}: ProductData) {
  const discountValid = discountedPrice > 0;

  return (
    <Card className="max-w-56 h-full flex flex-col overflow-hidden cursor-pointer select-none !content-stretch">
      <CardMedia
        component="img"
        image={images[0]}
        alt={alt}
        className="w-full h-[224px] object-cover border-b border-neutral-200"
      />

      <CardContent className="flex flex-col justify-between h-full ">
        <Typography
          variant="body2"
          className="text-neutral-800 text-xs line-clamp-2"
        >
          {name}
        </Typography>

        <Box className="flex justify-between items-end min-h-12">
          <Box className="flex flex-col justify-end h-11">
            {discountValid && (
              <Typography
                variant="inherit"
                className="bg-primary-400 text-neutral-200 text-[12px] px-2 py-0.5 rounded w-fit"
              >
                {discountePercentage}%
              </Typography>
            )}
          </Box>

          <Box className="text-left">
            {discountValid ? (
              <>
                <Box className="text-xs line-through text-neutral-400">
                  {price.toLocaleString()}
                </Box>
                <Box className="text-xs font-semibold">
                  {discountedPrice.toLocaleString()}
                  <Typography
                    variant="overline"
                    className="inline-block md:hidden"
                  >
                    ت
                  </Typography>
                  <Typography
                    variant="overline"
                    className="hidden md:inline-block"
                  >
                    تومان
                  </Typography>
                </Box>
              </>
            ) : (
              <Box className="text-xs font-semibold">
                {price.toLocaleString()} تومان
              </Box>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
