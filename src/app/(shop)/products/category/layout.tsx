"use client";

import Container from "@/components/container";
import ProductDetailsFilter from "@/components/products/productDetailsFilter";
import ProductDetailsSort from "@/components/products/productDetailsSort";
import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);
  const [openSortDrawer, setOpenSortDrawer] = useState(false);

  const toggleDrawerFilter = (open: boolean) => setOpenFilterDrawer(open);
  const toggleDrawerSort = (open: boolean) => setOpenSortDrawer(open);

  return (
    <Container className="flex xl:flex-row flex-col">
      <Box className="flex p-4 pb-2 gap-x-4 xl:hidden">
        <Box>
          <Button
            variant="outlined"
            onClick={() => toggleDrawerFilter(!openFilterDrawer)}
          >
            جستجوی پیشرفته
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            onClick={() => toggleDrawerSort(!openSortDrawer)}
          >
            برتب سازی
          </Button>
        </Box>
      </Box>
      <ProductDetailsFilter showDrawerFilter={openFilterDrawer} />

      <Box className="flex flex-col w-full">
        <ProductDetailsSort showDarwerSort={openSortDrawer} />
        {children}
      </Box>
    </Container>
  );
}
