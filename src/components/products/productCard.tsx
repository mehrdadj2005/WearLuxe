import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ProductData {
  url: string;
  alt: string;
  title: string;
  price: number;
  discountePercentage: number;
  discountedPrice: number;
}

export default function ProductCard({
  url,
  alt,
  title,
  price,
  discountePercentage,
  discountedPrice,
}: ProductData) {
  const discountValid = discountedPrice > 0;

  return (
    <Card className="max-w-56 h-96 rounded-2xl border border-neutral-200 flex flex-col overflow-hidden cursor-pointer select-none">
      <CardMedia
        component="img"
        image={url}
        alt={alt}
        className="w-full h-[224px] object-cover border-b border-neutral-200 rounded-t-2xl"
      />

      <CardContent className="flex flex-col justify-between h-full ">
        <Typography
          variant="body2"
          className="text-neutral-800 text-xs line-clamp-2"
        >
          {title}
        </Typography>

        <Box className="flex justify-between items-end">
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
                <Box className="text-xs line-through text-neutral-400 mb-1">
                  {price.toLocaleString()}
                </Box>
                <Box className="text-xs font-semibold">
                  {discountedPrice.toLocaleString()} تومان
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
