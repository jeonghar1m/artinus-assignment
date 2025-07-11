import { useQuery } from "@tanstack/react-query";
import { API_URL_PREFIX } from "../constants";
import type { ProductListResponse } from "../model";

export const GET_PRODUCT_LIST_QUERY_KEY = "getProductList";

interface GetProductListParams {
  skip?: number;
  limit?: number;
}

const useGetProductList = ({ skip = 0, limit = 20 }: GetProductListParams) => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<ProductListResponse>({
    queryKey: [GET_PRODUCT_LIST_QUERY_KEY, skip, limit],
    queryFn: async () => {
      const queryParams = new URLSearchParams({
        skip: skip.toString(),
        limit: limit.toString(),
      });
      const res = await fetch(`${API_URL_PREFIX}/products?${queryParams}`);
      return await res.json();
    },
  });

  return { products, isLoading, error };
};

export default useGetProductList;
