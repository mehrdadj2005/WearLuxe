import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface ProductData {
  url: string;
  alt: string;
  title: string;
  price: number;
  discountePercentage: number;
  discountedPrice: number;
  label: boolean;
}

interface ProductCardProps {
  data: ProductData;
  variant?: "slider" | "product";
}

export default function ProductCard({
  data,
  variant = "slider",
}: ProductCardProps) {
  const {
    url,
    alt,
    title,
    price,
    discountePercentage,
    discountedPrice,
    label,
  } = data;

  const discountValid = discountedPrice > 0;

  const slider = (
    <Box className="border border-neutral-200 flex flex-col w-44 rounded-2xl h-80">
      <Image
        src={url}
        alt={alt}
        width={178}
        height={182}
        className="border-b border-neutral-200 rounded-tl-2xl rounded-tr-2xl"
      />

      <Box className="p-2 flex flex-col justify-between h-full">
        <Box>
          <Typography variant="body1" className="text-neutral-800 text-xs">
            {title}
          </Typography>
        </Box>

        <Box className="flex justify-between items-end ">
          <Box className="flex flex-col justify-between h-11">
            {label && (
              <Typography
                variant="inherit"
                fontSize={9}
                className="bg-secondary-600 py-0.5 px-0.5  w-fit rounded text-neutral-50"
              >
                شگفت انگیز
              </Typography>
            )}

            {discountValid && (
              <Typography
                variant="inherit"
                fontSize={12}
                className="bg-primary-400 py-0.5 px-2 w-fit rounded text-neutral-200 !mt-1"
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
      </Box>
    </Box>
  );

  const product = <Box>product</Box>;

  switch (variant) {
    case "product":
      return product;
    default:
      return slider;
  }
}

// this is a test data for this component
// const data = {
//   url: "/panke.webp",
//   alt: "panke",
//   title: "این پنکه شامل دو پره و سه پایه می‌مباشد",
//   price: 799000,
//   discountePercentage: 20,
//   discountedPrice: 0,
//   label: true,
// };
