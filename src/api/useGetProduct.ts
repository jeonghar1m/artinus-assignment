import { useSuspenseQuery } from "@tanstack/react-query";
import { API_URL_PREFIX } from "../constants";

export const GET_PRODUCT_QUERY_KEY = "getProduct";

interface GetProductParams {
  id: string;
}

const useGetProduct = ({ id }: GetProductParams) => {
  const { data, isLoading, error } = useSuspenseQuery({
    queryKey: [GET_PRODUCT_QUERY_KEY, id],
    queryFn: async () => {
      const res = await fetch(`${API_URL_PREFIX}/products/${id}`);
      return await res.json();
    },
  });

  return { data, isLoading, error };
};

export default useGetProduct;
