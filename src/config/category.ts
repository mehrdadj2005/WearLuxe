interface Product {
  id: string;
  slug: string;
  name: string;
  price: string;
  colors: string[];
  sizes: string[];
  images: string[];
  rating: number;
  description?: string;
  items?: string[];
}

interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "1",
    slug: "pants",
    name: "شلوار",
    description: "انواع شلوار مردانه و زنانه با کیفیت عالی",
    products: [
      {
        id: "101",
        slug: "jeans-slim-fit",
        name: "شلوار جین اسلیم فیت",
        price: "320,000 تومان",
        colors: ["آبی", "مشکی"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/images/jeans-1.jpg", "/images/jeans-2.jpg"],
        rating: 4.8,
        description: "شلوار جین اسلیم فیت با الیاف باکیفیت",
      },
    ],
  },
  {
    id: "2",
    slug: "shirts",
    name: "پیراهن",
    description: "پیراهن های رسمی و اسپرت",
    products: [
      {
        id: "201",
        slug: "formal-white-shirt",
        name: "پیراهن رسمی سفید",
        price: "250,000 تومان",
        colors: ["سفید"],
        sizes: ["36", "38", "40", "42"],
        images: ["/images/white-shirt-1.jpg", "/images/white-shirt-2.jpg"],
        rating: 4.7,
      },
    ],
  },
  {
    id: "3",
    slug: "hats",
    name: "کلاه",
    description: "کلاه های فصلی و مد روز",
    products: [
      {
        id: "301",
        slug: "baseball-cap",
        name: "کلاه بیسبال",
        price: "120,000 تومان",
        colors: ["مشکی", "سفید", "آبی"],
        sizes: ["تک سایز"],
        images: ["/images/cap-1.jpg", "/images/cap-2.jpg"],
        rating: 4.2,
      },
    ],
  },
  {
    id: "4",
    slug: "sets",
    name: "ست",
    description: "ست های هماهنگ مردانه و زنانه",
    products: [
      {
        id: "401",
        slug: "summer-set",
        name: "ست تابستانی",
        price: "550,000 تومان",
        items: ["پیراهن", "شلوار", "کلاه"],
        colors: ["آبی", "سفید"],
        sizes: ["M", "L"],
        images: ["/images/summer-set-1.jpg"],
        rating: 4.6,
      },
    ],
  },
];

export const getAllProducts = (): Product[] => {
  return categories.flatMap((category) => category.products);
};
