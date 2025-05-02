export interface IProduct {
  id: string;
  categoryId: string;
  categoryName: string;
  slug: string;
  name: string;
  price: number;
  discountedPercentage: number;
  discount: number;
  discountedPrice: number;
  stock: boolean;
  colors: string[];
  sizes: string[];
  images: string[];
  rating: number;
  description: string;
}
