import { getAllProducts, categories } from "@/config/category";

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

    return (<div>product: {product?.name}</div>);
}

export default ProductId;