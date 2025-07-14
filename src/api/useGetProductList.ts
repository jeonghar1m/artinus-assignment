import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { API_URL_PREFIX } from "../constants";
import type { ProductListResponse } from "../model";

export const GET_PRODUCT_LIST_QUERY_KEY = "getProductList";

interface GetProductListParams {
  limit?: number;
}

const useGetProductList = ({ limit = 20 }: GetProductListParams) => {
  const skip = 0;
  const { data, isLoading, error, fetchNextPage } =
    useSuspenseInfiniteQuery<ProductListResponse>({
      queryKey: [GET_PRODUCT_LIST_QUERY_KEY],
      queryFn: async ({ pageParam: pageOffset }: { pageParam?: unknown }) => {
        const currentSkip = pageOffset as number;
        const queryParams = new URLSearchParams({
          skip: currentSkip.toString(),
          limit: limit.toString(),
        });
        const res = await fetch(`${API_URL_PREFIX}/products?${queryParams}`);
        return await res.json();
      },
      gcTime: 1000 * 60 * 5,
      initialPageParam: skip,
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage?.products || lastPage.products.length < limit) {
          return undefined;
        }
        return skip + allPages.length * limit;
      },
    });

  return { data, isLoading, error, fetchNextPage };
};

export default useGetProductList;
