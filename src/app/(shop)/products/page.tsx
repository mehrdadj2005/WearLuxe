interface IProducts {
    params: Promise<{}>;
    searchParams: Promise<{ title: string }>
}

async function ProductsPage({ searchParams }: IProducts) {
    const title = (await searchParams).title ?? {}

    return (<div>products {title || "page"}</div>);
}

export default ProductsPage;