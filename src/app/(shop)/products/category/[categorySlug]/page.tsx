import ProductCard from "@/components/products/productCard";
import { categories } from "@/config/category";
import { catsCategory } from "@/config/catsCategory";
import { Box } from "@mui/material";

interface ICategory {
  params: Promise<{ categorySlug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    categorySlug: category.slug,
  }));
}

async function CategoryPage({ params }: ICategory) {
  console.log(await params);

  // return (<div>category: {(await params).categorySlug}</div>);
  return (
    <Box className="w-full px-0 flex flex-wrap justify-start">
      {catsCategory.products.map((item) => (
        <Box
          key={item.id}
          className="p-2 w-1/2 sm:w-1/3 lg:w-1/4 flex justify-center"
        >
          <ProductCard {...item} />
        </Box>
      ))}
    </Box>
  );
}

export default CategoryPage;
