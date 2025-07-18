export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  images: string[];
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductDetailResponse extends Product {
  tags: string[];
}
