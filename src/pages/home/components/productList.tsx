import { useMemo } from "react";
import useGetProductList from "../../../api/useGetProductList";
import { ProductCard } from "../../../shared/card";
import { IntersectionObserver } from "../../../shared/ui";
import ProductListGrid from "./productListGrid";

const ProductList = () => {
  const { data, fetchNextPage } = useGetProductList({});

  const products = useMemo(() => {
    return data?.pages.flatMap((page) => page.products) ?? [];
  }, [data]);

  return (
    <>
      <ProductListGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductListGrid>
      <IntersectionObserver onIntersect={fetchNextPage} />
    </>
  );
};

export default ProductList;
