import { categories } from "@/config/category";
import { Container, Typography } from "@mui/material";
import Link from "next/link";

function Nav() {
    return (
        <nav className="py-3">
            <Container>
                <ul className="flex gap-5">
                    <li>
                        <Link href={`/`}>
                            <Typography variant="subtitle1" >صفحه اصلی</Typography>
                        </Link>
                    </li>
                    {categories.map(category =>
                        <li key={category.id} >
                            <Link href={`/products/category/${category.slug}`}>
                                <Typography variant="subtitle1" >{category.name}</Typography>
                            </Link>
                        </li>
                    )}
                    <li>
                        <Link href={`/aboutus`}>
                            <Typography variant="subtitle1" >درباره ما</Typography>
                        </Link>
                    </li>
                </ul>
            </Container>
        </nav>);
}

export default Nav;