interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  colors: string[];
  sizes: string[];
  images: string[];
  rating: number;
  description?: string;
  items?: string[];
  discountePercentage?: number;
  discountedPrice?: number;
}

interface Category {
  id: string;
  slug: string;
  title: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "1",
    slug: "pants",
    title: "شلوار",
    products: [
      {
        id: "101",
        slug: "jeans-slim-fit",
        name: "شلوار جین اسلیم فیت",
        price: 320000,
        discountePercentage: 20,
        discountedPrice: 200000,
        colors: ["آبی", "مشکی"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/images/hero05.jpg", "/images/hero06.jpg"],
        rating: 4.8,
        description: "شلوار جین اسلیم فیت با الیاف باکیفیت",
      },
      {
        id: "102",
        slug: "jeans-slim-fit",
        name: "شلوار جین اسلیم فیت",
        price: 320000,
        discountePercentage: 20,
        discountedPrice: 0,
        colors: ["آبی", "مشکی"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/images/hero05.jpg", "/images/hero06.jpg"],
        rating: 4.8,
        description: "شلوار جین اسلیم فیت با الیاف باکیفیت",
      },
      {
        id: "103",
        slug: "jeans-slim-fit",
        name: "شلوار جین اسلیم فیت",
        price: 320000,
        discountePercentage: 20,
        discountedPrice: 0,
        colors: ["آبی", "مشکی"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/images/hero05.jpg", "/images/hero06.jpg"],
        rating: 4.8,
        description: "شلوار جین اسلیم فیت با الیاف باکیفیت",
      },
      {
        id: "104",
        slug: "jeans-slim-fit",
        name: "شلوار جین اسلیم فیت",
        price: 320000,
        discountePercentage: 20,
        discountedPrice: 0,
        colors: ["آبی", "مشکی"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/images/hero05.jpg", "/images/hero06.jpg"],
        rating: 4.8,
        description: "شلوار جین اسلیم فیت با الیاف باکیفیت",
      },
      {
        id: "105",
        slug: "jeans-slim-fit",
        name: "شلوار جین اسلیم فیت",
        price: 320000,
        discountePercentage: 20,
        discountedPrice: 0,
        colors: ["آبی", "مشکی"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/images/hero05.jpg", "/images/hero06.jpg"],
        rating: 4.8,
        description: "شلوار جین اسلیم فیت با الیاف باکیفیت",
      },
      {
        id: "106",
        slug: "jeans-slim-fit",
        name: "شلوار جین اسلیم فیت",
        price: 320000,
        discountePercentage: 20,
        discountedPrice: 0,
        colors: ["آبی", "مشکی"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/images/hero05.jpg", "/images/hero06.jpg"],
        rating: 4.8,
        description: "شلوار جین اسلیم فیت با الیاف باکیفیت",
      },
      {
        id: "107",
        slug: "jeans-slim-fit",
        name: "شلوار جین اسلیم فیت",
        price: 320000,
        discountePercentage: 20,
        discountedPrice: 0,
        colors: ["آبی", "مشکی"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/images/hero05.jpg", "/images/hero06.jpg"],
        rating: 4.8,
        description: "شلوار جین اسلیم فیت با الیاف باکیفیت",
      },
      {
        id: "108",
        slug: "jeans-slim-fit",
        name: "شلوار جین اسلیم فیت",
        price: 320000,
        discountePercentage: 20,
        discountedPrice: 0,
        colors: ["آبی", "مشکی"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/images/hero05.jpg", "/images/hero06.jpg"],
        rating: 4.8,
        description: "شلوار جین اسلیم فیت با الیاف باکیفیت",
      },
      {
        id: "109",
        slug: "jeans-slim-fit",
        name: "شلوار جین اسلیم فیت",
        price: 320000,
        discountePercentage: 20,
        discountedPrice: 0,
        colors: ["آبی", "مشکی"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/images/hero05.jpg", "/images/hero06.jpg"],
        rating: 4.8,
        description: "شلوار جین اسلیم فیت با الیاف باکیفیت",
      },
      {
        id: "110",
        slug: "jeans-slim-fit",
        name: "شلوار جین اسلیم فیت",
        price: 320000,
        discountePercentage: 20,
        discountedPrice: 0,
        colors: ["آبی", "مشکی"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/images/hero06.jpg", "/images/hero06.jpg"],
        rating: 4.8,
        description: "شلوار جین اسلیم فیت با الیاف باکیفیت",
      },
    ],
  },
  {
    id: "2",
    slug: "shirts",
    title: "پیراهن",
    products: [
      {
        id: "201",
        slug: "formal-white-shirt",
        name: "پیراهن رسمی سفید",
        price: 320000,
        discountePercentage: 20,
        discountedPrice: 0,
        colors: ["سفید"],
        sizes: ["36", "38", "40", "42"],
        images: ["/images/white-shirt-4.jpg", "/images/white-shirt-5.jpg"],
        rating: 4.7,
      },
    ],
  },
  {
    id: "3",
    slug: "cats",
    title: "کلاه",
    products: [
      {
        id: "301",
        slug: "baseball-cap",
        name: "کلاه بیسبال",
        price: 320000,
        colors: ["مشکی", "سفید", "آبی"],
        sizes: ["تک سایز"],
        images: ["/images/cap-5.jpg", "/images/cap-4.jpg"],
        rating: 4.2,
      },
    ],
  },
  {
    id: "4",
    slug: "sets",
    title: "ست",
    products: [
      {
        id: "401",
        slug: "summer-set",
        name: "ست تابستانی",
        price: 320000,
        discountePercentage: 20,
        discountedPrice: 0,
        items: ["پیراهن", "شلوار", "کلاه"],
        colors: ["آبی", "سفید"],
        sizes: ["M", "L"],
        images: ["/images/summer-set-6.jpg"],
        rating: 4.6,
      },
    ],
  },
];

export const getAllProducts = (): Product[] => {
  return categories.flatMap((category) => category.products);
};
