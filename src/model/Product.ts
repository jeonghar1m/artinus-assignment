export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  tags: string[];
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export interface ProductListResponse {
  products: Omit<Product, "tags">[];
  total: number;
  skip: number;
  limit: number;
}

export type ProductDetailResponse = Pick<
  Product,
  "id" | "title" | "price" | "tags" | "thumbnail"
>;
