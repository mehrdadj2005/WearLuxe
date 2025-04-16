import { categories } from "@/config/category";

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

    return (<div>category: {(await params).categorySlug}</div>);
}

export default CategoryPage;