import { useSuspenseQuery } from "@tanstack/react-query";
import { API_URL_PREFIX } from "../constants";
import type { ProductDetailResponse } from "../model";

export const GET_PRODUCT_QUERY_KEY = "getProduct";

interface GetProductParams {
  id: string;
}

const useGetProduct = ({ id }: GetProductParams) => {
  const { data, isLoading, error } = useSuspenseQuery<ProductDetailResponse>({
    queryKey: [GET_PRODUCT_QUERY_KEY, id],
    queryFn: async () => {
      const res = await fetch(`${API_URL_PREFIX}/products/${id}`);
      return await res.json();
    },
  });

  return { data, isLoading, error };
};

export default useGetProduct;
