interface IProducts {
    params: {};
    searchParams: { title?: string }
}

function ProductsPage({ searchParams }: IProducts) {
    const title = searchParams.title || "page"

    return (<div>products {title}</div>);
}

export default ProductsPage;